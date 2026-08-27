import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Insights } from "@/components/site/insights";
import { Faq } from "@/components/site/faq";

import { SiteFooter } from "@/components/site/footer";

const title = "DPP Services | Empfangsdienst & Hotelpersonal Rhein-Main";
const description =
  "DPP Services vermittelt professionelles Empfangs- und Hotelpersonal im Rhein-Main-Gebiet: Rezeption, Night Audit, Tagungsservice und Büro-Empfang – kurzfristig verfügbar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://dpp-modern-revival.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://dpp-modern-revival.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "DPP Services GbR",
          description,
          url: "https://dpp-modern-revival.lovable.app/",
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
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
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
