import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options: { value: Lang; label: string; aria: string }[] = [
  { value: "de", label: "DE", aria: "Auf Deutsch anzeigen" },
  { value: "en", label: "EN", aria: "Switch to English" },
];

export function LanguageSwitcher({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className={cn(
        "relative flex items-center gap-1 rounded-full border p-1 backdrop-blur",
        variant === "light"
          ? "border-white/20 bg-white/10"
          : "border-ink/10 bg-ink/5",
        className,
      )}
    >
      <Globe
        className={cn(
          "ml-1.5 h-3.5 w-3.5 shrink-0",
          variant === "light" ? "text-white/60" : "text-ink/50",
        )}
      />
      {options.map((o) => {
        const active = o.value === lang;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setLang(o.value)}
            aria-label={o.aria}
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
                layoutId={`lang-pill-${variant}`}
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
