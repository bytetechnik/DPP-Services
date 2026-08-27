export type Lang = "de" | "en";

export const LANG_STORAGE_KEY = "dpp-lang";

export function normalizeLang(value: string | undefined | null): Lang | undefined {
  return value === "en" || value === "de" ? value : undefined;
}
