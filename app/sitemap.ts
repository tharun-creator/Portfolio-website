import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date('2026-10-09T16:23:13.060Z');

  return [
    {
      url: 'https://tharunkumar.website/',
      lastModified: lastmod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://tharunkumar.website/about',
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://tharunkumar.website/contact',
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
