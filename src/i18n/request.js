import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/lib/locale/locale";

export default getRequestConfig(async () => {
  // Reçoit la langue définie par l'utilisateur, définie par les cookies.
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
