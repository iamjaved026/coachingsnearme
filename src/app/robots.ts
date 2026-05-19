import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const defaultUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${defaultUrl}/sitemap.xml`,
  };
}
