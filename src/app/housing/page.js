"use client";

import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Housing() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/leafletMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex-col flex"}
    >
      <PageTitleAndDescription
        title={"Logements et terrains disponibles"}
        description={
          "Vous souhaitez louer un logement? Nous possédons quelques propriétés\n" +
          "résidentielles. Vous êtes à la recherche d’un terrain à construire ? Nous possédons\n" +
          "une banque de terrains . Dans les deux cas n’hésitez pas à nous contacter !"
        }
      />
      <div className={"flex flex-grow max-h-full w-full mb-7"}>
        <Map />
      </div>
    </main>
  );
}
