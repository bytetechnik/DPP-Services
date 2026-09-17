import { Mail, MapPin, Clock3, ArrowUp, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { OPEN_PRIVACY_SETTINGS_EVENT } from "@/components/site/cookie-banner";
import { useCopy } from "@/lib/i18n";


const copy = {
  de: {
    tagline: "Empfang & Hotelservices",
    description:
      "Professionelles Empfangs- und Hotelpersonal für das Rhein-Main-Gebiet – zuverlässig, diskret und kurzfristig verfügbar.",
    navHeading: "Navigation",
    nav: [
      { label: "Leistungen", href: "/leistungen" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Karriere", href: "/karriere" },
      { label: "FAQ", href: "/#faq" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    leistungenHeading: "Leistungen",
    leistungen: [
      { label: "Empfangsdienst", href: "/leistungen/empfang" },
      { label: "Night Audit", href: "/leistungen/night-audit" },
      { label: "Tagungsservice", href: "/leistungen/tagung" },
      { label: "Büro-Empfang", href: "/leistungen/buero-empfang" },
    ],
    kontaktHeading: "Kontakt",
    region: "Rhein-Main-Gebiet",
    hours: "Einsätze 24/7",
    cta: "Anfrage senden",
    rights: "Alle Rechte vorbehalten.",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    privacySettings: "Datenschutzeinstellungen",
    top: "Nach oben",
    developedBy: "Entwickelt von",
    logoAlt: "DPP Services Logo",
    mailAria: "E-Mail an DPP Services senden",
    callAria: "DPP Services anrufen",
  },
  en: {
    tagline: "Reception & Hotel Services",
    description:
      "Professional reception and hotel staff for the Rhein-Main region – reliable, discreet, and available at short notice.",
    navHeading: "Navigation",
    nav: [
      { label: "Services", href: "/leistungen" },
      { label: "About us", href: "/ueber-uns" },
      { label: "Careers", href: "/karriere" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/kontakt" },
    ],
    leistungenHeading: "Services",
    leistungen: [
      { label: "Reception service", href: "/leistungen/empfang" },
      { label: "Night audit", href: "/leistungen/night-audit" },
      { label: "Conference service", href: "/leistungen/tagung" },
      { label: "Office reception", href: "/leistungen/buero-empfang" },
    ],
    kontaktHeading: "Contact",
    region: "Rhein-Main region",
    hours: "24/7 availability",
    cta: "Send inquiry",
    rights: "All rights reserved.",
    impressum: "Legal notice",
    datenschutz: "Privacy policy",
    privacySettings: "Privacy settings",
    top: "Back to top",
    developedBy: "Developed by",
    logoAlt: "DPP Services logo",
    mailAria: "Send an email to DPP Services",
    callAria: "Call DPP Services",
  },
};

export function SiteFooter() {
  const t = useCopy(copy);
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
              <span className="inline-grid shrink-0 place-items-center rounded-full bg-white p-0.5 shadow-soft ring-1 ring-white/20">
                <img
                  src="/logo-mark.png"
                  alt={t.logoAlt}
                  width={693}
                  height={657}
                  className="h-11 w-auto shrink-0 rounded-full object-contain sm:h-12"
                />
              </span>
              <span>
                <span className="block font-display text-sm font-extrabold tracking-tight text-white">
                  DPP SERVICES
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase">
                  {t.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t.description}
            </p>
            
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
              {t.navHeading}
            </h3>
            <ul className="mt-5 space-y-3">
              {t.nav.map((n) => {
                const isHash = n.href.startsWith("/#");
                return (
                  <li key={n.href}>
                    <Link
                      to={isHash ? { pathname: "/", hash: n.href.slice(2) } : n.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}

            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
              {t.leistungenHeading}
            </h3>
            <ul className="mt-5 space-y-3">
              {t.leistungen.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
              {t.kontaktHeading}
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:info@dpp-services.de"
                  aria-label={t.mailAria}
                  className="break-words hover:text-white"
                >
                  info@dpp-services.de
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+4917670800798" aria-label={t.callAria} className="hover:text-white">
                  +49 176 70800798
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t.region}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t.hours}
              </li>
            </ul>
            <Link
              to="/kontakt"
              className="bg-gradient-brand shadow-brand mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-gold-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.cta}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} DPP Services. {t.rights}
            </p>
            <p className="text-xs text-white/45">
              {t.developedBy}{" "}
              <a
                href="https://bytetechnik.de"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                ByteTechnik.de
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="text-xs text-white/45 transition-colors hover:text-white">
              {t.impressum}
            </Link>
            <Link to="/datenschutz" className="text-xs text-white/45 transition-colors hover:text-white">
              {t.datenschutz}
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_PRIVACY_SETTINGS_EVENT))}
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              {t.privacySettings}
            </button>
            <a
              href="#top"
              aria-label={t.top}
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
