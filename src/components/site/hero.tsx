import { motion } from "motion/react";
import { ArrowRight, Clock, ShieldCheck, Sparkles, Star, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-reception.jpg";
import { useCopy } from "@/lib/i18n";

const easing = [0.16, 1, 0.3, 1] as const;

const badgeIcons: LucideIcon[] = [Clock, ShieldCheck, Star];

const copy = {
  de: {
    imageAlt: "Moderne Hotelrezeption mit Empfangsmitarbeiterin am Abend",
    eyebrow: "Empfang & Hotelservices",
    titleLine1: "Der erste Eindruck",
    titleLine2: "in besten Händen.",
    paragraph:
      "DPP Services übernimmt Rezeption, Night Audit, Büro-Empfang und Servicekräfte im Rhein-Main-Gebiet – geschult, diskret und zuverlässig. Sie konzentrieren sich auf Ihr Geschäft, wir auf Ihre Gäste.",
    ctaPrimary: "Unverbindlich anfragen",
    ctaSecondary: "Leistungen entdecken",
    badges: ["24/7 Besetzung", "Diskret & geprüft", "Rhein-Main Region"],
    stats: [
      ["10+", "Jahre Branchenerfahrung"],
      ["24/7", "Einsatzbereitschaft"],
      ["4", "Kern-Servicebereiche"],
      ["100%", "geprüftes Personal"],
    ] as [string, string][],
  },
  en: {
    imageAlt: "Modern hotel reception with a receptionist in the evening",
    eyebrow: "Reception & Hotel Services",
    titleLine1: "The first impression,",
    titleLine2: "in the best hands.",
    paragraph:
      "DPP Services provides reception, night audit, office front-desk, and service staff across the Rhein-Main region – trained, discreet, and reliable. You focus on your business, we focus on your guests.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "Discover our services",
    badges: ["24/7 coverage", "Discreet & vetted", "Rhein-Main region"],
    stats: [
      ["10+", "years of industry experience"],
      ["24/7", "availability"],
      ["4", "core service areas"],
      ["100%", "vetted staff"],
    ] as [string, string][],
  },
};

export function Hero() {
  const t = useCopy(copy);
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt={t.imageAlt}
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div className="grid-lines absolute inset-0 opacity-40 mix-blend-overlay" />
      <div className="glow-orb float-slow top-24 -left-24 h-72 w-72" />
      <div className="glow-orb -right-20 bottom-0 h-80 w-80 opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:px-8 lg:pt-48 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-white/90 uppercase backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            {t.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-7xl">
            {t.titleLine1}
            <br />
            <span className="text-gradient-brand">{t.titleLine2}</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-snug text-white/75 sm:mt-6 sm:text-lg sm:leading-relaxed">
            {t.paragraph}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/kontakt"
              className="bg-gradient-brand shadow-brand group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-colors duration-300 hover:bg-white/15"
            >
              {t.ctaSecondary}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
            {t.badges.map((label, i) => {
              const Icon = badgeIcons[i]!;
              return (
                <span key={label} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: easing }}
        className="relative mx-auto -mb-px w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-t-3xl border border-white/15 border-b-0 bg-white/10 backdrop-blur-xl lg:grid-cols-4">
          {t.stats.map(([value, label]) => (
            <div key={label} className="bg-ink/60 px-5 py-6 sm:px-8 sm:py-8">
              <dt className="font-display text-2xl font-extrabold text-white sm:text-4xl">
                {value}
              </dt>
              <dd className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-white/60 uppercase sm:text-xs">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
