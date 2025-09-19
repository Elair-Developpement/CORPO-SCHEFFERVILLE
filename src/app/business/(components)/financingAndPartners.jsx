import { useTranslations } from "next-intl";

import PartnerCard from "./partnerCard";

export default function FinancingAndPartners() {
  const t = useTranslations("business");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <PartnerCard
        name="Développement Économique Sept-îles"
        logoPath={"/logos/partners/logo_desi_bleu.png"}
        link={"https://www.deseptiles.com/"}
      />
      <PartnerCard
        name="MRC Caniapiscau"
        logoPath={"/logos/partners/logo-mrc-caniapiscau.png"}
        link={"https://www.caniapiscau.ca/"}
      />
      <PartnerCard
        name="Société du Plan Nord"
        logoPath={"/logos/partners/logo-spn.jpg"}
        link={
          "https://www.quebec.ca/gouvernement/ministeres-organismes/societe-plan-nord"
        }
      />
      <PartnerCard
        name="Ville de Schefferville"
        logoPath={"/logos/partners/logo-ville-schefferville.svg"}
        link={"https://schefferville.ca"}
      />
      <PartnerCard
        name="Conseil de la nation innue de Matimekush-Lac-John"
        logoPath={"/logos/partners/logo-innue.png"}
        link={
          "https://data.nativemi.org/tribal-directory/Details/conseil-de-la-nation-innu-matimekush-lac-john-1879430"
        }
      />
      <PartnerCard
        name="Conseil de la nation Naskapi de Kawawachikamach"
        logoPath={"/logos/partners/logo-naskapi.png"}
        link={"https://naskapi.ca/"}
      />
    </div>
  );
}
