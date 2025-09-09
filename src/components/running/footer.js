import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";

import ContactPopover from "@/components/dialog/contactPopover";
import LocaleSwitcher from "@/components/running/localeSwitcher";

/**
 * Composant du pied de page du site web.
 */
export default function Footer() {
  const t = useTranslations("running");

  return (
    <footer
      className={"bg-green_1 flex-col flex-wrap max-md:p-2 space-y-5 md:py-6"}
    >
      <Image
        src="/logos/Corporation-Logo-H-RGB-10x.jpg"
        alt="Logo horizontal de la corporation de développement de Schefferville."
        width={3730}
        height={2269}
        className="object-contain w-[15rem] md:hidden bg-white rounded-lg"
      />
      <ul
        className={
          "flex max-md:flex-col max-md:space-y-4 justify-center md:space-x-6 text-white font-bold"
        }
      >
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
            href="https://schefferville.ca/"
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
      <p className="flex max-md:flex-col justify-center text-xs text-white">
        {t("copyright")}&nbsp;
        <Link href="/admin" className="hover:underline">
          {t("admin")}
        </Link>
      </p>
    </footer>
  );
}
