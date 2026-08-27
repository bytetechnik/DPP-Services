import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const faqs = [
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
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="eyebrow">Häufige Fragen</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Antworten, bevor Sie fragen
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Ihre Frage ist nicht dabei? Schreiben Sie uns – wir antworten in der Regel innerhalb
            eines Werktages.
          </p>
          <a
            href="#kontakt"
            className="bg-gradient-brand shadow-brand mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Frage stellen
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
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
