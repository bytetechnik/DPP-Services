import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";

const title = "Kontakt | DPP Services – Empfangsdienst Rhein-Main";
const description =
  "Kontaktieren Sie DPP Services für Empfangsdienst, Hotelrezeption, Night Audit und Tagungsservice im Rhein-Main-Gebiet. Anfrage in wenigen Minuten – Antwort innerhalb eines Werktages.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dpp-modern-revival.lovable.app/kontakt" },
    ],
    links: [{ rel: "canonical", href: "https://dpp-modern-revival.lovable.app/kontakt" }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16 sm:pt-20">
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
