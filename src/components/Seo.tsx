import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://humotionai.com';
const DEFAULT_IMAGE = `${SITE_URL}/HUMOTION.AI1-removebg-preview.png`;

export interface SeoProps {
  /** Page-specific title. "· HumotionAI" is appended automatically unless already present. */
  title: string;
  description: string;
  /** Route path beginning with "/", e.g. "/mos". Used for canonical + og:url. */
  path: string;
  image?: string;
  /** og:type — website | article | product. Defaults to website. */
  type?: string;
  /** One or more JSON-LD objects to embed as structured data. */
  jsonLd?: object | object[];
  noindex?: boolean;
}

/**
 * Per-route SEO head tags. Crawlers that execute JS (Google, Bing) pick these up.
 * The static index.html still carries sensible defaults for non-JS social scrapers
 * hitting the homepage.
 */
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
  noindex = false,
}) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes('HumotionAI') ? title : `${title} · HumotionAI`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="HumotionAI" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
