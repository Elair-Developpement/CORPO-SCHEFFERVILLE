"use client";

import { useTranslations } from "next-intl";

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
      <HomeImage missionTitle={t("mission")} missionText={t("mission-text")} />
      <div
        className={
          "py-20 px-16 mx-auto flex flex-row justify-center space-x-11"
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
