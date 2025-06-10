"use client";

import { useTranslations } from "next-intl";

import HomeImage from "@/components/home/homeImage";
import ServiceCard from "@/components/home/serviceCard";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main>
      <HomeImage />
      <div
        className={
          "py-20 px-16 mx-auto flex flex-row justify-center space-x-11"
        }
      >
        <div className={"flex flex-col space-y-10"}>
          <ServiceCard
            title={"Habitation"}
            description={
              "L’habitation est au cœur du développement communautaire et économique. Nous disposons d’une banque de terrains afin de répondre à vos besoins. Nous travaillons sur un projet de logements abordables et de la revitalisation du quartier Eclipse. Faite nous part de vos besoins, nous vous accompagnerons."
            }
            path={"/housing"}
          />
          <ServiceCard
            title={"Vie communautaire et culturelle"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in libero magna. Praesent eget pellentesque lorem. Aenean quis dui sed sapien dignissim volutpat eu vel ex."
            }
            path={"/communal-life"}
          />
        </div>
        <div className={"flex flex-col space-y-10"}>
          <ServiceCard
            title={"Développement économique"}
            description={
              "Cras ullamcorper urna nulla. Maecenas vel laoreet tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in massa eu nulla porttitor auctor id sed erat."
            }
            path={"/business"}
          />
          <ServiceCard
            title={"La corporation"}
            description={
              "Donec in massa eu nulla porttitor auctor id sed erat. Pellentesque ullamcorper ex nec dolor aliquam, vitae egestas ipsum aliquet."
            }
            path={"/corporation"}
          />
        </div>
      </div>
    </main>
  );
}
