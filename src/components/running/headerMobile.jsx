"use client";

import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import ContactPopover from "@/components/dialog/contactPopover";
import LocaleSwitcher from "@/components/running/localeSwitcher";

/**
 * Composant de l'en-tête du site web sur mobile.
 */
export default function HeaderMobile() {
  const t = useTranslations("running");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* En-tête */}
      <header className="fixed top-0 w-full h-[5rem] z-40 bg-green_1 shadow-md ">
        <nav className="flex h-full items-center justify-between ps-2 pe-4 py-2">
          <Link href="/" className="h-full w-fit">
            <Image
              src="/logos/Corporation-Logo-H-RGB-10x.jpg"
              alt="Logo seulement du 70e anniversaire de la Ville de Schefferville"
              width={3730}
              height={2269}
              className="object-contain h-full w-fit bg-white rounded-lg"
            />
          </Link>

          <button onClick={() => setIsMenuOpen(true)}>
            <Menu size={30} className="stroke-3 text-white" />
          </button>
        </nav>
      </header>

      {/* Menu déroulant */}
      <div
        className={`fixed flex-col top-0 left-0 shadow-2xl w-full h-screen bg-white z-50 transition-transform duration-250 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-[5rem] justify-between ps-2 pe-4 pt-2">
          <Image
            src="/logos/Corporation-Logo-H-RGB-10x.jpg"
            alt="Logo seulement du 70e anniversaire de la Ville de Schefferville"
            width={3730}
            height={2269}
            className="object-contain h-full w-fit bg-white rounded-lg"
          />
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={30} className="text-green_1 stroke-3" />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-auto flex-grow items-center text-center justify-center gap-8 pb-[8rem] text-3xl font-bold text-green_1">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            {t("home")}
          </Link>
          <Link href="/newsletter" onClick={() => setIsMenuOpen(false)}>
            {t("newsletter")}
          </Link>
          <Link href="/housing" onClick={() => setIsMenuOpen(false)}>
            {t("housing")}
          </Link>
          <Link href="/communal-life" onClick={() => setIsMenuOpen(false)}>
            {t("communal-life")}
          </Link>
          <Link href="/business" onClick={() => setIsMenuOpen(false)}>
            {t("business")}
          </Link>
          <Link href="/corporation" onClick={() => setIsMenuOpen(false)}>
            {t("corporation")}
          </Link>
          <ContactPopover triggerText={t("contact-us")} />
          <div className="text-lg">
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
