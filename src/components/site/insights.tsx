import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import { useCopy } from "@/lib/i18n";

const copy = {
  de: {
    testimonialsEyebrow: "Stimmen unserer Kunden",
    testimonialsTitle: "Vertrauen, das im Alltag entsteht",
    testimonials: [
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
    ],
    insightsEyebrow: "Einblicke & Wissen",
    insightsTitle: "Fachbeiträge aus der Praxis",
    insightsParagraph:
      "Was wir aus tausenden Schichten am Empfang gelernt haben – kompakt aufgeschrieben.",
    posts: [
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
    ],
    readMore: "Mehr erfahren",
  },
  en: {
    testimonialsEyebrow: "What our clients say",
    testimonialsTitle: "Trust built through everyday reliability",
    testimonials: [
      {
        quote:
          "A short-notice absence at the front desk – DPP had qualified cover on-site within a day. Absolutely reliable.",
        name: "Hotel Management",
        role: "Business hotel, Frankfurt",
      },
      {
        quote:
          "Our guests can't tell the difference from our regular team. That's exactly the quality we were looking for.",
        name: "Front Office Manager",
        role: "Conference hotel, Wiesbaden",
      },
      {
        quote:
          "Our office reception now feels noticeably more professional. Friendly, discreet and always prepared.",
        name: "Office Management",
        role: "Law firm, Mainz",
      },
    ],
    insightsEyebrow: "Insights & Knowledge",
    insightsTitle: "Articles from the field",
    insightsParagraph:
      "What we've learned from thousands of shifts at the front desk – summarized for you.",
    posts: [
      {
        tag: "Hospitality",
        title: "Hotel reception service: the key to a great stay",
        text: "The front desk is your guests' first point of contact – and that first impression shapes how the entire stay is perceived.",
        read: "4 min read",
      },
      {
        tag: "Corporate",
        title: "Office reception: personal service as a success factor",
        text: "The office reception is the crucial link between companies and clients. Personal attention makes a stronger impact than any brochure.",
        read: "3 min read",
      },
      {
        tag: "Night Audit",
        title: "Night audit at hotels: the underrated key role",
        text: "A clean daily close determines whether the morning starts smoothly. We explain what really matters in night audit.",
        read: "5 min read",
      },
    ],
    readMore: "Learn more",
  },
};

export function Insights() {
  const t = useCopy(copy);
  return (
    <section id="einblicke" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{t.testimonialsEyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            {t.testimonialsTitle}
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.testimonials.map((tItem) => (
            <RevealItem key={tItem.name + tItem.role}>
              <figure className="card-elevated h-full p-7 sm:p-8">
                <Quote className="h-8 w-8 text-primary/35" />
                <blockquote className="mt-4 text-base leading-relaxed text-ink-soft">
                  „{tItem.quote}“
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-sm font-bold text-ink">{tItem.name}</p>
                  <p className="text-sm text-muted-foreground">{tItem.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-24 max-w-3xl">
          <span className="eyebrow">{t.insightsEyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {t.insightsTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.insightsParagraph}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.posts.map((p) => (
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
                <Link
                  to="/kontakt"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-deep"
                >
                  {t.readMore}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
