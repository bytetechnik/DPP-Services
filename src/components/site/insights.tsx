import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const posts = [
  {
    tag: "Hotellerie",
    title: "Empfangsservice im Hotel: Der Schlüssel zu einem gelungenen Aufenthalt",
    text: "Der Empfang ist der erste Kontakt Ihrer Gäste – und dieser erste Eindruck entscheidet über die Wahrnehmung des gesamten Aufenthalts.",
    read: "4 Min. Lesezeit",
  },
  {
    tag: "Corporate",
    title: "Büro-Empfang: Persönliche Betreuung als Erfolgsfaktor",
    text: "Der Büro-Empfang ist das entscheidende Bindeglied zwischen Unternehmen und Kunden. Persönliche Betreuung wirkt stärker als jede Broschüre.",
    read: "3 Min. Lesezeit",
  },
  {
    tag: "Night Audit",
    title: "Night Audit im Hotel: die unterschätzte Schlüsselrolle",
    text: "Ein sauberer Tagesabschluss entscheidet, ob der Morgen ruhig startet. Wir zeigen, worauf es beim Night Audit wirklich ankommt.",
    read: "5 Min. Lesezeit",
  },
];

const testimonials = [
  {
    quote:
      "Kurzfristiger Ausfall an der Rezeption – DPP hatte innerhalb eines Tages qualifizierten Ersatz vor Ort. Absolut verlässlich.",
    name: "Hoteldirektion",
    role: "Business-Hotel, Frankfurt",
  },
  {
    quote:
      "Unsere Gäste merken keinen Unterschied zum Stammteam. Genau das ist die Qualität, die wir gesucht haben.",
    name: "Front Office Manager",
    role: "Tagungshotel, Wiesbaden",
  },
  {
    quote:
      "Der Büro-Empfang wirkt heute deutlich professioneller. Freundlich, diskret und immer vorbereitet.",
    name: "Office Management",
    role: "Kanzlei, Mainz",
  },
];

export function Insights() {
  return (
    <section id="einblicke" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Stimmen unserer Kunden</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Vertrauen, das im Alltag entsteht
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name + t.role}>
              <figure className="card-elevated h-full p-7 sm:p-8">
                <Quote className="h-8 w-8 text-primary/35" />
                <blockquote className="mt-4 text-base leading-relaxed text-ink-soft">
                  „{t.quote}“
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-24 max-w-3xl">
          <span className="eyebrow">Einblicke &amp; Wissen</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Fachbeiträge aus der Praxis
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Was wir aus tausenden Schichten am Empfang gelernt haben – kompakt aufgeschrieben.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.map((p) => (
            <RevealItem key={p.title}>
              <article className="card-elevated group flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-primary-deep uppercase">
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="mt-5 font-display text-lg leading-snug font-bold text-ink sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <a
                  href="#kontakt"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-deep"
                >
                  Mehr erfahren
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
