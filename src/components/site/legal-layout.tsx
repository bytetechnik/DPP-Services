import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "./footer";
import { useCopy } from "@/lib/i18n";

const copy = {
  de: {
    tagline: "Empfang & Hotelservices",
    backHome: "Zur Startseite",
    eyebrow: "Rechtliches",
  },
  en: {
    tagline: "Reception & Hotel Services",
    backHome: "Back to homepage",
    eyebrow: "Legal",
  },
} as const;

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  const t = useCopy(copy);
  return (
    <div id="top" className="min-h-screen bg-background">
      <header className="border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/Icon.jpeg"
              alt="DPP Services Logo"
              width={48}
              height={48}
              className="h-10 w-10 shrink-0 rounded-lg object-cover sm:h-11 sm:w-11"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-sm leading-tight font-extrabold tracking-tight text-ink sm:text-base">
                DPP SERVICES
              </span>
              <span className="block truncate text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {t.tagline}
              </span>
            </span>
          </Link>
          <Link
            to="/"
            className="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{t.backHome}</span>
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <section className="relative bg-ink py-16 sm:py-20">
          <div className="glow-orb -right-24 top-0 h-72 w-72 opacity-20" />
          <div className="grid-lines absolute inset-0 opacity-20" />
          <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="eyebrow text-primary">{t.eyebrow}</span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {intro ? (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">{intro}</p>
            ) : null}
          </div>
        </section>

        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-10">{children}</div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}
