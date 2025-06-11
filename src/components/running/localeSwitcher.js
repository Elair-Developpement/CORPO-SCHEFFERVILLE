"use client";

import { useTranslations } from "next-intl";
import { setUserLocale } from "@/lib/locale/locale";
import { useTransition } from "react";

/**
 * Composant qui consiste d'une lien pour changer la langue du site web
 * @returns {JSX.Element} Élément clickable qui change la langue.
 */
export default function LocaleSwitcher() {
  const t = useTranslations("running");

  /**
   * Fonction qui change la langue pour celle passée en paramètre
   * @param locale {string} La langue à changer
   */
  function handleLocaleChange(locale) {
    setUserLocale(locale.toLowerCase()).then();
  }

  return (
    <a
      onClick={() => handleLocaleChange(t("locale-switcher"))}
      className={"hover:underline"}
    >
      {t("locale-switcher")}
    </a>
  );
}
