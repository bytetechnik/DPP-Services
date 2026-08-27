import { ArrowUpRight, BedDouble, Building2, ConciergeBell, Moon, Users } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./reveal";
import empfang from "@/assets/service-empfang.jpg";
import nightAudit from "@/assets/service-night-audit.jpg";
import tagung from "@/assets/service-tagung.jpg";
import buero from "@/assets/service-buero.jpg";

const services = [
  {
    icon: ConciergeBell,
    title: "Empfangsdienst / Hotelrezeption",
    image: empfang,
    text: "Herzlicher Empfang, Check-in und Check-out, Gästekommunikation und Concierge-Aufgaben – professionell besetzt, auch kurzfristig.",
    points: ["Check-in & Check-out", "Gästebetreuung & Beschwerdemanagement", "Reservierungen & Telefonie"],
  },
  {
    icon: Moon,
    title: "Night Audit",
    image: nightAudit,
    text: "Während Ihr Haus schläft, sichern wir Tagesabschluss, Reporting und Sicherheit – präzise, ruhig und zuverlässig.",
    points: ["Tagesabschluss & Kassenprüfung", "Nachtrezeption & Sicherheit", "Reporting für das Management"],
  },
  {
    icon: Users,
    title: "Hotelservice / Tagung / Servicekräfte",
    image: tagung,
    text: "Verstärkung für Bankett, Tagung und Restaurant: eingespielte Servicekräfte, die Ihr Team im Alltag und bei Peaks tragen.",
    points: ["Tagungs- & Bankettservice", "Frühstücks- & Restaurantservice", "Event-Support nach Bedarf"],
  },
  {
    icon: Building2,
    title: "Büro-Empfang",
    image: buero,
    text: "Ein Empfang, der Ihr Unternehmen repräsentiert: Besuchermanagement, Post, Telefonzentrale und Facility-Koordination.",
    points: ["Besucher- & Ausweismanagement", "Telefonzentrale & Post", "Koordination von Dienstleistern"],
  },
];

export function Services() {
  return (
    <section id="leistungen" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="glow-orb -top-32 right-0 h-72 w-72 opacity-10" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Unsere Dienstleistungen</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Vier Servicebereiche, ein Qualitätsversprechen
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ob dauerhafte Besetzung, Urlaubsvertretung oder kurzfristiger Ausfall – wir liefern
            geschultes Personal mit Hotel-DNA und klaren Standards.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <article className="card-elevated group h-full overflow-hidden">
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
                  <div className="bg-gradient-brand absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl text-primary-foreground shadow-brand">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{s.title}</h3>
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
                  <a
                    href="#kontakt"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-deep"
                  >
                    Anfrage stellen
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="bg-gradient-ink mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-3xl px-6 py-8 sm:flex sm:flex-wrap sm:justify-between sm:px-10 sm:py-10">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                <BedDouble className="h-4 w-4" /> Kurzfristig Personal benötigt?
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">
                Wir besetzen Schichten oft innerhalb von 24 Stunden.
              </h3>
            </div>
            <a
              href="#kontakt"
              className="bg-gradient-brand inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-primary-foreground"
            >
              Schicht anfragen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
