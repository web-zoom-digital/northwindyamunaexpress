import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

export interface LeadData {
  timestamp: string;
  name: string;
  phone: string;
  email?: string;
  configuration?: string;
  budget?: string;
  visitDate?: string;
  message?: string;
  sourcePage?: string;
  sourceCTA?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  consent: boolean;
  userIp?: string;
}

export async function saveLead(lead: LeadData): Promise<{ success: boolean; provider: string; error?: string }> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

  // 1. If Apps Script Webhook URL is provided, send lead payload via fetch
  if (webhookUrl) {
    try {
      // Attach fields as query parameters so e.parameter is populated in Apps Script,
      // while also passing JSON body for e.postData.contents
      const targetUrl = new URL(webhookUrl);
      targetUrl.searchParams.append('name', lead.name);
      targetUrl.searchParams.append('phone', lead.phone);
      targetUrl.searchParams.append('email', lead.email || '');
      targetUrl.searchParams.append('configuration', lead.configuration || '');
      targetUrl.searchParams.append('config', lead.configuration || '');
      targetUrl.searchParams.append('budget', lead.budget || '');
      targetUrl.searchParams.append('visitDate', lead.visitDate || '');
      targetUrl.searchParams.append('message', lead.message || '');
      targetUrl.searchParams.append('timestamp', lead.timestamp);

      const payload = {
        name: lead.name,
        phone: lead.phone,
        email: lead.email || '',
        configuration: lead.configuration || '',
        config: lead.configuration || '',
        budget: lead.budget || '',
        visitDate: lead.visitDate || '',
        message: lead.message || '',
        timestamp: lead.timestamp,
      };

      const response = await fetch(targetUrl.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });

      console.log(`[LEAD SENT TO GOOGLE SCRIPT WEBHOOK] Phone: ${lead.phone}, status: ${response.status}`);
      return { success: true, provider: 'Google Apps Script Webhook' };
    } catch (err: any) {
      console.error('[GOOGLE SCRIPT WEBHOOK ERROR]', err?.message || err);
      // Fall through to next provider / fallback
    }
  }

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  // If Google credentials are provided, append to Google Sheet
  if (serviceAccountEmail && privateKey && sheetId) {
    try {
      // Clean private key formatting if passed as escaped string
      privateKey = privateKey.replace(/\\n/g, '\n');

      const auth = new google.auth.JWT({
        email: serviceAccountEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const dateObj = new Date(lead.timestamp);
      const dateStr = dateObj.toISOString().split('T')[0];
      const timeStr = dateObj.toTimeString().split(' ')[0];

      const rowValues = [
        dateStr,
        timeStr,
        lead.name,
        lead.phone,
        lead.email || '',
        lead.configuration || '',
        lead.budget || '',
        lead.visitDate || '',
        lead.message || '',
        '', // sourcePage omitted
        '', // sourceCTA omitted
        lead.utmSource || '',
        lead.utmMedium || '',
        lead.utmCampaign || '',
        lead.utmTerm || '',
        lead.utmContent || '',
        lead.consent ? 'Yes' : 'No',
        lead.userIp || ''
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Sheet1!A:R',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowValues],
        },
      });

      console.log(`[LEAD SAVED TO GOOGLE SHEET] Phone: ${lead.phone}`);
      return { success: true, provider: 'Google Sheets' };
    } catch (err: any) {
      console.error('[GOOGLE SHEETS API ERROR]', err?.message || err);
      // Fall through to local storage fallback
    }
  }

  // Local File Fallback during development
  try {
    const scratchDir = path.join(process.cwd(), 'scratch');
    if (!fs.existsSync(scratchDir)) {
      fs.mkdirSync(scratchDir, { recursive: true });
    }
    const logFilePath = path.join(scratchDir, 'leads_log.json');
    
    let existingLeads: LeadData[] = [];
    if (fs.existsSync(logFilePath)) {
      try {
        const raw = fs.readFileSync(logFilePath, 'utf-8');
        existingLeads = JSON.parse(raw);
      } catch (e) {
        existingLeads = [];
      }
    }

    existingLeads.push(lead);
    fs.writeFileSync(logFilePath, JSON.stringify(existingLeads, null, 2), 'utf-8');

    console.log(`[LEAD SAVED TO LOCAL FILE] Phone: ${lead.phone} (Set GOOGLE_SHEET_ID env var for Google Sheets integration)`);
    return { success: true, provider: 'Local Storage Fallback' };
  } catch (err: any) {
    console.error('[LOCAL LEAD STORAGE ERROR]', err);
    return { success: false, provider: 'None', error: err?.message || 'Failed to save lead' };
  }
}
