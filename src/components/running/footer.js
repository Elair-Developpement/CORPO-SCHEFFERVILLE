import { useTranslations } from "next-intl";

import Link from "next/link";
import ContactPopover from "@/components/dialog/contactPopover";
import LocaleSwitcher from "@/components/running/localeSwitcher";

/**
 * Composant du pied de page du site web.
 */
export default function Footer() {
  const t = useTranslations("running");

  return (
    <footer className={"bg-green_1 flex-col flex-wrap space-y-5 py-6"}>
      <ul className={"flex justify-center space-x-6 text-white font-bold"}>
        <li>
          <Link href="/" className="hover:underline">
            {t("home")}
          </Link>
        </li>
        <li>
          <Link href="/newsletter" className="hover:underline">
            {t("newsletter")}
          </Link>
        </li>
        <li>
          <a
            href="https://ville-schefferville.ca/"
            target="_blank"
            className="hover:underline"
          >
            {t("schefferville-website")}
          </a>
        </li>
        <li>
          <ContactPopover triggerText={t("contact-us")} />
        </li>
        <li>
          <LocaleSwitcher />
        </li>
      </ul>
      <p className="flex justify-center text-xs text-white">
        {t("copyright")}&nbsp;
        <Link href="/admin" className="hover:underline">
          {t("admin")}
        </Link>
      </p>
    </footer>
  );
}
