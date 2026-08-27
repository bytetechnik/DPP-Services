import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/dpp-logo.asset.json";
import { cn } from "@/lib/utils";
import { useCopy } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

const MotionLink = motion.create(Link);

const hrefs = ["/", "/leistungen", "/ueber-uns", "/#faq"];


const copy = {
  de: {
    tagline: "Empfang & Hotelservices",
    logoAlt: "DPP Services Logo",
    callAria: "DPP Services anrufen",
    nav: ["Startseite", "Leistungen", "Über uns", "FAQ"],
    contact: "Kontakt",
    contactLong: "Jetzt Kontakt aufnehmen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
  },
  en: {
    tagline: "Reception & Hotel Services",
    logoAlt: "DPP Services logo",
    callAria: "Call DPP Services",
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
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const activeHash = mounted ? hash : "";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && !activeHash;
    if (href.startsWith("/#")) return pathname === "/" && activeHash === href.slice(2);
    return pathname === href || pathname.startsWith(`${href}/`);
  };


  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onHomeClick = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    setOpen(false);
    if (pathname === "/") {
      if (hash) void navigate({ to: "/", hash: "", replace: true });
      scrollToTop();
    } else {
      void navigate({ to: "/" }).then(() => {
        requestAnimationFrame(scrollToTop);
      });
    }
  };


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
        <Link to="/" onClick={onHomeClick} className="flex min-w-0 items-center gap-3">
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
          {links.map((l) => {
            const active = isActive(l.href);
            const isHash = l.href.startsWith("/#");
            return (
              <Link
                key={l.href}
                to="/"
                {...(isHash ? { hash: l.href.slice(2) } : { to: l.href })}
                onClick={l.href === "/" ? onHomeClick : undefined}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "underline-sweep relative text-sm font-semibold transition-colors",
                  active
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                      ? "text-ink-soft hover:text-ink"
                      : "text-white/85 hover:text-white",
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full",
                      scrolled ? "bg-gradient-brand" : "bg-white",
                    )}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </Link>
            );
          })}


          <Link
            to="/kontakt"
            className="bg-gradient-brand shadow-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
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
                {links.map((l, i) => {
                  const active = isActive(l.href);
                  const isHash = l.href.startsWith("/#");
                  return (
                    <MotionLink
                      key={l.href}
                      to="/"
                      {...(isHash ? { hash: l.href.slice(2) } : { to: l.href })}
                      aria-current={active ? "page" : undefined}
                      onClick={(e: React.MouseEvent) => {
                        if (l.href === "/") onHomeClick(e);
                        setOpen(false);
                      }}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "group flex items-center justify-between gap-4 border-b border-border/60 py-4 last:border-0",
                        active && "-mx-2 rounded-2xl border-0 bg-primary/8 px-2",
                      )}
                    >

                      <span className="flex min-w-0 items-center gap-3">
                        {active ? (
                          <span className="bg-gradient-brand h-5 w-1 shrink-0 rounded-full" />
                        ) : (
                          <span className="text-[10px] font-bold tabular-nums text-primary/70">
                            0{i + 1}
                          </span>
                        )}
                        <span
                          className={cn(
                            "truncate font-display text-xl font-extrabold tracking-tight",
                            active ? "text-primary" : "text-ink",
                          )}
                        >
                          {l.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary",
                          active ? "text-primary" : "text-muted-foreground",
                        )}
                      />
                    </MotionLink>
                  );
                })}

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
                    {t.contactLong}
                  </Link>
                  <a
                    href="tel:+4917670800798"
                    aria-label={t.callAria}
                    className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                  >
                    <Phone className="h-3.5 w-3.5" />
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
