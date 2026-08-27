import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";

const title = "Leistungen | Empfangsdienst, Night Audit & Hotelservice";
const description =
  "Alle Leistungen von DPP Services im Detail: Empfangsdienst und Hotelrezeption, Night Audit, Tagungs- und Bankettservice sowie Büro-Empfang im Rhein-Main-Gebiet.";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dpp-modern-revival.lovable.app/leistungen" },
    ],
    links: [{ rel: "canonical", href: "https://dpp-modern-revival.lovable.app/leistungen" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://dpp-modern-revival.lovable.app/#business",
            name: "DPP Services GbR",
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
          },
          {
            "@type": "Service",
            name: "Empfangs- und Hotelservices",
            description,
            serviceType: "Empfangsdienst, Hotelrezeption, Night Audit, Tagungsservice, Büro-Empfang",
            provider: { "@id": "https://dpp-modern-revival.lovable.app/#business" },
            areaServed: "Rhein-Main-Gebiet",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dpp-modern-revival.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://dpp-modern-revival.lovable.app/leistungen" },
            ],
          },
          ],
        }),
      },
    ],
  }),
  component: LeistungenPage,
});

const models = [
  {
    icon: CalendarClock,
    title: "Dauerhafte Besetzung",
    text: "Feste Schichten mit einem eingespielten Stammteam – ideal für Häuser, die planbare Kontinuität am Empfang brauchen.",
  },
  {
    icon: ShieldCheck,
    title: "Urlaubs- & Krankheitsvertretung",
    text: "Wir überbrücken Ausfälle ohne Qualitätsverlust: eingearbeitetes Personal, das Ihre Standards kennt.",
  },
  {
    icon: Sparkles,
    title: "Event- & Peak-Support",
    text: "Messen, Kongresse, Hochsaison: kurzfristige Verstärkung für Rezeption, Tagung und Bankett.",
  },
];

const included = [
  "Persönlicher Ansprechpartner für Ihr Haus",
  "Einarbeitung nach Ihren Standards & SOPs",
  "Erfahrung mit gängigen PMS- und Kassensystemen",
  "Gepflegtes Auftreten und passende Dienstkleidung",
  "Deutsch- und Englischkenntnisse im Gästekontakt",
  "Transparente Abrechnung nach Einsatzstunden",
];

function LeistungenPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="glow-orb -top-20 right-0 h-80 w-80 opacity-25" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow text-primary">Leistungen</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Empfangs- und Hotelservices, die Ihr Haus tragen
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Von der klassischen Rezeption über den Nachtdienst bis zum Bankettservice: Wir
                stellen geschultes Personal mit Hotel-DNA – dauerhaft, als Vertretung oder
                kurzfristig innerhalb von 24 Stunden.
              </p>
              <Link
                to="/kontakt"
                className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Personal anfragen
              </Link>
            </Reveal>
          </div>
        </section>

        <Services />

        <section className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Einsatzmodelle</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                Drei Wege, wie wir zusammenarbeiten
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Sie entscheiden über Umfang und Dauer – wir liefern das passende Personal und
                übernehmen Planung, Einsatzsteuerung und Qualitätskontrolle.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {models.map((m) => (
                <RevealItem key={m.title}>
                  <div className="card-elevated h-full p-7">
                    <span className="bg-gradient-brand shadow-brand grid h-11 w-11 place-items-center rounded-xl text-primary-foreground">
                      <m.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1}>
              <div className="mt-12 grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    In jedem Einsatz enthalten
                  </h3>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {included.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-ink-soft">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/kontakt"
                  className="bg-gradient-brand shadow-brand inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Angebot erhalten
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
