import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Northwind Estate Sector 22D',
    short_name: 'Northwind Estate',
    description: 'Premium 3 & 4 BHK Luxury Residences on Yamuna Expressway',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1216',
    theme_color: '#0F1216',
    icons: [
      {
        src: '/logo-s.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
