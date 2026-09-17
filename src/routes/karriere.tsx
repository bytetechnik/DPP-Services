import { ArrowUpRight, Briefcase, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { useCopy } from "@/lib/i18n";
import { jobsCopy } from "@/lib/jobs-data";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const copy = {
  de: {
    metaTitle: "Karriere | Stellenangebote bei DPP Services",
    metaDescription:
      "Werden Sie Teil von DPP Services: Offene Stellen für Empfangskräfte und Night Auditoren im Rhein-Main-Gebiet. Bewerbung an info@dpp-services.de.",
    areaServed: "Rhein-Main-Gebiet",
    breadcrumbHome: "Startseite",
    breadcrumbPage: "Karriere",
    eyebrowHero: "Karriere",
    heroTitle: "Menschen mit Hotel-DNA gesucht",
    heroText:
      "DPP Services sucht zuverlässige Persönlichkeiten für Empfang und Nachtdienst. Flexible Einsätze, faire Konditionen und ein Team, das Gastfreundschaft ernst nimmt.",
    heroCta: "Offene Stellen ansehen",
    openingsEyebrow: "Offene Stellen",
    openingsTitle: "Aktuelle Ausschreibungen",
    openingsText: "Bewerbungen nehmen wir ausschließlich per E-Mail entgegen – mit kurzem Anschreiben und Lebenslauf.",
    viewJob: "Stellenanzeige ansehen",
  },
  en: {
    metaTitle: "Careers | Job openings at DPP Services",
    metaDescription:
      "Join DPP Services: open roles for front desk staff and night auditors in the Rhein-Main region. Apply to info@dpp-services.de.",
    areaServed: "Rhein-Main region",
    breadcrumbHome: "Home",
    breadcrumbPage: "Careers",
    eyebrowHero: "Careers",
    heroTitle: "Looking for people with hotel DNA",
    heroText:
      "DPP Services is hiring reliable professionals for reception and night duty. Flexible assignments, fair conditions, and a team that takes hospitality seriously.",
    heroCta: "View open roles",
    openingsEyebrow: "Open roles",
    openingsTitle: "Current openings",
    openingsText: "Please apply by email only – with a short cover note and your CV.",
    viewJob: "View job posting",
  },
} as const;

export function KarrierePage() {
  const t = useCopy(copy);
  const jobsData = useCopy(jobsCopy);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_ORIGIN}/#business`,
        name: "DPP Services GbR",
        url: `${SITE_ORIGIN}/`,
        logo: SITE_LOGO,
        email: "info@dpp-services.de",
        telephone: "+4917670800798",
        areaServed: t.areaServed,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: t.breadcrumbPage, item: `${SITE_ORIGIN}/karriere` },
        ],
      },
      ...jobsData.jobs.map((job) => ({
        "@type": "JobPosting",
        title: job.title,
        description: job.summary,
        url: `${SITE_ORIGIN}/karriere/${job.slug}`,
        hiringOrganization: {
          "@type": "Organization",
          name: "DPP Services GbR",
          sameAs: SITE_ORIGIN,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Schwalbach am Taunus",
            addressRegion: "Hessen",
            addressCountry: "DE",
          },
        },
        applicantLocationRequirements: {
          "@type": "Country",
          name: "DE",
        },
      })),
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta title={t.metaTitle} description={t.metaDescription} path="/karriere" jsonLd={jsonLd} />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="glow-orb -top-20 right-0 h-80 w-80 opacity-25" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow text-gold">{t.eyebrowHero}</span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{t.heroText}</p>
              <a
                href="#stellen"
                className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.heroCta}
              </a>
            </Reveal>
          </div>
        </section>

        <section id="stellen" className="relative overflow-hidden py-20 sm:py-28">
          <div className="glow-orb -bottom-24 left-0 h-72 w-72 opacity-10" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">{t.openingsEyebrow}</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                {t.openingsTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.openingsText}
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 lg:gap-8">
              {jobsData.jobs.map((job) => (
                <RevealItem key={job.slug}>
                  <Link
                    to={`/karriere/${job.slug}`}
                    className="card-elevated group block overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-0.5 sm:p-8 lg:p-10"
                  >
                    <div className="bg-gradient-brand shadow-brand mb-4 grid h-11 w-11 place-items-center rounded-xl text-gold-foreground">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {jobsData.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-primary" />
                        {job.type}
                      </span>
                    </div>
                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {job.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-deep">
                      {t.viewJob}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
