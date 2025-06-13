"use server";

import { cookies } from "next/headers";
import { locales, defaultLocale } from "@/i18n/config";

// La langue est stockée dans un cookie.
const COOKIE_NAME = "NEXT_LOCALE";

/**
 * Récupère la langue de l'utilisateur à partir des cookies.
 * @returns {Promise<string|string>} Les messages dans la langue définie par l'utilisateur ou la langue par défaut.
 */
export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

/**
 * Définit la langue de l'utilisateur dans les cookies.
 * @param locale {string} La langue à définir pour l'utilisateur.
 */
export async function setUserLocale(locale) {
  // Vérifie que la langue est supportée.
  if (!locales.includes(locale)) {
    throw new Error(`Locale "${locale}" is not supported.`);
  }
  (await cookies()).set(COOKIE_NAME, locale);
}
