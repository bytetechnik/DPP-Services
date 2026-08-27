import { motion } from "motion/react";
import { PhoneCall, ClipboardList, UserCheck, LineChart, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { useCopy } from "@/lib/i18n";

const stepIcons: LucideIcon[] = [PhoneCall, ClipboardList, UserCheck, LineChart];

const copy = {
  de: {
    eyebrow: "Zusammenarbeit",
    title: "In vier Schritten zum entlasteten Team",
    paragraph:
      "Kein langer Vorlauf, keine Überraschungen: klare Absprachen, dokumentierte Standards und ein Ansprechpartner, der erreichbar bleibt.",
    steps: [
      {
        step: "01",
        title: "Erstgespräch",
        text: "Wir klären Bedarf, Schichten, Sprachen und Systeme – meist noch am selben Tag.",
      },
      {
        step: "02",
        title: "Konzept & Angebot",
        text: "Sie erhalten ein transparentes Angebot mit klarem Leistungsumfang und Konditionen.",
      },
      {
        step: "03",
        title: "Einsatz & Einarbeitung",
        text: "Passendes Personal wird ausgewählt, eingewiesen und auf Ihre Standards gebrieft.",
      },
      {
        step: "04",
        title: "Qualität & Feedback",
        text: "Feste Ansprechpartner, regelmäßige Reviews und laufende Optimierung.",
      },
    ],
    logos: [
      "Hotellerie",
      "Business Center",
      "Tagungshäuser",
      "Serviced Apartments",
      "Event-Locations",
      "Corporate Offices",
    ],
  },
  en: {
    eyebrow: "Working together",
    title: "A relieved team in four steps",
    paragraph:
      "No lengthy lead times, no surprises: clear agreements, documented standards, and a dedicated contact who is always reachable.",
    steps: [
      {
        step: "01",
        title: "Initial consultation",
        text: "We clarify your needs, shifts, languages and systems – often on the same day.",
      },
      {
        step: "02",
        title: "Concept & proposal",
        text: "You receive a transparent proposal with a clear scope of services and terms.",
      },
      {
        step: "03",
        title: "Deployment & onboarding",
        text: "Suitable staff are selected, briefed and trained to your standards.",
      },
      {
        step: "04",
        title: "Quality & feedback",
        text: "Dedicated contacts, regular reviews and continuous improvement.",
      },
    ],
    logos: [
      "Hospitality",
      "Business Centers",
      "Conference Venues",
      "Serviced Apartments",
      "Event Locations",
      "Corporate Offices",
    ],
  },
};

export function Process() {
  const t = useCopy(copy);
  return (
    <section id="ablauf" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="grid-lines absolute inset-0 opacity-30" />
      <div className="glow-orb top-1/3 -left-24 h-72 w-72 opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-primary">{t.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {t.paragraph}
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => {
            const Icon = stepIcons[i]!;
            return (
              <RevealItem key={s.step}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-primary/50 hover:bg-white/10">
                  <span className="font-display text-5xl font-extrabold text-white/10 transition-colors duration-500 group-hover:text-primary/30">
                    {s.step}
                  </span>
                  <div className="bg-gradient-brand mt-4 grid h-11 w-11 place-items-center rounded-xl text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track gap-4">
            {[...t.logos, ...t.logos].map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="rounded-full border border-white/12 px-6 py-2.5 text-xs font-bold tracking-[0.16em] whitespace-nowrap text-white/55 uppercase"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-brand"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}
