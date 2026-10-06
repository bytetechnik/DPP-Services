import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { locationsCopy } from "@/lib/locations-data";
import { useCopy } from "@/lib/i18n";
import { Reveal, RevealGroup, RevealItem } from "./reveal";

const copy = {
  de: {
    eyebrow: "Einsatzgebiet",
    title: "Frankfurt und die umliegenden Städte",
    text: "Sitz in Schwalbach am Taunus. Einsätze in Frankfurt, am Flughafen, im Taunus und in den Nachbarstädten des Rhein-Main-Gebiets.",
    all: "Alle Einsatzorte ansehen",
  },
  en: {
    eyebrow: "Service area",
    title: "Frankfurt and the surrounding cities",
    text: "Based in Schwalbach am Taunus. Assignments in Frankfurt, at the airport, across the Taunus and in the neighbouring Rhein-Main cities.",
    all: "View all locations",
  },
} as const;

export function AreaLinks() {
  const t = useCopy(copy);
  const locations = useCopy(locationsCopy).locations;

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {t.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">{t.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{t.text}</p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <RevealItem key={location.slug}>
              <Link
                to={`/einsatzgebiet/${location.slug}`}
                className="card-elevated group flex h-full flex-col p-6"
              >
                <h3 className="font-display text-lg font-bold text-ink group-hover:text-primary">
                  {location.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {location.cardText}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.08}>
          <Link
            to="/einsatzgebiet"
            className="mt-8 inline-flex text-sm font-bold text-primary-deep hover:underline"
          >
            {t.all}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
