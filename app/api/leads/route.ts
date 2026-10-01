import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { saveLead } from '@/lib/leadStorage';

// In-memory rate limiting map: phone -> last timestamp (ms)
const rateLimitMap = new Map<string, number>();

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long').max(100),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15)
    .regex(/^[0-9+\s-]{10,15}$/, 'Invalid mobile number format'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  configuration: z.string().optional(),
  budget: z.string().optional(),
  visitDate: z.string().optional(),
  message: z.string().max(1000).optional(),
  sourcePage: z.string().optional(),
  sourceCTA: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted regarding this property enquiry.',
  }),
  bot_check: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot Spam Check
    if (body.bot_check && body.bot_check.trim() !== '') {
      console.warn('[SPAM BOT DETECTED] Honeypot field filled');
      // Return synthetic success so bots don't retry
      return NextResponse.json({
        success: true,
        message: 'Thank you! Our property consultant will contact you shortly.',
      });
    }

    // 2. Validate request body with Zod
    const validationResult = leadSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMsg = validationResult.error.issues[0]?.message || 'Invalid input data';
      return NextResponse.json({ success: false, error: errorMsg }, { status: 400 });
    }

    const data = validationResult.data;

    // 3. Rate Limiting Check (Prevent duplicate submissions within 15s for same phone)
    const now = Date.now();
    const cleanPhone = data.phone.replace(/\D/g, '');
    const lastSubmitTime = rateLimitMap.get(cleanPhone);
    if (lastSubmitTime && now - lastSubmitTime < 15000) {
      return NextResponse.json(
        { success: false, error: 'A submission with this phone number was received recently. Please wait a moment.' },
        { status: 429 }
      );
    }
    rateLimitMap.set(cleanPhone, now);

    // 4. Extract IP & Prepare Lead Record
    const userIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown IP';

    const leadRecord = {
      timestamp: new Date().toISOString(),
      name: data.name.trim(),
      phone: cleanPhone,
      email: data.email?.trim() || '',
      configuration: data.configuration || '',
      budget: data.budget || '',
      visitDate: data.visitDate || '',
      message: data.message?.trim() || '',
      sourcePage: data.sourcePage || '/',
      sourceCTA: data.sourceCTA || 'Site Enquiry',
      utmSource: data.utmSource || '',
      utmMedium: data.utmMedium || '',
      utmCampaign: data.utmCampaign || '',
      utmTerm: data.utmTerm || '',
      utmContent: data.utmContent || '',
      consent: data.consent,
      userIp,
    };

    // 5. Store lead via storage abstraction
    const saveResult = await saveLead(leadRecord);

    if (!saveResult.success) {
      return NextResponse.json(
        { success: false, error: 'Could not record enquiry. Please try calling directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Our property consultant will contact you shortly.',
      provider: saveResult.provider,
    });
  } catch (err: any) {
    console.error('[API LEADS ERROR]', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
