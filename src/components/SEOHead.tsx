import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  author?: string;
  keywords?: string;
  noIndex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
}

export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://tiktokenizer.app/og-image.jpg",
  ogType = "website",
  author,
  keywords,
  noIndex = false,
  article,
}: SEOHeadProps) => {
  const fullTitle = `${title} - Tiktokenizer`;
  const baseUrl = "https://tiktokenizer.app";
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : `${baseUrl}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tiktokenizer" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Article Specific Tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.authors?.map((authorName) => (
            <meta key={authorName} property="article:author" content={authorName} />
          ))}
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-us" />
    </Head>
  );
};
