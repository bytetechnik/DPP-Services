import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import { useCopy } from "@/lib/i18n";

type ConsentChoice = "accepted" | "rejected";

type StoredConsent = {
  choice: ConsentChoice;
  timestamp: number;
  version: 1;
};

const CONSENT_KEY = "dpp-cookie-consent";
const CONSENT_LIFETIME_MS = 180 * 24 * 60 * 60 * 1000;
const FONT_STYLESHEET_ID = "dpp-google-fonts";
const FONT_PRECONNECT_ID = "dpp-google-fonts-preconnect";
const FONT_STATIC_PRECONNECT_ID = "dpp-google-fonts-static-preconnect";
export const OPEN_PRIVACY_SETTINGS_EVENT = "dpp:open-privacy-settings";

const copy = {
  de: {
    title: "Ihre Privatsphäre",
    description:
      "Wir verwenden notwendige Technologien für den Betrieb der Website. Optionale Dienste nutzen wir nur mit Ihrer Einwilligung.",
    detailsDescription:
      "Sie entscheiden selbst, welche optionalen Dienste aktiviert werden. Ihre Auswahl können Sie jederzeit über die Datenschutzeinstellungen ändern oder widerrufen.",
    necessary: "Technisch notwendig",
    necessaryDescription:
      "Speichert Ihre Sprach- und Datenschutzauswahl. Diese Funktionen sind für den gewünschten Betrieb der Website erforderlich und können nicht deaktiviert werden.",
    optional: "Externe Dienste",
    optionalDescription:
      "Google Fonts sorgt für eine einheitliche Schriftdarstellung. Bei Aktivierung wird eine Verbindung zu Google hergestellt und Ihre IP-Adresse übertragen.",
    accept: "Alle akzeptieren",
    reject: "Nur notwendige",
    showDetails: "Einstellungen anpassen",
    hideDetails: "Weniger anzeigen",
    privacy: "Datenschutzerklärung",
    close: "Einstellungen schließen",
  },
  en: {
    title: "Your privacy",
    description:
      "We use necessary technologies to operate this website. Optional services are used only with your consent.",
    detailsDescription:
      "You decide which optional services may be activated. You can change or withdraw your choice at any time through the privacy settings.",
    necessary: "Strictly necessary",
    necessaryDescription:
      "Stores your language and privacy choices. These functions are required for the requested operation of the website and cannot be disabled.",
    optional: "External services",
    optionalDescription:
      "Google Fonts provides consistent typography. When enabled, a connection to Google is established and your IP address is transferred.",
    accept: "Accept all",
    reject: "Necessary only",
    showDetails: "Manage settings",
    hideDetails: "Show less",
    privacy: "Privacy policy",
    close: "Close settings",
  },
} as const;

function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const stored = JSON.parse(raw) as Partial<StoredConsent>;
    const isValidChoice = stored.choice === "accepted" || stored.choice === "rejected";
    const isCurrent = stored.version === 1 && typeof stored.timestamp === "number";

    if (!isValidChoice || !isCurrent || Date.now() - stored.timestamp > CONSENT_LIFETIME_MS) {
      window.localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return stored.choice;
  } catch {
    return null;
  }
}

function setGoogleFontsEnabled(enabled: boolean) {
  document.getElementById(FONT_STYLESHEET_ID)?.remove();
  document.getElementById(FONT_PRECONNECT_ID)?.remove();
  document.getElementById(FONT_STATIC_PRECONNECT_ID)?.remove();

  if (!enabled) return;

  const preconnect = document.createElement("link");
  preconnect.id = FONT_PRECONNECT_ID;
  preconnect.rel = "preconnect";
  preconnect.href = "https://fonts.googleapis.com";

  const staticPreconnect = document.createElement("link");
  staticPreconnect.id = FONT_STATIC_PRECONNECT_ID;
  staticPreconnect.rel = "preconnect";
  staticPreconnect.href = "https://fonts.gstatic.com";
  staticPreconnect.crossOrigin = "anonymous";

  const stylesheet = document.createElement("link");
  stylesheet.id = FONT_STYLESHEET_ID;
  stylesheet.rel = "stylesheet";
  stylesheet.href =
    "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap";

  document.head.append(preconnect, staticPreconnect, stylesheet);
}

export function CookieBanner() {
  const t = useCopy(copy);
  const [choice, setChoice] = useState<ConsentChoice | null>(() => readConsent());
  const [isOpen, setIsOpen] = useState(() => readConsent() === null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setGoogleFontsEnabled(choice === "accepted");
  }, [choice]);

  useEffect(() => {
    const openSettings = () => {
      setShowDetails(true);
      setIsOpen(true);
    };

    window.addEventListener(OPEN_PRIVACY_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_PRIVACY_SETTINGS_EVENT, openSettings);
  }, []);

  const saveChoice = (nextChoice: ConsentChoice) => {
    const stored: StoredConsent = {
      choice: nextChoice,
      timestamp: Date.now(),
      version: 1,
    };

    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(stored));
    } catch {
      // The choice still applies for the current page if storage is unavailable.
    }

    setChoice(nextChoice);
    setIsOpen(false);
    setShowDetails(false);
  };

  return (
    <>
      {isOpen ? (
        <div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-5xl rounded-2xl border border-white/15 bg-ink/98 text-white shadow-2xl backdrop-blur-xl sm:inset-x-6 sm:bottom-6"
        >
          <div className="px-4 py-4 sm:px-5">
            {choice !== null ? (
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={t.close}
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            ) : null}

            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-6">
              <div className={choice !== null ? "pr-9" : undefined}>
                <h2 id="cookie-banner-title" className="font-display text-base font-bold sm:text-lg">
                  {t.title}
                </h2>
                <p className="mt-1 max-w-3xl text-xs leading-relaxed text-white/65 sm:text-sm">
                  {t.description}
                </p>
                <button
                  type="button"
                  onClick={() => setShowDetails((current) => !current)}
                  aria-expanded={showDetails}
                  className="mt-2 text-xs font-semibold text-gold underline-offset-4 hover:underline"
                >
                  {showDetails ? t.hideDetails : t.showDetails}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 lg:min-w-[360px]">
                <button
                  type="button"
                  onClick={() => saveChoice("rejected")}
                  className="rounded-full border border-white/35 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-sm"
                >
                  {t.reject}
                </button>
                <button
                  type="button"
                  onClick={() => saveChoice("accepted")}
                  className="bg-gradient-brand rounded-full px-4 py-2.5 text-xs font-bold text-gold-foreground shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm"
                >
                  {t.accept}
                </button>
              </div>
            </div>

            {showDetails ? (
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="mb-3 max-w-3xl text-xs leading-relaxed text-white/65">
                  {t.detailsDescription}
                </p>
                <div className="grid gap-3 text-xs leading-relaxed text-white/65 sm:grid-cols-2">
                  <p className="rounded-xl bg-white/5 p-3">
                    <strong className="block text-white">{t.necessary}</strong>
                    {t.necessaryDescription}
                  </p>
                  <p className="rounded-xl bg-white/5 p-3">
                    <strong className="block text-white">{t.optional}</strong>
                    {t.optionalDescription}
                  </p>
                </div>
                <Link
                  to="/datenschutz"
                  className="mt-3 inline-block text-xs font-semibold text-gold underline-offset-4 hover:underline"
                >
                  {t.privacy}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
