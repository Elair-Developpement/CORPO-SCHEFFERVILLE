import Image from "next/image";

export default function HomeImage() {
  return (
    <div className="relative w-full h-[625px]">
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
        <p className="flex text-white drop-shadow-lg leading-relaxed text-center w-[625px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
          libero magna. Praesent eget pellentesque lorem. Aenean quis dui sed
          sapien dignissim volutpat eu vel ex. Praesent tempor enim in augue
          gravida volutpat. In a metus odio. Pellentesque et pretium dolor. Cras
          ullamcorper urna nulla. Maecenas vel laoreet tellus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Donec in massa eu nulla
          porttitor auctor id sed erat. Pellentesque ullamcorper ex nec dolor
          aliquam, vitae egestas ipsum aliquet.
        </p>
      </div>
    </div>
  );
}
