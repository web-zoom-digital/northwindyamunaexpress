import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    '',
    '/about',
    '/amenities',
    '/blog',
    '/contact',
    '/configurations/3-bhk-luxury-apartment',
    '/configurations/4-bhk-ultra-estate-residence',
    '/configurations/site-master-layout-plan',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/contact' || route === '/blog' ? 0.9 : 0.8,
  }));
}
