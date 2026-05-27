export default function sitemap() {
  return [
    {
      url: 'https://jahid-portfolio-sandy.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://jahid-portfolio-sandy.vercel.app/#about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://jahid-portfolio-sandy.vercel.app/#skills',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://jahid-portfolio-sandy.vercel.app/#projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://jahid-portfolio-sandy.vercel.app/#certifications',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://jahid-portfolio-sandy.vercel.app/#education',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}