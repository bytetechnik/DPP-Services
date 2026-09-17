import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Insights } from "@/components/site/insights";
import { Faq } from "@/components/site/faq";
import { SiteFooter } from "@/components/site/footer";
import { LogoIntro } from "@/components/site/logo-intro";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const copy = {
  de: {
    metaTitle: "DPP Services | Empfangsdienst & Hotelpersonal Rhein-Main",
    metaDescription:
      "DPP Services vermittelt professionelles Empfangs- und Hotelpersonal im Rhein-Main-Gebiet: Rezeption, Night Audit, Tagungsservice und Büro-Empfang – kurzfristig verfügbar.",
    areaServed: "Rhein-Main-Gebiet",
  },
  en: {
    metaTitle: "DPP Services | Reception & Hotel Staff Rhein-Main",
    metaDescription:
      "DPP Services provides professional reception and hotel staff in the Rhein-Main region: front desk, night audit, conference service and office reception – available at short notice.",
    areaServed: "Rhein-Main region",
  },
} as const;

export function IndexPage() {
  const t = useCopy(copy);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DPP Services GbR",
    description: t.metaDescription,
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
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={t.metaTitle} description={t.metaDescription} path="/" jsonLd={jsonLd} />
      <LogoIntro />
      <SiteHeader />
      <main>
        <Hero />
        <Process />
        <Insights />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
