import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useCopy, useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options: { value: Lang; label: string }[] = [
  { value: "de", label: "DE" },
  { value: "en", label: "EN" },
];

const copy = {
  de: {
    group: "Sprache wählen",
    de: "Auf Deutsch anzeigen",
    en: "Auf Englisch anzeigen",
  },
  en: {
    group: "Select language",
    de: "Show in German",
    en: "Show in English",
  },
};

export function LanguageSwitcher({
  variant = "light",
  className,
  id = "default",
}: {
  variant?: "light" | "dark";
  className?: string;
  id?: string;
}) {
  const { lang, setLang } = useLang();
  const t = useCopy(copy);

  return (
    <div
      role="group"
      aria-label={t.group}
      className={cn(
        "relative flex items-center gap-1 rounded-full border p-1 backdrop-blur",
        variant === "light"
          ? "border-white/20 bg-white/10"
          : "border-ink/10 bg-ink/5",
        className,
      )}
    >
      {options.map((o) => {
        const active = o.value === lang;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setLang(o.value)}
            aria-label={o.value === "de" ? t.de : t.en}
            aria-pressed={active}
            className={cn(
              "relative rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[0.12em] transition-colors duration-300",
              active
                ? "text-primary-foreground"
                : variant === "light"
                  ? "text-white/65 hover:text-white"
                  : "text-ink/55 hover:text-ink",
            )}
          >
            {active && (
              <motion.span
                layoutId={`lang-pill-${id}`}
                className="bg-gradient-brand absolute inset-0 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
