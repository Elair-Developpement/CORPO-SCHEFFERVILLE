import TitleCard from "@/components/common/titleCard";

export default function Communal_life() {
  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex flex-col"}
    >
      <TitleCard
        title={"Loisir, vie communautaire et culturelle, saines habitudes"}
        description={
          "Nous souhaitons enrichir l’offre aux citoyens en matière de loisirs, de sport, de plein\n" +
          "air, d’activités culturelles et communautaires et de saines habitudes de vie. Des\n" +
          "activités sont en cours, peut-être souhaitez-vous démarrer un projet ou encore vous\n" +
          "informer sur les équipements disponibles et en développement."
        }
      />
      <button
        className={
          "self-center bg-green_1 hover:bg-white hover:text-green_1 hover:border-green_1 text-white font-bold py-3 px-5 border-2 rounded"
        }
      >
        Démarrer un projet
      </button>
      <div className={"flex flex-col py-5"}>
        <div className={"flex bg-orange_2 p-2 text-white"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>Activités en cours</div>
            <div className={"flex-col text-right"}>
              <div>Club de marche</div>
              <div>Agriculture nordique</div>
            </div>
          </div>
        </div>
        <div className={"flex p-2"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>
              Équipements disponibles
            </div>
            <div className={"flex-col text-right"}>
              <div>Salle de conditionnement physique</div>
              <div>Aréna</div>
              <div>Piscine</div>
              <div>Aire de jeux pour enfants</div>
            </div>
          </div>
        </div>
        <div className={"flex bg-orange_2 p-2 text-white"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>En développement</div>
            <div className={"flex-col text-right"}>
              <div>Salle de conditionnement physique</div>
              <div>Aréna</div>
              <div>Piscine</div>
              <div>Aire de jeux pour enfants</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
