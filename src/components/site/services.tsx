import { ArrowUpRight, BedDouble } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { useCopy } from "@/lib/i18n";
import { serviceMeta, servicesCopy } from "@/lib/services-data";

const copy = {
  de: {
    eyebrow: "Unsere Dienstleistungen",
    heading: "Vier Servicebereiche, ein Qualitätsversprechen",
    intro:
      "Ob dauerhafte Besetzung, Urlaubsvertretung oder kurzfristiger Ausfall – wir liefern geschultes Personal mit Hotel-DNA und klaren Standards.",
    learnMore: "Mehr erfahren",
    cta: "Anfrage stellen",
    bannerEyebrow: "Kurzfristig Personal benötigt?",
    bannerHeading: "Wir besetzen Schichten oft innerhalb von 24 Stunden.",
    bannerCta: "Schicht anfragen",
  },
  en: {
    eyebrow: "Our Services",
    heading: "Four service areas, one promise of quality",
    intro:
      "Whether it's permanent staffing, holiday cover or a short-notice gap – we provide trained personnel with genuine hotel DNA and clear standards.",
    learnMore: "Learn more",
    cta: "Send an inquiry",
    bannerEyebrow: "Need staff at short notice?",
    bannerHeading: "We often fill shifts within 24 hours.",
    bannerCta: "Request a shift",
  },
};

export function Services() {
  const t = useCopy(copy);
  const localized = useCopy(servicesCopy).services;
  const services = localized.map((s) => {
    const meta = serviceMeta.find((m) => m.slug === s.slug)!;
    return { ...s, icon: meta.icon, image: meta.image };
  });

  return (
    <section id="leistungen" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="glow-orb -top-32 right-0 h-72 w-72 opacity-10" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            {t.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.intro}
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((s) => (
            <RevealItem key={s.slug}>
              <article className="card-elevated group h-full overflow-hidden">
                <Link to={`/leistungen/${s.slug}`} className="block">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                    <div className="bg-gradient-brand absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl text-gold-foreground shadow-brand">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    <Link to={`/leistungen/${s.slug}`} className="hover:text-primary-deep">
                      {s.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.text}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                        <span className="bg-gradient-brand mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link
                      to={`/leistungen/${s.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary-deep"
                    >
                      {t.learnMore}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      to="/kontakt"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-ink"
                    >
                      {t.cta}
                    </Link>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="bg-gradient-ink mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-3xl px-6 py-8 sm:flex sm:flex-wrap sm:justify-between sm:px-10 sm:py-10">
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
  );
}
