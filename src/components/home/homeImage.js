import Image from "next/image";

export default function HomeImage() {
  return (
    <div className="relative w-full h-[675px]">
      <Image
        src="/images/home_aerial_view.jpg"
        alt="Vue aérienne de Schefferville, crédit photo: Pierre Bouchard"
        fill={true}
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0 brightness-50"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5 z-10">
        <h1 className="flex text-7xl text-white drop-shadow-lg">
          Notre mission
        </h1>
        <p className="flex text-white drop-shadow-lg text-xl leading-relaxed text-center max-w-[625px]">
          Favoriser le développement durable de Schefferville et de sa région en
          réalisant en partenariat des projets dans les domaines de
          l'habitation, du développement économique et de la vie communautaire
          et culturelle.
        </p>
      </div>
    </div>
  );
}
