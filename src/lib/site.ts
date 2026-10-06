/** Canonical public origin used in sitemap, Open Graph, and other absolute URLs. */
export const SITE_ORIGIN = "https://www.dpp-services.de";
export const SITE_LOGO = `${SITE_ORIGIN}/Icon.jpeg`;
export const BUSINESS_ID = `${SITE_ORIGIN}/#business`;

/** Impressum NAP. Schema, footer, contact, and llms.txt all read from here. */
export const BUSINESS = {
  name: "DPP Services GbR",
  telephone: "+4917670800798",
  telephoneDisplay: "+49 176 70800798",
  email: "info@dpp-services.de",
  vatID: "DE460265715",
  streetAddress: "Am Kronberger Hang 2",
  postalCode: "65824",
  addressLocality: "Schwalbach am Taunus",
  addressRegion: "Hessen",
  addressCountry: "DE",
  /** OSM node for Am Kronberger Hang 2, 65824 Schwalbach am Taunus. */
  latitude: 50.16354,
  longitude: 8.53335,
} as const;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.addressLocality}`,
)}`;

export const AREA_SERVED_CITIES = [
  "Frankfurt am Main",
  "Offenbach am Main",
  "Wiesbaden",
  "Mainz",
  "Darmstadt",
  "Hanau",
  "Neu-Isenburg",
  "Dreieich",
  "Langen",
  "Schwalbach am Taunus",
  "Eschborn",
  "Kronberg im Taunus",
  "Bad Soden am Taunus",
  "Königstein im Taunus",
  "Oberursel (Taunus)",
  "Bad Homburg vor der Höhe",
  "Hofheim am Taunus",
  "Kelkheim (Taunus)",
  "Rüsselsheim am Main",
] as const;

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const OFFER_CATALOG = [
  {
    name: "Empfangsdienst / Hotelrezeption",
    path: "/leistungen/empfang",
  },
  { name: "Night Audit", path: "/leistungen/night-audit" },
  { name: "Hotelservice / Tagung / Servicekräfte", path: "/leistungen/tagung" },
  { name: "Seminar Support", path: "/leistungen/seminar-support" },
  { name: "Büro-Empfang", path: "/leistungen/buero-empfang" },
] as const;

export function isPrerenderDocument() {
  return (
    typeof window !== "undefined" &&
    (window as Window & { __DPP_PRERENDER__?: boolean }).__DPP_PRERENDER__ === true
  );
}

export function cityList(names: readonly string[]) {
  return names.map((name) => ({ "@type": "City" as const, name }));
}

export function areaServedSchema() {
  return cityList(AREA_SERVED_CITIES);
}

export function postalAddressSchema() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: BUSINESS.streetAddress,
    postalCode: BUSINESS.postalCode,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  };
}

export function professionalServiceSchema(description: string) {
  return {
    "@type": "ProfessionalService" as const,
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    description,
    url: `${SITE_ORIGIN}/`,
    logo: SITE_LOGO,
    image: SITE_LOGO,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    vatID: BUSINESS.vatID,
    address: postalAddressSchema(),
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: areaServedSchema(),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: WEEKDAYS.map((day) => `https://schema.org/${day}`),
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog" as const,
      name: "Empfangs- und Hotelservices",
      itemListElement: OFFER_CATALOG.map((offer) => ({
        "@type": "Offer" as const,
        itemOffered: {
          "@type": "Service" as const,
          name: offer.name,
          url: `${SITE_ORIGIN}${offer.path}`,
        },
      })),
    },
  };
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path}`,
    })),
  };
}

export function faqPageSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.a,
      },
    })),
  };
}
