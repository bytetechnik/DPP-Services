import { ArrowUpRight, BedDouble, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { NotFoundPage } from "@/routes/not-found";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import {
  getServiceMeta,
  isServiceSlug,
  serviceMeta,
  servicesCopy,
  type ServiceSlug,
} from "@/lib/services-data";
import { SITE_LOGO, SITE_ORIGIN } from "@/lib/site";

const pageCopy = {
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbServices: "Leistungen",
    eyebrow: "Leistungen",
    cta: "Personal anfragen",
    relatedEyebrow: "Weitere Leistungen",
    relatedTitle: "Das könnte Sie auch interessieren",
    learnMore: "Mehr erfahren",
    bannerEyebrow: "Kurzfristig Personal benötigt?",
    bannerHeading: "Wir besetzen Schichten oft innerhalb von 24 Stunden.",
    bannerCta: "Schicht anfragen",
    areaServed: "Rhein-Main-Gebiet",
    backToServices: "Alle Leistungen",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    eyebrow: "Services",
    cta: "Request staff",
    relatedEyebrow: "Other services",
    relatedTitle: "You may also be interested in",
    learnMore: "Learn more",
    bannerEyebrow: "Need staff at short notice?",
    bannerHeading: "We often fill shifts within 24 hours.",
    bannerCta: "Request a shift",
    areaServed: "Rhein-Main region",
    backToServices: "All services",
  },
} as const;

export function LeistungDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = useCopy(pageCopy);
  const services = useCopy(servicesCopy).services;

  if (!isServiceSlug(slug)) {
    return <NotFoundPage />;
  }

  const serviceSlug: ServiceSlug = slug;
  const meta = getServiceMeta(serviceSlug);
  const service = services.find((s) => s.slug === serviceSlug)!;
  const related = services.filter((s) => s.slug !== serviceSlug);
  const Icon = meta.icon;
  const path = `/leistungen/${serviceSlug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.detailLead,
        serviceType: service.title,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${SITE_ORIGIN}/#business`,
          name: "DPP Services GbR",
          url: `${SITE_ORIGIN}/`,
          logo: SITE_LOGO,
          email: "info@dpp-services.de",
          telephone: "+4917670800798",
        },
        areaServed: t.areaServed,
        url: `${SITE_ORIGIN}${path}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${SITE_ORIGIN}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: t.breadcrumbServices,
            item: `${SITE_ORIGIN}/leistungen`,
          },
          { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_ORIGIN}${path}` },
        ],
      },
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta
        title={`${service.title} | DPP Services`}
        description={service.detailLead}
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
                to="/leistungen"
                className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase transition-colors hover:text-gold"
              >
                {t.backToServices}
              </Link>
              <span className="eyebrow mt-5 block text-gold">{t.eyebrow}</span>
              <div className="mt-4 flex items-start gap-4">
                <span className="bg-gradient-brand shadow-brand mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-xl text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h1 className="font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
              </div>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{service.detailLead}</p>
              <Link
                to="/kontakt"
                className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.cta}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="relative">
          <div className="relative aspect-[21/9] min-h-56 w-full overflow-hidden sm:min-h-72 lg:min-h-96">
            <img
              src={meta.image}
              alt={service.title}
              width={1600}
              height={686}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </section>

        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <Reveal>
                <div className="space-y-5">
                  {service.detailBody.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-10">
                  <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {service.idealTitle}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {service.idealText}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
                  <h2 className="font-display text-xl font-bold text-ink">{service.deliverablesTitle}</h2>
                  <ul className="mt-6 space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 space-y-2.5 border-t border-border/70 pt-6">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                        <span className="bg-gradient-brand mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">{t.relatedEyebrow}</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                {t.relatedTitle}
              </h2>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((s) => {
                const relatedMeta = serviceMeta.find((m) => m.slug === s.slug)!;
                const RelatedIcon = relatedMeta.icon;
                return (
                  <RevealItem key={s.slug}>
                    <Link
                      to={`/leistungen/${s.slug}`}
                      className="card-elevated group flex h-full flex-col overflow-hidden"
                    >
                      <div className="relative aspect-16/10 overflow-hidden">
                        <img
                          src={relatedMeta.image}
                          alt={s.title}
                          loading="lazy"
                          width={800}
                          height={500}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                        <div className="bg-gradient-brand absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-xl text-gold-foreground shadow-brand">
                          <RelatedIcon className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-deep">
                          {t.learnMore}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <Reveal delay={0.1}>
              <div className="bg-gradient-ink mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-3xl px-6 py-8 sm:flex sm:flex-wrap sm:justify-between sm:px-10 sm:py-10">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                    <BedDouble className="h-4 w-4" /> {t.bannerEyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
                    {t.bannerHeading}
                  </h3>
                </div>
                <Link
                  to="/kontakt"
                  className="bg-gradient-brand inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-gold-foreground"
                >
                  {t.bannerCta}
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
