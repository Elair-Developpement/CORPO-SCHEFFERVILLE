import Link from "next/link";
import ContactPopover from "@/components/dialog/contactPopover";

export default function Footer() {
  return (
    <footer className={"bg-green_1 flex-col flex-wrap space-y-5 py-6"}>
      <ul className={"flex justify-center space-x-6 text-white font-bold"}>
        <li>
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/newsletter" className="hover:underline">
            Infolettre
          </Link>
        </li>
        <li>
          <a
            href="https://ville-schefferville.ca/"
            target="_blank"
            className="hover:underline"
          >
            Ville de Schefferville
          </a>
        </li>
        <li>
          <ContactPopover triggerText={"Nous joindre"} />
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            En
          </Link>
        </li>
      </ul>
      <p className="flex justify-center text-xs text-white">
        Tous droits réservés © 2025 Corporation de développement de
        Schefferville | Conception : Elair Développement |&nbsp;
        <Link href="/admin" className="hover:underline">
          Admin
        </Link>
      </p>
    </footer>
  );
}
