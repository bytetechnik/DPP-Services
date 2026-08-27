import { Mail, MapPin, Clock3, ArrowUp } from "lucide-react";
import logo from "@/assets/dpp-logo.asset.json";

const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Einblicke", href: "#einblicke" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const leistungen = [
  "Empfangsdienst",
  "Hotelrezeption",
  "Night Audit",
  "Tagungsservice",
  "Servicekräfte",
  "Büro-Empfang",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="DPP Services Logo"
                width={48}
                height={48}
                className="h-11 w-11 rounded-lg object-cover"
              />
              <span>
                <span className="block font-display text-sm font-extrabold tracking-tight text-white">
                  DPP SERVICES
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase">
                  Empfang &amp; Hotelservices
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Professionelles Empfangs- und Hotelpersonal für das Rhein-Main-Gebiet – zuverlässig,
              diskret und kurzfristig verfügbar.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
              Leistungen
            </h3>
            <ul className="mt-5 space-y-3">
              {leistungen.map((l) => (
                <li key={l} className="text-sm text-white/70">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@dpp-services.de" className="break-words hover:text-white">
                  info@dpp-services.de
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Rhein-Main-Gebiet
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Einsätze 24/7
              </li>
            </ul>
            <a
              href="#kontakt"
              className="bg-gradient-brand shadow-brand mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Anfrage senden
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} DPP Services. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/45">Impressum</span>
            <span className="text-xs text-white/45">Datenschutz</span>
            <a
              href="#top"
              aria-label="Nach oben"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
