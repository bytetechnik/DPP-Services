import { Link } from "react-router-dom";
import { useCopy } from "@/lib/i18n";

const copy = {
  de: {
    title: "Seite nicht gefunden",
    text: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    home: "Zur Startseite",
  },
  en: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
} as const;

export function NotFoundPage() {
  const t = useCopy(copy);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.home}
          </Link>
        </div>
      </div>
    </div>
  );
}
