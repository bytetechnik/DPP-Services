import { getCookie } from "@tanstack/react-start/server";

import { LANG_STORAGE_KEY } from "./lang-shared";

/** Reads the stored language cookie during SSR. */
export function readLangCookie(): string | undefined {
  return getCookie(LANG_STORAGE_KEY);
}
