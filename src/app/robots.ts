import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const defaultUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'cohere-ai',
        ],
        allow: ['/', '/early-access', '/about', '/contact', '/privacy', '/terms'],
      },
    ],
    sitemap: `${defaultUrl}/sitemap.xml`,
  };
}
