import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/early-access', priority: 0.95, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/privacy', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/tester-terms', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/tester-privacy', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/tester-nda', priority: 0.6, changeFrequency: 'monthly' as const },
  ].map((route) => ({
    url: `${defaultUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return routes;
}
