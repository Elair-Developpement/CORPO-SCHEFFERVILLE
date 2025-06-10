import Link from "next/link";

import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import NewslettersTable from "@/app/newsletter/(components)/newslettersTable";
import { buttonVariants } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex-col flex"}
    >
      <PageTitleAndDescription
        title={"Infolettre"}
        description={
          "L’infolettre pour présentera l’avancement des projets, les bonnes nouvelles, les\n" +
          "activités communautaires et culturelles à venir. Elle sera publiée à tous les deux\n" +
          "mois ou dans l’immédiat suivant une nouvelle d’importance.\n" +
          "Si cette infolettre vous intéresse, faite nous en part en cliquant sur le lien\n" +
          "suivant: "
        }
      />
      <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
        S'inscrire à l'infolettre
      </Link>
      <p className={"my-4"}>
        Vous pouvez consultez et télécharger toutes les infolettres ci-dessous.
      </p>
      <NewslettersTable />
    </main>
  );
}
