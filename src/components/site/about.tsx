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
import { useCopy } from "@/lib/i18n";
import team from "@/assets/about-team.jpg";

const valueIcons = [Target, Lock, Workflow, GraduationCap, HeartHandshake, Sparkle, Users2, Lightbulb, MessageSquare];

const copy = {
  de: {
    imageAlt: "Team von DPP Services in einer Hotellobby",
    region: "Rhein-Main",
    regionCities: "Frankfurt · Wiesbaden · Mainz · Darmstadt",
    eyebrow: "Über uns",
    heading: "Service, Professionalität und Gastfreundschaft",
    p1: "DPP Services ist spezialisiert auf Empfangs- und Hotelservices im Rhein-Main-Gebiet. Wir bereiten jedem Gast ein herzliches Willkommen und erfüllen höchste Ansprüche an Qualität und Zuverlässigkeit.",
    p2: "Ob am Hotelempfang, im Unternehmensfoyer oder bei exklusiven Events – unser Team sorgt dafür, dass sich Ihre Gäste willkommen und bestens betreut fühlen. Mit maßgeschneiderten Lösungen und Liebe zum Detail setzen wir neue Maßstäbe.",
    highlights: [
      ["Eingespieltes Personal", "Feste Ansprechpartner statt wechselnder Gesichter."],
      ["Systemkenntnis", "Erfahrung mit gängigen PMS- und Kassensystemen."],
    ],
    valuesEyebrow: "Unsere Werte",
    valuesHeading: "Neun Prinzipien, die jede Schicht prägen",
    values: [
      { title: "Kundenorientierung", text: "Ihre Zufriedenheit und die Ihrer Gäste stehen immer im Mittelpunkt." },
      { title: "Diskretion & Verlässlichkeit", text: "Absolute Vertraulichkeit und Zuverlässigkeit sind selbstverständlich." },
      { title: "Flexibilität", text: "Wir passen unsere Services an Ihre Abläufe und Systeme an." },
      { title: "Kompetenz", text: "Langjährige Erfahrung, regelmäßige Schulungen, klare Standards." },
      { title: "Gastfreundschaft", text: "Jeder Gast wird mit Herzlichkeit und Aufmerksamkeit empfangen." },
      { title: "Qualität", text: "Höchste Standards in allen Servicebereichen – messbar und geprüft." },
      { title: "Teamarbeit", text: "Wir arbeiten als Team und unterstützen uns gegenseitig." },
      { title: "Innovationsbereitschaft", text: "Wir entwickeln unsere Dienstleistungen stetig weiter." },
      { title: "Kommunikation", text: "Transparent, offen und zeitnah – mit Kunden und Gästen." },
    ],
  },
  en: {
    imageAlt: "DPP Services team in a hotel lobby",
    region: "Rhein-Main",
    regionCities: "Frankfurt · Wiesbaden · Mainz · Darmstadt",
    eyebrow: "About Us",
    heading: "Service, professionalism and hospitality",
    p1: "DPP Services specialises in reception and hotel services across the Rhein-Main region. We give every guest a warm welcome and meet the highest standards of quality and reliability.",
    p2: "Whether at the hotel front desk, in a corporate lobby or at exclusive events – our team makes sure your guests feel welcome and well cared for. With tailored solutions and an eye for detail, we set new standards.",
    highlights: [
      ["Experienced staff", "Consistent points of contact instead of changing faces."],
      ["System expertise", "Experience with common PMS and POS systems."],
    ],
    valuesEyebrow: "Our Values",
    valuesHeading: "Nine principles behind every shift",
    values: [
      { title: "Customer focus", text: "Your satisfaction and that of your guests always comes first." },
      { title: "Discretion & reliability", text: "Absolute confidentiality and dependability are a given." },
      { title: "Flexibility", text: "We adapt our services to your processes and systems." },
      { title: "Competence", text: "Years of experience, regular training, clear standards." },
      { title: "Hospitality", text: "Every guest is welcomed with warmth and attentiveness." },
      { title: "Quality", text: "The highest standards across all service areas – measurable and verified." },
      { title: "Teamwork", text: "We work as a team and support one another." },
      { title: "Willingness to innovate", text: "We continuously develop our services further." },
      { title: "Communication", text: "Transparent, open and prompt – with clients and guests alike." },
    ],
  },
};

export function About() {
  const t = useCopy(copy);
  const values = t.values.map((v, i) => ({ ...v, icon: valueIcons[i]! }));

  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-secondary/60 py-20 sm:py-28">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="bg-gradient-brand absolute -top-5 -left-5 hidden h-40 w-40 rounded-3xl opacity-20 blur-2xl sm:block" />
              <img
                src={team}
                alt={t.imageAlt}
                loading="lazy"
                width={1400}
                height={1000}
                className="relative aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
              />
              <div className="card-elevated absolute -right-2 -bottom-8 w-52 p-5 sm:-right-8 sm:w-64 sm:p-6">
                <p className="font-display text-3xl font-extrabold text-gradient-brand">{t.region}</p>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {t.regionCities}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.p1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.p2}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.highlights.map(([h, d]) => (
                <div key={h} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-display text-sm font-bold text-ink">{h}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 max-w-2xl">
          <span className="eyebrow">{t.valuesEyebrow}</span>
          <h3 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
            {t.valuesHeading}
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
