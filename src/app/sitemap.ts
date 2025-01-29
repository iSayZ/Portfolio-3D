import { MetadataRoute } from 'next';
import { projects } from '@/config/projects.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://estrine-alexis.fr';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/portfolio/projets/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...projectPages];
}