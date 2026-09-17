import { ArrowUpRight, Briefcase, Clock3, Mail, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { NotFoundPage } from "@/routes/not-found";
import { useCopy } from "@/lib/i18n";
import { isJobSlug, jobsCopy, type JobSlug } from "@/lib/jobs-data";
import { PageMeta } from "@/lib/page-meta";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const pageCopy = {
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbCareers: "Karriere",
    eyebrow: "Stellenanzeige",
    backToCareers: "Alle Stellen",
    apply: "Jetzt bewerben",
    applyHint: "Bewerbung mit Anschreiben und Lebenslauf an",
    howToApplyTitle: "So bewerben Sie sich",
    howToApplyText:
      "Senden Sie uns bitte ein kurzes Anschreiben und Ihren Lebenslauf per E-Mail. Wir melden uns zeitnah zurück.",
    otherEyebrow: "Weitere Stellen",
    otherTitle: "Weitere offene Positionen",
    viewJob: "Stellenanzeige ansehen",
    areaServed: "Rhein-Main-Gebiet",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCareers: "Careers",
    eyebrow: "Job posting",
    backToCareers: "All openings",
    apply: "Apply now",
    applyHint: "Send your cover note and CV to",
    howToApplyTitle: "How to apply",
    howToApplyText: "Please email us a short cover note and your CV. We will get back to you promptly.",
    otherEyebrow: "Other roles",
    otherTitle: "Other open positions",
    viewJob: "View job posting",
    areaServed: "Rhein-Main region",
  },
} as const;

export function KarriereDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = useCopy(pageCopy);
  const jobsData = useCopy(jobsCopy);

  if (!isJobSlug(slug)) {
    return <NotFoundPage />;
  }

  const jobSlug: JobSlug = slug;
  const job = jobsData.jobs.find((j) => j.slug === jobSlug)!;
  const related = jobsData.jobs.filter((j) => j.slug !== jobSlug);
  const path = `/karriere/${jobSlug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        title: job.title,
        description: [job.summary, ...job.description].join(" "),
        hiringOrganization: {
          "@type": "Organization",
          name: "DPP Services GbR",
          sameAs: SITE_ORIGIN,
          logo: SITE_LOGO,
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
        url: `${SITE_ORIGIN}${path}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${SITE_ORIGIN}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: t.breadcrumbCareers,
            item: `${SITE_ORIGIN}/karriere`,
          },
          { "@type": "ListItem", position: 3, name: job.title, item: `${SITE_ORIGIN}${path}` },
        ],
      },
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta
        title={`${job.title} | DPP Services`}
        description={job.summary}
        path={path}
        jsonLd={jsonLd}
      />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ink pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="glow-orb -top-20 right-0 h-80 w-80 opacity-25" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <Link
                to="/karriere"
                className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase transition-colors hover:text-gold"
              >
                {t.backToCareers}
              </Link>
              <span className="eyebrow mt-5 block text-gold">{t.eyebrow}</span>
              <div className="mt-4 flex items-start gap-4">
                <span className="bg-gradient-brand shadow-brand mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-xl text-gold-foreground">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h1 className="font-display text-3xl font-extrabold text-white sm:text-5xl">
                  {job.title}
                </h1>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {jobsData.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-gold" />
                  {job.type}
                </span>
              </div>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{job.summary}</p>
              <a
                href={`mailto:info@dpp-services.de?subject=${encodeURIComponent(job.subject)}`}
                className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {t.apply}
              </a>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <Reveal>
                <div className="space-y-5">
                  {job.description.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12">
                  <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {job.responsibilitiesTitle}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-soft sm:text-base">
                        <span className="bg-gradient-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12">
                  <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {job.requirementsTitle}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {job.requirements.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-soft sm:text-base">
                        <span className="bg-gradient-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
                  <h2 className="font-display text-xl font-bold text-ink">{t.howToApplyTitle}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.howToApplyText}</p>
                  <p className="mt-5 text-sm text-muted-foreground">
                    {t.applyHint}{" "}
                    <a
                      href="mailto:info@dpp-services.de"
                      className="font-semibold text-primary-deep hover:underline"
                    >
                      info@dpp-services.de
                    </a>
                  </p>
                  <a
                    href={`mailto:info@dpp-services.de?subject=${encodeURIComponent(job.subject)}`}
                    className="bg-gradient-brand shadow-brand mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                    {t.apply}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-secondary/60 py-20 sm:py-28">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal className="max-w-3xl">
                <span className="eyebrow">{t.otherEyebrow}</span>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                  {t.otherTitle}
                </h2>
              </Reveal>
              <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
                {related.map((j) => (
                  <RevealItem key={j.slug}>
                    <Link
                      to={`/karriere/${j.slug}`}
                      className="card-elevated group flex h-full flex-col p-6 sm:p-8"
                    >
                      <div className="bg-gradient-brand shadow-brand mb-4 grid h-11 w-11 place-items-center rounded-xl text-gold-foreground">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink">{j.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{j.summary}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-deep">
                        {t.viewJob}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
