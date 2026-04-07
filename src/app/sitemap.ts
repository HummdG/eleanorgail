import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://eleanorgail.co.uk'
  const now = new Date()

  const routes = [
    '',
    '/about',
    '/services',
    '/services/wedding-planner',
    '/services/corporate-events',
    '/services/private-parties',
    '/fees',
    '/kind-words',
    '/gallery',
    '/blog',
    '/awards',
    '/contact',
    '/privacy-policy',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
