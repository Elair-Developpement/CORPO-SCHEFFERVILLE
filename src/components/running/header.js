import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-black py-8 container mx-auto flex justify-between items-center">
      {/* TODO: Add logo */}
      <div className="text-2xl font-bold">
        <Link href="/">Corporation de développement de Schefferville</Link>
      </div>
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
