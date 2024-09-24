import HomeImage from "@/components/home/homeImage";
import ServiceCard from "@/components/home/serviceCard";

export default function Home() {
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
              "Aenean quis dui sed sapien dignissim volutpat eu vel ex. Praesent tempor enim in augue gravida volutpat. In a metus odio. Pellentesque et pretium dolor. Cras ullamcorper urna nulla."
            }
            path={"/housing"}
          />
          <ServiceCard
            title={"Vie communautaire"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in libero magna. Praesent eget pellentesque lorem. Aenean quis dui sed sapien dignissim volutpat eu vel ex."
            }
            path={"/communal-life"}
          />
        </div>
        <div className={"flex flex-col space-y-10"}>
          <ServiceCard
            title={"Affaires"}
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
