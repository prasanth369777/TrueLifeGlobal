import { useEffect, useMemo } from 'react';

const defaultSEO = {
  title: 'True Life Global | Accounting, Audit & Tax Services Singapore | ACRA Registered',
  description: 'True Life Global Pte. Ltd. is an ACRA-registered Singapore firm offering professional accounting, auditing, tax consultancy, and courier services. Trusted by SMEs and startups across Singapore.',
  canonical: 'https://true-life-global.netlify.app/',
  image: 'https://true-life-global.netlify.app/og-image.png',
};

const SEO = ({
  title,
  description,
  canonical,
  image,
  noIndex = false,
  noFollow = false,
  location = 'Singapore',
  keywords,
  author = 'True Life Global Pte. Ltd.',
}) => {
  // useMemo to prevent unnecessary recalculations
  const seoData = useMemo(() => ({
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    canonical: canonical || defaultSEO.canonical,
    image: image || defaultSEO.image,
    keywords: keywords || 'accounting Singapore, audit services Singapore, tax consultancy Singapore, ACRA registered, bookkeeping services, financial advisory, courier services Singapore, SME accounting, startup accounting, Singapore business services, IRAS compliance, corporate secretarial',
    author: author || 'True Life Global Pte. Ltd.',
    location: location || 'Singapore',
  }), [title, description, canonical, image, keywords, author, location]);

  // useMemo for meta tags to prevent recreation on every render
  const metaTags = useMemo(() => [
    { name: 'description', content: seoData.description },
    { name: 'title', content: seoData.title },
    { name: 'keywords', content: seoData.keywords },
    { name: 'author', content: seoData.author },
    { name: 'application-name', content: 'True Life Global' },
    { name: 'format-detection', content: 'telephone=no' },
    { property: 'og:title', content: seoData.title },
    { property: 'og:description', content: seoData.description },
    { property: 'og:url', content: seoData.canonical },
    { property: 'og:image', content: seoData.image },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'True Life Global Pte. Ltd.' },
    { property: 'og:locale', content: 'en_SG' },
    { property: 'og:country-name', content: 'Singapore' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoData.title },
    { name: 'twitter:description', content: seoData.description },
    { name: 'twitter:image', content: seoData.image },
    { name: 'twitter:site', content: '@TrueLifeGlobal' },
    { name: 'twitter:creator', content: '@TrueLifeGlobal' },
  ], [seoData]);

  // useMemo for GEO tags (Singapore specific)
  const geoTags = useMemo(() => [
    { name: 'geo.region', content: 'SG' },
    { name: 'geo.placename', content: seoData.location },
    { name: 'geo.position', content: '1.3521;103.8198' },
    { name: 'ICBM', content: '1.3521, 103.8198' },
    { name: 'location', content: 'lat=1.3521;long=103.8198' },
    { name: 'country', content: 'Singapore' },
  ], [seoData.location]);

  // useMemo for robots content
  const robotsContent = useMemo(() => {
    if (noIndex && noFollow) return 'noindex, nofollow';
    if (noIndex) return 'noindex, follow';
    if (noFollow) return 'index, nofollow';
    return 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large';
  }, [noIndex, noFollow]);

  // useMemo for JSON-LD Schema (LocalBusiness for Singapore)
  const schema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'True Life Global Pte. Ltd.',
    alternateName: 'True Life Global',
    url: 'https://true-life-global.netlify.app/',
    logo: 'https://true-life-global.netlify.app/logo192.png',
    image: 'https://true-life-global.netlify.app/og-image.png',
    description: seoData.description,
    email: 'info@truelifeglobal.com',
    telephone: '+65-XXXX-XXXX',
    legalName: 'True Life Global Pte. Ltd.',
    foundingDate: '2026-06-11',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'UEN',
      value: '202626385E',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1003 Toa Payoh Industrial Park, #07-1501',
      addressLocality: 'Toa Payoh',
      addressRegion: 'Singapore',
      addressCountry: 'SG',
      postalCode: '319075',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '1.3521',
      longitude: '103.8198',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Singapore',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@truelifeglobal.com',
      telephone: '+65-XXXX-XXXX',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
      responseTime: 'PT24H',
    },
    sameAs: [
      'https://www.linkedin.com/company/true-life-global',
      'https://www.facebook.com/TrueLifeGlobal',
      'https://www.instagram.com/truelifeglobal',
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accounting & Bookkeeping',
            description: 'Accurate, timely bookkeeping and financial record management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Auditing Services',
            description: 'Independent audits conducted with rigor and transparency',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tax Consultancy',
            description: 'Practical financial planning and business advisory support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Courier Services',
            description: 'Reliable document and parcel delivery within Singapore',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '25',
      bestRating: '5',
      worstRating: '1',
    },
  }), [seoData.description]);

  // Update SEO tags
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Remove existing meta tags with data-seo attribute
    const existingTags = document.querySelectorAll('meta[data-seo="true"]');
    existingTags.forEach((tag) => tag.remove());

    // Create new meta tags
    metaTags.forEach(({ name, property, content }) => {
      const tag = document.createElement('meta');
      tag.setAttribute('data-seo', 'true');
      if (name) tag.name = name;
      if (property) tag.property = property;
      tag.content = content;
      document.head.appendChild(tag);
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = seoData.canonical;

    // Update robots tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.name = 'robots';
      robotsTag.setAttribute('data-seo', 'true');
      document.head.appendChild(robotsTag);
    }
    robotsTag.content = robotsContent;

    // Add GEO tags
    geoTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        tag.setAttribute('data-seo', 'true');
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Cleanup function
    return () => {
      const tags = document.querySelectorAll('meta[data-seo="true"]');
      tags.forEach((tag) => tag.remove());
    };
  }, [seoData, metaTags, geoTags, robotsContent]);

  // Inject JSON-LD Schema
  useEffect(() => {
    // Remove existing schema
    const existingSchema = document.querySelector('script[data-schema="professional-service"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Inject schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'professional-service');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-schema="professional-service"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema]);

  return null;
};

export default SEO;