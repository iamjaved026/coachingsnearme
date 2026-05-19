import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a', // Tailwind slate-900 / surface-dark base
    theme_color: '#3b82f6', // Tailwind blue-500 (Primary)
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
