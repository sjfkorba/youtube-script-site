import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://youtube-script-site.vercel.app/sitemap.xml',
    host: 'https://youtube-script-site.vercel.app',
  };
}