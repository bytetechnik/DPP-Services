import { CheckCircle2, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { NotFoundPage } from "@/routes/not-found";
import { useCopy } from "@/lib/i18n";
import { PageMeta } from "@/lib/page-meta";
import { isLocationSlug, locationsCopy } from "@/lib/locations-data";
import { servicesCopy } from "@/lib/services-data";
import {
  breadcrumbList,
  BUSINESS,
  cityList,
  faqPageSchema,
  MAPS_URL,
  professionalServiceSchema,
  SITE_ORIGIN,
} from "@/lib/site";

export function EinsatzgebietDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = useCopy(locationsCopy);
  const services = useCopy(servicesCopy).services;

  if (!isLocationSlug(slug)) {
    return <NotFoundPage />;
  }

  const location = t.locations.find((item) => item.slug === slug)!;
  const path = `/einsatzgebiet/${location.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      professionalServiceSchema(location.metaDescription),
      {
        "@type": "Service",
        name: location.h1,
        description: location.lead,
        url: `${SITE_ORIGIN}${path}`,
        serviceType: "Empfangsdienst und Hotelpersonal",
        areaServed: cityList(location.areaServed),
        provider: { "@id": `${SITE_ORIGIN}/#business` },
      },
      faqPageSchema(location.faqs),
      breadcrumbList([
        { name: t.breadcrumbHome, path: "/" },
        { name: t.breadcrumbArea, path: "/einsatzgebiet" },
        { name: location.name, path },
      ]),
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <PageMeta
        title={location.metaTitle}
        description={location.metaDescription}
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
                to="/einsatzgebiet"
                className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase transition-colors hover:text-gold"
              >
                {t.breadcrumbArea}
              </Link>
              <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                {location.h1}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">{location.lead}</p>
              <Link
                to="/kontakt"
                className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.cta}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
            <Reveal>
              <div className="space-y-5">
                {location.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              <h2 className="mt-10 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                {location.whyTitle}
              </h2>
              <div className="mt-4 space-y-5">
                {location.why.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              {"places" in location && location.places ? (
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {location.places.map((place) => (
                    <li
                      key={place}
                      className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold text-ink-soft"
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
                <h2 className="font-display text-xl font-bold text-ink">{t.servicesTitle}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.servicesText}</p>
                <ul className="mt-6 space-y-3">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/leistungen/${service.slug}`}
                        className="flex items-start gap-3 text-sm font-semibold text-ink-soft hover:text-primary"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary/60 py-20 sm:py-28">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{t.faqTitle}</h2>
              <dl className="mt-8 space-y-6">
                {location.faqs.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-display text-lg font-bold text-ink">{faq.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                <MapPin className="h-4 w-4" />
                {t.napTitle}
              </p>
              <p className="mt-4 font-display text-xl font-bold text-ink">{BUSINESS.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {BUSINESS.streetAddress}
                <br />
                {BUSINESS.postalCode} {BUSINESS.addressLocality}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{t.napText}</p>
              <p className="mt-4 text-sm">
                <a href={`tel:${BUSINESS.telephone}`} className="font-semibold text-ink hover:text-primary">
                  {BUSINESS.telephoneDisplay}
                </a>
                <span className="text-muted-foreground"> · </span>
                <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-ink hover:text-primary">
                  {BUSINESS.email}
                </a>
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-primary-deep hover:underline"
              >
                {t.route}
              </a>
              <Link
                to="/kontakt"
                className="bg-gradient-brand shadow-brand mt-6 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold text-gold-foreground"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
