import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/lib/locale/locale";

// Retourne les message dans la langue définie par l'utilisateur.
export default getRequestConfig(async () => {
  // Reçois la langue définie par l'utilisateur, définie par les cookies.
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
