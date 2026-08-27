import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Insights } from "@/components/site/insights";
import { Faq } from "@/components/site/faq";
import { SiteFooter } from "@/components/site/footer";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const title = "DPP Services | Empfangsdienst & Hotelpersonal Rhein-Main";
const description =
  "DPP Services vermittelt professionelles Empfangs- und Hotelpersonal im Rhein-Main-Gebiet: Rezeption, Night Audit, Tagungsservice und Büro-Empfang – kurzfristig verfügbar.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DPP Services GbR",
  description,
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
};

export function IndexPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={title} description={description} path="/" jsonLd={jsonLd} />
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
