import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "de" | "en";

const STORAGE_KEY = "dpp-lang";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue>({ lang: "de", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  // Read the stored preference after hydration to avoid SSR mismatches.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "de") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage failures (private mode)
    }
  }, []);

  return <I18nContext.Provider value={{ lang, setLang }}>{children}</I18nContext.Provider>;
}

export function useLang() {
  return useContext(I18nContext);
}

/** Widen literal types from `as const` dictionaries so DE/EN shapes stay compatible. */
type Loose<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Loose<U>[]
        : T extends object
          ? { [K in keyof T]: Loose<T[K]> }
          : T;

/** Pick the copy for the active language from a `{ de, en }` dictionary. */
export function useCopy<T extends Record<Lang, unknown>>(copy: T): Loose<T["de"]> {
  const { lang } = useLang();
  return copy[lang] as Loose<T["de"]>;
}
