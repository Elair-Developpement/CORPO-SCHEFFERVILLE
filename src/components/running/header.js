import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";

/**
 * Composant de l'en-tête du site web, retourne le bon header dépendant de la taille de l'écran.
 * @returns {JSX.Element} Élément d'en-tête responsive.
 */
export default function Header() {
  return (
    <>
      <div className="max-md:hidden">
        <HeaderDesktop />
      </div>
      <div className="md:hidden">
        <HeaderMobile />
      </div>
    </>
  );
}
