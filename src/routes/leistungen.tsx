import { CalendarClock, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/header";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const title = "Leistungen | Empfangsdienst, Night Audit & Hotelservice";
const description =
  "Alle Leistungen von DPP Services im Detail: Empfangsdienst und Hotelrezeption, Night Audit, Tagungs- und Bankettservice sowie Büro-Empfang im Rhein-Main-Gebiet.";

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
      "@type": "Service",
      name: "Empfangs- und Hotelservices",
      description,
      serviceType: "Empfangsdienst, Hotelrezeption, Night Audit, Tagungsservice, Büro-Empfang",
      provider: { "@id": `${SITE_ORIGIN}/#business` },
      areaServed: "Rhein-Main-Gebiet",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_ORIGIN}/leistungen` },
      ],
    },
  ],
};

const copy = {
  de: {
    eyebrowHero: "Leistungen",
    heroTitle: "Empfangs- und Hotelservices, die Ihr Haus tragen",
    heroText:
      "Von der klassischen Rezeption über den Nachtdienst bis zum Bankettservice: Wir stellen geschultes Personal mit Hotel-DNA – dauerhaft, als Vertretung oder kurzfristig innerhalb von 24 Stunden.",
    heroCta: "Personal anfragen",
    eyebrowModels: "Einsatzmodelle",
    modelsTitle: "Drei Wege, wie wir zusammenarbeiten",
    modelsText:
      "Sie entscheiden über Umfang und Dauer – wir liefern das passende Personal und übernehmen Planung, Einsatzsteuerung und Qualitätskontrolle.",
    models: [
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
    ],
    includedTitle: "In jedem Einsatz enthalten",
    included: [
      "Persönlicher Ansprechpartner für Ihr Haus",
      "Einarbeitung nach Ihren Standards & SOPs",
      "Erfahrung mit gängigen PMS- und Kassensystemen",
      "Gepflegtes Auftreten und passende Dienstkleidung",
      "Deutsch- und Englischkenntnisse im Gästekontakt",
      "Transparente Abrechnung nach Einsatzstunden",
    ],
    includedCta: "Angebot erhalten",
  },
  en: {
    eyebrowHero: "Services",
    heroTitle: "Reception and hotel services that carry your property",
    heroText:
      "From classic front desk service to night duty and banquet support: we provide trained staff with real hotel DNA – on a permanent basis, as cover, or on short notice within 24 hours.",
    heroCta: "Request staff",
    eyebrowModels: "Engagement models",
    modelsTitle: "Three ways we work together",
    modelsText:
      "You decide on scope and duration – we provide the right staff and take care of planning, scheduling, and quality control.",
    models: [
      {
        icon: CalendarClock,
        title: "Permanent staffing",
        text: "Fixed shifts with an established core team – ideal for properties that need predictable continuity at the front desk.",
      },
      {
        icon: ShieldCheck,
        title: "Holiday & sick leave cover",
        text: "We bridge absences without any drop in quality: onboarded staff who know your standards.",
      },
      {
        icon: Sparkles,
        title: "Event & peak support",
        text: "Trade fairs, conferences, high season: short-notice reinforcement for reception, conferences, and banquets.",
      },
    ],
    includedTitle: "Included in every assignment",
    included: [
      "A dedicated point of contact for your property",
      "Onboarding to your standards & SOPs",
      "Experience with common PMS and POS systems",
      "Well-groomed appearance and appropriate uniforms",
      "German and English skills for guest contact",
      "Transparent billing by hours worked",
    ],
    includedCta: "Get a quote",
  },
};

export function LeistungenPage() {
  const t = useCopy(copy);
  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={title} description={description} path="/leistungen" jsonLd={jsonLd} />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="glow-orb -top-20 right-0 h-80 w-80 opacity-25" />
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

        <Services />

        <section className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">{t.eyebrowModels}</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                {t.modelsTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.modelsText}
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {t.models.map((m) => (
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
                    {t.includedTitle}
                  </h3>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {t.included.map((i) => (
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
                  {t.includedCta}
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
