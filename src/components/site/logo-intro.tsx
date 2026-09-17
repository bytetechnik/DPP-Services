import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCopy } from "@/lib/i18n";

export const NAV_LOGO_ID = "nav-logo-mark";
export const LOGO_INTRO_EVENT = "dpp-logo-intro";

export type LogoIntroPhase = "active" | "flying" | "done";

const easing = [0.16, 1, 0.3, 1] as const;

/** Resets on full page load/reload; blocks repeat splash on SPA remounts of `/`. */
let splashShownThisDocument = false;
let introRunning = false;

export function isLogoIntroRunning() {
  return introRunning;
}

const copy = {
  de: {
    logoAlt: "DPP Services Logo",
    brand: "DPP SERVICES",
    tagline: "Empfang & Hotelservices",
  },
  en: {
    logoAlt: "DPP Services logo",
    brand: "DPP SERVICES",
    tagline: "Reception & Hotel Services",
  },
} as const;

function emitPhase(phase: LogoIntroPhase) {
  if (phase === "done") introRunning = false;
  window.dispatchEvent(new CustomEvent(LOGO_INTRO_EVENT, { detail: phase }));
}

type FlyTarget = { x: number; y: number; scale: number };

export function LogoIntro() {
  const t = useCopy(copy);
  const reduceMotion = useReducedMotion();
  const logoRef = useRef<HTMLSpanElement>(null);

  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return false;
    if (splashShownThisDocument) return false;
    splashShownThisDocument = true;
    introRunning = true;
    return true;
  });
  const [phase, setPhase] = useState<"enter" | "fly" | "landed">("enter");
  const [flyTo, setFlyTo] = useState<FlyTarget | null>(null);

  useEffect(() => {
    if (!active) return;
    emitPhase("active");

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (reduceMotion) {
      const quick = window.setTimeout(() => {
        emitPhase("done");
        setActive(false);
      }, 300);
      return () => {
        window.clearTimeout(quick);
        document.body.style.overflow = prevOverflow;
      };
    }

    const flyTimer = window.setTimeout(() => {
      const source = logoRef.current?.getBoundingClientRect();
      const target = document.getElementById(NAV_LOGO_ID)?.getBoundingClientRect();

      if (source && target && source.width > 0 && target.width > 0) {
        setFlyTo({
          x: target.left + target.width / 2 - (source.left + source.width / 2),
          y: target.top + target.height / 2 - (source.top + source.height / 2),
          scale: target.width / source.width,
        });
      } else {
        setFlyTo({
          x: -(window.innerWidth / 2) + 48,
          y: -(window.innerHeight / 2) + 40,
          scale: 0.42,
        });
      }

      setPhase("fly");
      emitPhase("flying");
    }, 1500);

    // Reveal navbar logo as the flying mark arrives
    const landTimer = window.setTimeout(() => {
      setPhase("landed");
      emitPhase("done");
    }, 2350);

    const endTimer = window.setTimeout(() => {
      setActive(false);
    }, 2700);

    return () => {
      window.clearTimeout(flyTimer);
      window.clearTimeout(landTimer);
      window.clearTimeout(endTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, reduceMotion]);

  const flying = phase === "fly" || phase === "landed";

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="logo-intro"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easing }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0 bg-ink"
            initial={{ opacity: 1 }}
            animate={{ opacity: flying ? 0 : 1 }}
            transition={{ duration: 0.75, ease: easing }}
          />
          <motion.div
            className="glow-orb top-1/4 left-1/2 h-72 w-72 -translate-x-1/2"
            animate={{ opacity: flying ? 0 : 0.3 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="grid-lines absolute inset-0"
            animate={{ opacity: flying ? 0 : 0.2 }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.span
              ref={logoRef}
              className="inline-grid place-items-center rounded-full bg-white p-1.5 shadow-lift ring-1 ring-white/30 will-change-transform"
              initial={{ scale: 0.72, opacity: 0 }}
              animate={
                phase === "landed"
                  ? { x: flyTo?.x ?? 0, y: flyTo?.y ?? 0, scale: flyTo?.scale ?? 1, opacity: 0 }
                  : flying && flyTo
                    ? { x: flyTo.x, y: flyTo.y, scale: flyTo.scale, opacity: 1 }
                    : { x: 0, y: 0, scale: 1, opacity: 1 }
              }
              transition={
                phase === "landed"
                  ? { duration: 0.25, ease: easing }
                  : flying
                    ? { duration: 0.85, ease: easing }
                    : { duration: 0.7, ease: easing, delay: 0.05 }
              }
            >
              <img
                src="/logo-mark.png"
                alt=""
                width={693}
                height={657}
                className="h-24 w-auto rounded-full object-contain sm:h-28"
              />
            </motion.span>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: flying ? 0 : 1,
                y: flying ? -10 : 0,
                filter: flying ? "blur(4px)" : "blur(0px)",
              }}
              transition={{
                duration: flying ? 0.35 : 0.55,
                ease: easing,
                delay: flying ? 0 : 0.28,
              }}
            >
              <p className="mt-6 font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                {t.brand}
              </p>
              <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-white/60 uppercase">
                {t.tagline}
              </p>
              <span className="bg-gradient-brand mt-7 h-0.5 w-16 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
