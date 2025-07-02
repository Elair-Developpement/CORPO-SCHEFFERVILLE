import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";
import ContactPopover from "@/components/dialog/contactPopover";
import LocaleSwitcher from "@/components/running/localeSwitcher";

/**
 * Composant de l'en-tête du site web.
 */
export default function Header() {
  const t = useTranslations("running");

  return (
    <header className="bg-green_1">
      <div
        className={
          "container text-white font-bold mx-auto flex justify-between items-center"
        }
      >
        {/* TODO: Replace LOGO */}
        <Link href={"/"}>
          <Image
            src="/logos/Corporation-Logo-H-RGB-10x.jpg"
            alt="Logo de la ville de Schefferville, à remplacer avec celui de la corporation."
            width={350}
            height={100}
            priority={true}
          />
        </Link>
        {/* Navigation Links */}
        <ul className={"flex space-x-6"}>
          <li>
            <Link href={"/newsletter"} className={"hover:underline"}>
              {t("newsletter")}
            </Link>
          </li>
          <li>
            <a
              href={"https://ville-schefferville.ca/"}
              target={"_blank"}
              className={"hover:underline"}
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
      </div>
    </header>
  );
}
