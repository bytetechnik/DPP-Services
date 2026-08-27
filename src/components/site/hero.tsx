import { motion } from "motion/react";
import { ArrowRight, Clock, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-reception.jpg";

const easing = [0.16, 1, 0.3, 1] as const;

const badges = [
  { icon: Clock, label: "24/7 Besetzung" },
  { icon: ShieldCheck, label: "Diskret & geprüft" },
  { icon: Star, label: "Rhein-Main Region" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Moderne Hotelrezeption mit Empfangsmitarbeiterin am Abend"
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
            Empfang &amp; Hotelservices
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-7xl">
            Der erste Eindruck
            <br />
            <span className="text-gradient-brand">in besten Händen.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            DPP Services übernimmt Rezeption, Night Audit, Büro-Empfang und Servicekräfte im
            Rhein-Main-Gebiet – geschult, diskret und zuverlässig. Sie konzentrieren sich auf Ihr
            Geschäft, wir auf Ihre Gäste.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/kontakt"
              className="bg-gradient-brand shadow-brand group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Unverbindlich anfragen
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-colors duration-300 hover:bg-white/15"
            >
              Leistungen entdecken
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
            {badges.map((b) => (
              <span key={b.label} className="flex items-center gap-2 text-sm text-white/70">
                <b.icon className="h-4 w-4 text-primary" />
                {b.label}
              </span>
            ))}
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
          {[
            ["10+", "Jahre Branchenerfahrung"],
            ["24/7", "Einsatzbereitschaft"],
            ["4", "Kern-Servicebereiche"],
            ["100%", "geprüftes Personal"],
          ].map(([value, label]) => (
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
