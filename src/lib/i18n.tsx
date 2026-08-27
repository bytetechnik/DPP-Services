import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { createIsomorphicFn } from "@tanstack/react-start";

import { LANG_STORAGE_KEY, normalizeLang as normalize, type Lang } from "./lang-shared";
import { readLangCookie } from "./lang.server";

export type { Lang };
export { LANG_STORAGE_KEY };


/**
 * Resolves the visitor's language on both server (cookie header) and client
 * (cookie / localStorage) so SSR already renders the right language and there
 * is no German flash on full page loads.
 */
export const resolveInitialLang = createIsomorphicFn()
  .server((): Lang => {
    try {
      return normalize(readLangCookie()) ?? "de";
    } catch {
      return "de";
    }
  })

  .client((): Lang => {
    const fromCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${LANG_STORAGE_KEY}=`))
      ?.split("=")[1];
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      stored = null;
    }
    return normalize(fromCookie) ?? normalize(stored) ?? "de";
  });

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue>({ lang: "de", setLang: () => {} });

export function LanguageProvider({
  children,
  initialLang = "de",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // ignore storage failures (private mode)
    }
    document.cookie = `${LANG_STORAGE_KEY}=${next}; path=/; max-age=31536000; samesite=lax`;
  }, []);

  return <I18nContext.Provider value={{ lang, setLang }}>{children}</I18nContext.Provider>;
}


export function useLang() {
  return useContext(I18nContext);
}

/** Widen literal types from `as const` dictionaries so DE/EN shapes stay compatible. */
type Loose<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends { $$typeof: symbol }
    ? T
    : T extends string
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
