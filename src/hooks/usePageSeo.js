import { useEffect } from 'react';

const SITE_URL = 'https://t2med.netlify.app';
const DEFAULT_IMAGE = `${SITE_URL}/images/save_the_date.png`;

const upsertMeta = (attributeName, attributeValue, content) => {
  if (!content) {
    return;
  }

  let meta = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attributeName, attributeValue);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  if (!href) {
    return;
  }

  let link = document.head.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
};

const upsertStructuredData = (id, data) => {
  if (!id || !data) {
    return;
  }

  let script = document.head.querySelector(`script[data-seo-id="${id}"]`);

  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo-id', id);
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

const resolveAbsoluteUrl = path => {
  if (!path) {
    return SITE_URL;
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  if (path.startsWith('/')) {
    return `${SITE_URL}${path}`;
  }

  return `${SITE_URL}/${path}`;
};

export const usePageSeo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  type = 'website',
  structuredData = []
}) => {
  useEffect(() => {
    const canonicalUrl = resolveAbsoluteUrl(path);
    const imageUrl = resolveAbsoluteUrl(image);

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', robots);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', imageUrl);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertLink('canonical', canonicalUrl);

    structuredData.forEach((item, index) => {
      upsertStructuredData(`page-${index}`, item);
    });
  }, [description, image, path, robots, structuredData, title, type]);
};
