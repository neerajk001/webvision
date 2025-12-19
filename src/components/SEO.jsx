import React from "react";
import { Helmet } from "react-helmet-async";

// Reusable SEO component to centralize head tags for pages
export default function SEO({ title, description, url, image, keywords }) {
  const siteName = "Webvision Infotech";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonicalUrl = url ? `https://webvisioninfotech.com${url}` : "https://webvisioninfotech.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
