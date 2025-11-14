import { GetServerSideProps } from 'next';

const generateSiteMap = () => {
  const baseUrl = 'https://tiktokenizer.app';

  const pages = [
    {
      url: '',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: '/token-counter',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.95',
    },
    {
      url: '/tiktoken-online',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.95',
    },
    {
      url: '/openai-tokenizer',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.95',
    },
    {
      url: '/about',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: '/blog/understanding-tokenization',
      lastmod: '2024-10-20',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/optimize-token-usage',
      lastmod: '2024-10-18',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/comparing-models',
      lastmod: '2024-10-15',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/gpt-4-vs-gpt-35',
      lastmod: '2024-10-22',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/prompt-engineering-tips',
      lastmod: '2024-10-21',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/llm-api-cost-management',
      lastmod: '2024-10-22',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/finetuning-llms',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/token-economy',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/multilingual-tokenization',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/rag-systems',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/blog/efficient-prompt-design',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/tools',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: '/resources',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: '/contact',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: '/privacy',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: '/terms',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: '0.5',
    },
    {
      url: '/disclaimer',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: '0.5',
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ url, lastmod, changefreq, priority }) => {
          return `
      <url>
        <loc>${baseUrl}${url}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
    `;
        })
        .join('')}
    </urlset>
  `;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

const Sitemap = () => null;

export default Sitemap;
