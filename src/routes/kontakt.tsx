import { SiteHeader } from "@/components/site/header";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const copy = {
  de: {
    metaTitle: "Kontakt | DPP Services – Empfangsdienst Rhein-Main",
    metaDescription:
      "Kontaktieren Sie DPP Services für Empfangsdienst, Hotelrezeption, Night Audit und Tagungsservice im Rhein-Main-Gebiet. Anfrage in wenigen Minuten – Antwort innerhalb eines Werktages.",
    areaServed: "Rhein-Main-Gebiet",
    breadcrumbHome: "Startseite",
    breadcrumbContact: "Kontakt",
  },
  en: {
    metaTitle: "Contact | DPP Services – Reception Staff Rhein-Main",
    metaDescription:
      "Contact DPP Services for reception, hotel front desk, night audit and conference service in the Rhein-Main region. Send an inquiry in minutes – reply within one business day.",
    areaServed: "Rhein-Main region",
    breadcrumbHome: "Home",
    breadcrumbContact: "Contact",
  },
} as const;

export function KontaktPage() {
  const t = useCopy(copy);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_ORIGIN}/#business`,
        name: "DPP Services GbR",
        url: `${SITE_ORIGIN}/`,
        logo: SITE_LOGO,
        image: SITE_LOGO,
        telephone: "+4917670800798",
        email: "info@dpp-services.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Am Kronberger Hang 2",
          postalCode: "65824",
          addressLocality: "Schwalbach am Taunus",
          addressCountry: "DE",
        },
        areaServed: t.areaServed,
        vatID: "DE460265715",
      },
      {
        "@type": "ContactPage",
        name: t.metaTitle,
        description: t.metaDescription,
        url: `${SITE_ORIGIN}/kontakt`,
        about: { "@id": `${SITE_ORIGIN}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: t.breadcrumbContact, item: `${SITE_ORIGIN}/kontakt` },
        ],
      },
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={t.metaTitle} description={t.metaDescription} path="/kontakt" jsonLd={jsonLd} />
      <SiteHeader />
      <main>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
