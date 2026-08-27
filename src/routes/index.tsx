import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
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
        <Services />
        <About />
        <Process />
        <Insights />
        <Faq />
        
      </main>
      <SiteFooter />
    </div>
  );
}
