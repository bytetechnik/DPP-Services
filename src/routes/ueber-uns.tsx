import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { About } from "@/components/site/about";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";

const title = "Über uns | DPP Services – Empfang & Hotelservices";
const description =
  "Wer wir sind: DPP Services steht für Gastfreundschaft, Diskretion und Verlässlichkeit am Empfang – mit geschultem Personal für Hotels und Unternehmen im Rhein-Main-Gebiet.";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://dpp-modern-revival.lovable.app/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "https://dpp-modern-revival.lovable.app/ueber-uns" }],
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
            "@type": "AboutPage",
            name: title,
            description,
            url: "https://dpp-modern-revival.lovable.app/ueber-uns",
            mainEntity: { "@id": "https://dpp-modern-revival.lovable.app/#business" },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: "https://dpp-modern-revival.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Über uns", item: "https://dpp-modern-revival.lovable.app/ueber-uns" },
            ],
          },
          ],
        }),
      },
    ],
  }),
  component: UeberUnsPage,
});

const regions = [
  "Frankfurt am Main",
  "Wiesbaden",
  "Mainz",
  "Darmstadt",
  "Offenbach",
  "Hanau",
  "Bad Homburg",
  "Rüsselsheim",
];

const milestones = [
  {
    label: "Anspruch",
    title: "Empfang als Visitenkarte",
    text: "Der erste Eindruck entscheidet. Deshalb behandeln wir den Empfang nicht als Nebenaufgabe, sondern als zentrale Servicedisziplin.",
  },
  {
    label: "Team",
    title: "Menschen mit Hotel-DNA",
    text: "Unsere Mitarbeitenden kommen aus Hotellerie und Gastronomie – geschult, gepflegt und sicher im Umgang mit internationalen Gästen.",
  },
  {
    label: "Arbeitsweise",
    title: "Ihre Standards, unser Handwerk",
    text: "Wir arbeiten nach Ihren SOPs, in Ihren Systemen und in Ihrem Rhythmus – mit fester Ansprechperson und dokumentierten Übergaben.",
  },
];

function UeberUnsPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="glow-orb -top-24 left-0 h-80 w-80 opacity-25" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow text-primary">Über uns</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Gastfreundschaft ist unser Handwerk
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                DPP Services ist ein Dienstleister für Empfangs- und Hotelservices im
                Rhein-Main-Gebiet. Wir stehen für herzliche Gästebetreuung, absolute Diskretion und
                Personal, auf das sich Ihr Haus verlassen kann.
              </p>
              <Link
                to="/kontakt"
                className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Kennenlernen
              </Link>
            </Reveal>
          </div>
        </section>

        <About />

        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Haltung</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                Woran Sie uns erkennen
              </h2>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {milestones.map((m) => (
                <RevealItem key={m.title}>
                  <div className="card-elevated h-full p-7">
                    <p className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                      {m.label}
                    </p>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1}>
              <figure className="bg-gradient-ink mt-12 rounded-3xl px-6 py-10 sm:px-12 sm:py-14">
                <Quote className="h-8 w-8 text-primary" />
                <blockquote className="mt-5 max-w-3xl font-display text-xl leading-snug font-bold text-white sm:text-2xl">
                  „Wir bereiten jedem Gast ein herzliches Willkommen – und geben unseren Kunden die
                  Sicherheit, dass der Empfang immer besetzt ist.“
                </blockquote>
                <figcaption className="mt-5 text-sm text-white/60">
                  DPP Services · Empfang &amp; Hotelservices
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 rounded-3xl border border-border bg-card p-7 sm:p-10">
                <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                  <MapPin className="h-4 w-4" /> Einsatzgebiet
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
                  Im gesamten Rhein-Main-Gebiet für Sie im Einsatz
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {regions.map((r) => (
                    <li
                      key={r}
                      className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold text-ink-soft"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
