import { SiteHeader } from "@/components/site/header";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const title = "Kontakt | DPP Services – Empfangsdienst Rhein-Main";
const description =
  "Kontaktieren Sie DPP Services für Empfangsdienst, Hotelrezeption, Night Audit und Tagungsservice im Rhein-Main-Gebiet. Anfrage in wenigen Minuten – Antwort innerhalb eines Werktages.";

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
      areaServed: "Rhein-Main-Gebiet",
      vatID: "DE460265715",
    },
    {
      "@type": "ContactPage",
      name: title,
      description,
      url: `${SITE_ORIGIN}/kontakt`,
      about: { "@id": `${SITE_ORIGIN}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Kontakt", item: `${SITE_ORIGIN}/kontakt` },
      ],
    },
  ],
};

export function KontaktPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={title} description={description} path="/kontakt" jsonLd={jsonLd} />
      <SiteHeader />
      <main>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
