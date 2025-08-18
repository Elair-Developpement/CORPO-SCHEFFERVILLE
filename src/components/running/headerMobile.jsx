"use client";

import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

/**
 * Composant de l'en-tête du site web sur mobile.
 */
export default function HeaderMobile() {
  return (
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
  );
}
