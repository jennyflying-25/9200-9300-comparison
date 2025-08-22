import { MetadataRoute } from 'next'
 
const BASE_URL = 'https://page.axonodesolution.com';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ''
  ];
 
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1.0,
  }));
}
