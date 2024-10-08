import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-black container mx-auto flex justify-between items-center">
      {/* TODO: Replace LOGO */}
      <Image
        src="/logos/Schefferville-Logo-H-Avec_sous-app-RGB.jpg"
        alt="Logo de la ville de Schefferville, à remplacer avec celui de la corporation."
        width={350}
        height={100}
      />
      {/* Navigation Links */}
      <ul className={"flex space-x-6"}>
        <li>
          <Link href={"/newsletter"} className={"hover:underline"}>
            Infolettre
          </Link>
        </li>
        <li>
          <a
            href={"https://ville-schefferville.ca/"}
            target={"_blank"}
            className={"hover:underline"}
          >
            Ville de Schefferville
          </a>
        </li>
        <li>
          <Link href="/contact" className={"hover:underline"}>
            Nous joindre
          </Link>
        </li>
        <li>
          <Link href="/todo" className={"hover:underline"}>
            En
          </Link>
        </li>
      </ul>
    </header>
  );
}
