import { useTranslations } from "next-intl";

import SonnerNewsletterService from "@/components/home/sonnerNewsletterService";
import HomeImage from "@/components/home/homeImage";
import ServiceCard from "@/components/home/serviceCard";

export default function Home() {
  const t = useTranslations("home");
  const h = useTranslations("housing");
  const b = useTranslations("business");
  const l = useTranslations("communal-life");
  const c = useTranslations("corporation");

  return (
    <main>
      <SonnerNewsletterService />
      <HomeImage missionTitle={t("mission")} missionText={t("mission-text")} />
        <div className="flex flex-col bg-blue_1 w-full min-h-[5rem] text-white text-xl text-center justify-center items-center p-2">
            <div>
                {t("70-intro")}
            </div>
            <a href="https://www.schefferville70.ca" target="_blank" className="underline font-bold hover:cursor-pointer">
                www.schefferville70.ca
            </a>
        </div>
      <div
        className={
          "pb-20 pt-16 px-16 mx-auto flex flex-row justify-center space-x-11"
        }
      >
        <div className={"flex flex-col space-y-10"}>
          <ServiceCard
            title={h("housing")}
            description={h("intro-text")}
            path={"/housing"}
          />
          <ServiceCard
            title={l("communal-life")}
            description={l("intro-text")}
            path={"/communal-life"}
          />
        </div>
        <div className={"flex flex-col space-y-10"}>
          <ServiceCard
            title={b("business")}
            description={b("intro-text")}
            path={"/business"}
          />
          <ServiceCard
            title={c("corporation")}
            description={c("intro-text")}
            path={"/corporation"}
          />
        </div>
      </div>
    </main>
  );
}
