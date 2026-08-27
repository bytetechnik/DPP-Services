import { MapPin, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/header";
import { About } from "@/components/site/about";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const title = "Über uns | DPP Services – Empfang & Hotelservices";
const description =
  "Wer wir sind: DPP Services steht für Gastfreundschaft, Diskretion und Verlässlichkeit am Empfang – mit geschultem Personal für Hotels und Unternehmen im Rhein-Main-Gebiet.";

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
      "@type": "AboutPage",
      name: title,
      description,
      url: `${SITE_ORIGIN}/ueber-uns`,
      mainEntity: { "@id": `${SITE_ORIGIN}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Über uns", item: `${SITE_ORIGIN}/ueber-uns` },
      ],
    },
  ],
};

const copy = {
  de: {
    eyebrowHero: "Über uns",
    heroTitle: "Gastfreundschaft ist unser Handwerk",
    heroText:
      "DPP Services ist ein Dienstleister für Empfangs- und Hotelservices im Rhein-Main-Gebiet. Wir stehen für herzliche Gästebetreuung, absolute Diskretion und Personal, auf das sich Ihr Haus verlassen kann.",
    heroCta: "Kennenlernen",
    eyebrowHaltung: "Haltung",
    haltungTitle: "Woran Sie uns erkennen",
    milestones: [
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
    ],
    quote:
      "„Wir bereiten jedem Gast ein herzliches Willkommen – und geben unseren Kunden die Sicherheit, dass der Empfang immer besetzt ist.“",
    quoteCaption: "DPP Services · Empfang & Hotelservices",
    einsatzgebiet: "Einsatzgebiet",
    einsatzgebietTitle: "Im gesamten Rhein-Main-Gebiet für Sie im Einsatz",
    regions: [
      "Frankfurt am Main",
      "Wiesbaden",
      "Mainz",
      "Darmstadt",
      "Offenbach",
      "Hanau",
      "Bad Homburg",
      "Rüsselsheim",
    ],
  },
  en: {
    eyebrowHero: "About us",
    heroTitle: "Hospitality is our craft",
    heroText:
      "DPP Services provides reception and hotel services throughout the Rhein-Main region. We stand for warm guest care, absolute discretion, and staff your property can rely on.",
    heroCta: "Get to know us",
    eyebrowHaltung: "Our approach",
    haltungTitle: "What sets us apart",
    milestones: [
      {
        label: "Standard",
        title: "Reception as your calling card",
        text: "First impressions matter. That's why we treat reception not as a side task, but as a core service discipline.",
      },
      {
        label: "Team",
        title: "People with hotel DNA",
        text: "Our staff come from hospitality and gastronomy backgrounds – trained, well-groomed, and confident with international guests.",
      },
      {
        label: "Way of working",
        title: "Your standards, our craft",
        text: "We work to your SOPs, within your systems, and at your pace – with a fixed point of contact and documented handovers.",
      },
    ],
    quote:
      "\u201cWe give every guest a warm welcome – and give our clients the confidence that reception is always staffed.\u201d",
    quoteCaption: "DPP Services · Reception & Hotel Services",
    einsatzgebiet: "Coverage area",
    einsatzgebietTitle: "Active across the entire Rhein-Main region",
    regions: [
      "Frankfurt am Main",
      "Wiesbaden",
      "Mainz",
      "Darmstadt",
      "Offenbach",
      "Hanau",
      "Bad Homburg",
      "Rüsselsheim",
    ],
  },
};

export function UeberUnsPage() {
  const t = useCopy(copy);
  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={title} description={description} path="/ueber-uns" jsonLd={jsonLd} />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="glow-orb -top-24 left-0 h-80 w-80 opacity-25" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow text-primary">{t.eyebrowHero}</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                {t.heroText}
              </p>
              <Link
                to="/kontakt"
                className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.heroCta}
              </Link>
            </Reveal>
          </div>
        </section>

        <About />

        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">{t.eyebrowHaltung}</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                {t.haltungTitle}
              </h2>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {t.milestones.map((m) => (
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
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm text-white/60">
                  {t.quoteCaption}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 rounded-3xl border border-border bg-card p-7 sm:p-10">
                <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                  <MapPin className="h-4 w-4" /> {t.einsatzgebiet}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-ink sm:text-2xl">
                  {t.einsatzgebietTitle}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {t.regions.map((r) => (
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
