import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { useCopy } from "@/lib/i18n";

const copy = {
  de: {
    eyebrow: "Häufige Fragen",
    title: "Antworten, bevor Sie fragen",
    paragraph:
      "Ihre Frage ist nicht dabei? Schreiben Sie uns – wir antworten in der Regel innerhalb eines Werktages.",
    cta: "Frage stellen",
    faqs: [
      {
        q: "In welchem Gebiet sind Sie tätig?",
        a: "Unser Schwerpunkt liegt im Rhein-Main-Gebiet – unter anderem Frankfurt, Offenbach, Wiesbaden, Mainz und Darmstadt. Auf Anfrage prüfen wir auch Einsätze in angrenzenden Regionen.",
      },
      {
        q: "Wie schnell können Sie eine Schicht besetzen?",
        a: "Bei kurzfristigen Ausfällen können wir Schichten häufig innerhalb von 24 Stunden besetzen. Für dauerhafte Besetzungen planen wir gemeinsam einen sauberen Onboarding-Zeitraum ein.",
      },
      {
        q: "Kennt Ihr Personal unsere Systeme?",
        a: "Unsere Mitarbeitenden arbeiten regelmäßig mit gängigen PMS- und Kassensystemen. Hausspezifische Abläufe übernehmen wir im Rahmen der Einarbeitung nach Ihrem Standard.",
      },
      {
        q: "Welche Sprachen werden gesprochen?",
        a: "Deutsch und Englisch sind Standard. Weitere Sprachen sind je nach Einsatz und Verfügbarkeit möglich – sagen Sie uns einfach, was Sie benötigen.",
      },
      {
        q: "Übernehmen Sie auch Nachtschichten und Wochenenden?",
        a: "Ja. Night Audit, Nachtrezeption sowie Wochenend- und Feiertagsdienste gehören zu unserem Kerngeschäft.",
      },
      {
        q: "Wie sieht es mit Diskretion und Zuverlässigkeit aus?",
        a: "Vertraulichkeit ist Teil unseres Selbstverständnisses und vertraglich geregelt. Unser Personal wird sorgfältig ausgewählt, eingewiesen und regelmäßig geschult.",
      },
    ],
  },
  en: {
    eyebrow: "Frequently Asked Questions",
    title: "Answers before you ask",
    paragraph:
      "Don't see your question? Get in touch – we typically respond within one business day.",
    cta: "Ask a question",
    faqs: [
      {
        q: "Which areas do you serve?",
        a: "Our focus is the Rhein-Main region – including Frankfurt, Offenbach, Wiesbaden, Mainz and Darmstadt. On request, we're happy to review assignments in neighboring regions too.",
      },
      {
        q: "How quickly can you fill a shift?",
        a: "For short-notice absences, we can often fill shifts within 24 hours. For ongoing placements, we plan a proper onboarding period together with you.",
      },
      {
        q: "Is your staff familiar with our systems?",
        a: "Our team regularly works with common PMS and POS systems. Property-specific procedures are covered during onboarding, tailored to your standards.",
      },
      {
        q: "What languages are spoken?",
        a: "German and English are standard. Additional languages are available depending on the assignment and availability – just let us know what you need.",
      },
      {
        q: "Do you also cover night shifts and weekends?",
        a: "Yes. Night audit, night reception, as well as weekend and holiday shifts are part of our core business.",
      },
      {
        q: "What about discretion and reliability?",
        a: "Confidentiality is part of our self-understanding and contractually guaranteed. Our staff are carefully selected, briefed and regularly trained.",
      },
    ],
  },
};

export function Faq() {
  const t = useCopy(copy);
  return (
    <section id="faq" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.paragraph}</p>
          <a
            href="/kontakt"
            className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t.cta}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-ink hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
