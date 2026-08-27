import {
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Lock,
  MessageSquare,
  Sparkle,
  Target,
  Users2,
  Workflow,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import team from "@/assets/about-team.jpg";

const values = [
  { icon: Target, title: "Kundenorientierung", text: "Ihre Zufriedenheit und die Ihrer Gäste stehen immer im Mittelpunkt." },
  { icon: Lock, title: "Diskretion & Verlässlichkeit", text: "Absolute Vertraulichkeit und Zuverlässigkeit sind selbstverständlich." },
  { icon: Workflow, title: "Flexibilität", text: "Wir passen unsere Services an Ihre Abläufe und Systeme an." },
  { icon: GraduationCap, title: "Kompetenz", text: "Langjährige Erfahrung, regelmäßige Schulungen, klare Standards." },
  { icon: HeartHandshake, title: "Gastfreundschaft", text: "Jeder Gast wird mit Herzlichkeit und Aufmerksamkeit empfangen." },
  { icon: Sparkle, title: "Qualität", text: "Höchste Standards in allen Servicebereichen – messbar und geprüft." },
  { icon: Users2, title: "Teamarbeit", text: "Wir arbeiten als Team und unterstützen uns gegenseitig." },
  { icon: Lightbulb, title: "Innovationsbereitschaft", text: "Wir entwickeln unsere Dienstleistungen stetig weiter." },
  { icon: MessageSquare, title: "Kommunikation", text: "Transparent, offen und zeitnah – mit Kunden und Gästen." },
];

export function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-secondary/60 py-20 sm:py-28">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="bg-gradient-brand absolute -top-5 -left-5 hidden h-40 w-40 rounded-3xl opacity-20 blur-2xl sm:block" />
              <img
                src={team}
                alt="Team von DPP Services in einer Hotellobby"
                loading="lazy"
                width={1400}
                height={1000}
                className="relative aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
              />
              <div className="card-elevated absolute -right-2 -bottom-8 w-52 p-5 sm:-right-8 sm:w-64 sm:p-6">
                <p className="font-display text-3xl font-extrabold text-gradient-brand">Rhein-Main</p>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Frankfurt · Wiesbaden · Mainz · Darmstadt
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Über uns</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
              Service, Professionalität und Gastfreundschaft
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              DPP Services ist spezialisiert auf Empfangs- und Hotelservices im Rhein-Main-Gebiet.
              Wir bereiten jedem Gast ein herzliches Willkommen und erfüllen höchste Ansprüche an
              Qualität und Zuverlässigkeit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ob am Hotelempfang, im Unternehmensfoyer oder bei exklusiven Events – unser Team sorgt
              dafür, dass sich Ihre Gäste willkommen und bestens betreut fühlen. Mit
              maßgeschneiderten Lösungen und Liebe zum Detail setzen wir neue Maßstäbe.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Eingespieltes Personal", "Feste Ansprechpartner statt wechselnder Gesichter."],
                ["Systemkenntnis", "Erfahrung mit gängigen PMS- und Kassensystemen."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-display text-sm font-bold text-ink">{t}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 max-w-2xl">
          <span className="eyebrow">Unsere Werte</span>
          <h3 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Neun Prinzipien, die jede Schicht prägen
          </h3>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {values.map((v) => (
            <RevealItem key={v.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary-deep transition-colors duration-500 group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display text-base font-bold text-ink">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
