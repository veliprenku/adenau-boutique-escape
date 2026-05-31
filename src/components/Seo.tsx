import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { BRAND_NAME, CONTACT, DEFAULT_DESCRIPTION, PROPERTY_ADDRESS, SITE_URL } from "@/lib/site";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
  noIndex?: boolean;
}

const upsertMeta = (
  selector: string,
  attr: "content" | "href",
  value: string,
  create?: () => HTMLElement,
) => {
  const element = document.head.querySelector(selector) ?? create?.();
  if (element) {
    element.setAttribute(attr, value);
  }
};

const defaultLodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: BRAND_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    ...PROPERTY_ADDRESS,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Easy access", value: true },
  ],
};

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  image = `${SITE_URL}/apple-touch-icon.png`,
  type = "website",
  jsonLd = defaultLodgingJsonLd,
  noIndex = false,
}: SeoProps) {
  const location = useLocation();
  const pageTitle = title ? `${title} | ${BRAND_NAME}` : `${BRAND_NAME} | Guesthouse in Adenau near Nuerburgring`;
  const canonicalUrl = `${SITE_URL}${location.pathname === "/" ? "" : location.pathname}`;

  useEffect(() => {
    document.title = pageTitle;

    upsertMeta('meta[name="description"]', "content", description, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
      return meta;
    });
    upsertMeta('meta[name="author"]', "content", BRAND_NAME);
    upsertMeta('link[rel="canonical"]', "href", canonicalUrl);
    upsertMeta('meta[property="og:type"]', "content", type);
    upsertMeta('meta[property="og:title"]', "content", pageTitle);
    upsertMeta('meta[name="twitter:title"]', "content", pageTitle);
    upsertMeta('meta[property="og:description"]', "content", description);
    upsertMeta('meta[name="twitter:description"]', "content", description);
    upsertMeta('meta[property="og:image"]', "content", image);
    upsertMeta('meta[name="twitter:image"]', "content", image);
    upsertMeta('meta[property="og:url"]', "content", canonicalUrl, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      document.head.appendChild(meta);
      return meta;
    });
    upsertMeta('meta[name="robots"]', "content", noIndex ? "noindex, nofollow" : "index, follow", () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
      return meta;
    });

    const scriptId = "site-json-ld";
    const existing = document.getElementById(scriptId);
    existing?.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, [canonicalUrl, description, image, jsonLd, noIndex, pageTitle, type]);

  return null;
}
