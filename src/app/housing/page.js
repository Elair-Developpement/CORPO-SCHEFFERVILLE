import TitleCard from "@/components/common/titleCard";
import Map from "../../components/map/basicMap";

export default function Housing() {
  return (
    <main className={"h-[calc(100vh-249.27px)] flex-col flex"}>
      <TitleCard
        title={"Logements"}
        description={
          "Vous souhaitez louer un logement? Nous possédons quelques propriétés\n" +
          "résidentielles. Vous êtes à la recherche d’un terrain à construire ? Nous possédons\n" +
          "une banque de terrains . Dans les deux cas n’hésitez pas à nous contacter !"
        }
      />
      <div className={"flex flex-grow w-screen"}>
        <Map />
      </div>
    </main>
  );
}
