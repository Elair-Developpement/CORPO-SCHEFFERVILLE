import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";
import ContactPopover from "@/components/dialog/contactPopover";
import LocaleSwitcher from "@/components/running/localeSwitcher";

/**
 * Composant de l'en-tête du site web sur bureau.
 */
export default function HeaderDesktop() {
  const t = useTranslations("running");

  return (
    <header className="bg-green_1">
      <div
        className={
          "container text-white font-bold mx-auto flex justify-between items-center"
        }
      >
        <Link href={"/"}>
          <Image
            src="/logos/Corporation-Logo-H-RGB-10x.jpg"
            alt="Logo de la corporation de développement de Schefferville horizontal"
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
              href={"https://schefferville.ca/"}
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
