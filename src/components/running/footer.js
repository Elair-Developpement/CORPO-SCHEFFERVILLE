import Link from "next/link";

const Footer = () => {
  return (
    <footer className={"flex flex-wrap space-y-5 items-center justify-center"}>
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
          <Link href="/contact" className={"hover:underline"}>
            En
          </Link>
        </li>
      </ul>
      <p className={"text-xs text-gray-500"}>
        Copyright © 2024 Corporation de développement de Schefferville |
        Conception : Elair Développement
      </p>
    </footer>
  );
};

export default Footer;
