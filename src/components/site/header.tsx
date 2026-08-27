import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/dpp-logo.asset.json";
import { cn } from "@/lib/utils";
import { useCopy } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";


const hrefs = ["/", "/leistungen", "/ueber-uns", "/#faq"];

const copy = {
  de: {
    tagline: "Empfang & Hotelservices",
    logoAlt: "DPP Services Logo",
    nav: ["Startseite", "Leistungen", "Über uns", "FAQ"],
    contact: "Kontakt",
    contactLong: "Jetzt Kontakt aufnehmen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
  },
  en: {
    tagline: "Reception & Hotel Services",
    logoAlt: "DPP Services logo",
    nav: ["Home", "Services", "About us", "FAQ"],
    contact: "Contact",
    contactLong: "Get in touch now",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
} as const;


export function SiteHeader() {
  const t = useCopy(copy);
  const links = hrefs.map((href, i) => ({ href, label: t.nav[i] }));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-500",
          scrolled
            ? "border-b border-border/70 bg-background/85 shadow-soft"
            : "bg-gradient-to-b from-ink/45 to-transparent",
        )}
      />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt={t.logoAlt}
            width={48}
            height={48}
            className="h-10 w-10 shrink-0 rounded-lg object-cover sm:h-12 sm:w-12"
          />
          <span className="hidden min-w-0 sm:block">

            <span
              className={cn(
                "block truncate font-display text-sm leading-tight font-extrabold tracking-tight sm:text-base",
                scrolled ? "text-ink" : "text-white",
              )}
            >
              DPP SERVICES
            </span>
            <span
              className={cn(
                "block truncate text-[10px] font-semibold tracking-[0.18em] uppercase",
                scrolled ? "text-muted-foreground" : "text-white/70",
              )}
            >
              {t.tagline}
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "underline-sweep text-sm font-semibold transition-colors",
                scrolled ? "text-ink-soft hover:text-ink" : "text-white/85 hover:text-white",
              )}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/kontakt"
            className="bg-gradient-brand shadow-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            {t.contact}
          </Link>
          <LanguageSwitcher id="desktop" variant={scrolled ? "dark" : "light"} />
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageSwitcher id="mobile" variant={scrolled ? "dark" : "light"} />
        </div>

        <button
          type="button"
          aria-label={open ? t.menuClose : t.menuOpen}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden",
            scrolled
              ? "border-border bg-card text-ink"
              : "border-white/25 bg-white/10 text-white backdrop-blur",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label={t.menuClose}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 -z-10 bg-ink/45 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mx-3 mt-2 origin-top overflow-hidden rounded-3xl border border-border/70 bg-background shadow-lift lg:hidden"
            >
              <div className="bg-gradient-brand h-1 w-full" />
              <div className="glow-orb -top-16 -right-10 h-40 w-40" />
              <div className="relative flex flex-col p-5 pb-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center justify-between gap-4 border-b border-border/60 py-4 last:border-0"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="text-[10px] font-bold tabular-nums text-primary/70">
                        0{i + 1}
                      </span>
                      <span className="truncate font-display text-xl font-extrabold tracking-tight text-ink">
                        {l.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + links.length * 0.06, duration: 0.4 }}
                  className="mt-5"
                >
                  <Link
                    to="/kontakt"
                    onClick={() => setOpen(false)}
                    className="bg-gradient-brand shadow-brand flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    {t.contactLong}
                  </Link>
                  <a
                    href="tel:+4917670800798"
                    className="mt-3 block text-center text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                  >
                    +49 176 70800798
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
