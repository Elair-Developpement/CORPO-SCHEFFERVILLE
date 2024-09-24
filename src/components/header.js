import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-black p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Corporation de développement de Schefferville</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/newsletter">Infolettre</Link>
          </li>
          <li>
            <a href={"https://ville-schefferville.ca/"} target={"_blank"}>
              Ville de Schefferville
            </a>
          </li>
          <li>
            <Link href="/contact">Nous joindre</Link>
          </li>
          <li>
            <Link href="/contact">En</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
