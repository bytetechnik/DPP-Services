import { SiteHeader } from "@/components/site/header";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { breadcrumbList, BUSINESS_ID, professionalServiceSchema, SITE_ORIGIN } from "@/lib/site";

const copy = {
  de: {
    metaTitle: "Kontakt | Empfangsdienst Frankfurt | DPP Services",
    metaDescription:
      "DPP Services GbR in Schwalbach am Taunus: Empfangsdienst und Hotelpersonal für Frankfurt und das Rhein-Main-Gebiet. Telefon +49 176 70800798.",
    breadcrumbHome: "Startseite",
    breadcrumbContact: "Kontakt",
  },
  en: {
    metaTitle: "Contact | Reception staff Frankfurt | DPP Services",
    metaDescription:
      "DPP Services GbR in Schwalbach am Taunus: reception and hotel staff for Frankfurt and the Rhein-Main region. Phone +49 176 70800798.",
    breadcrumbHome: "Home",
    breadcrumbContact: "Contact",
  },
} as const;

export function KontaktPage() {
  const t = useCopy(copy);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      professionalServiceSchema(t.metaDescription),
      {
        "@type": "ContactPage",
        name: t.metaTitle,
        description: t.metaDescription,
        url: `${SITE_ORIGIN}/kontakt`,
        about: { "@id": BUSINESS_ID },
      },
      breadcrumbList([
        { name: t.breadcrumbHome, path: "/" },
        { name: t.breadcrumbContact, path: "/kontakt" },
      ]),
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
