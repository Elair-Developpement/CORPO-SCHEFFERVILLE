"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";

import { createClient } from "@/lib/supabase/client";
import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";

export default function Communal_life() {
  const t = useTranslations("communal-life");
  const [projects, setProjects] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const supabase = await createClient();

      const { data: projectsData, error: projectsError } = await supabase
        .from("projects")
        .select("*");

      if (projectsError) {
        console.error(projectsError);
        return;
      }

      setProjects(projectsData);
    });
  }, []);

  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex flex-col"}
    >
      <PageTitleAndDescription
        title={t("communal-life-alt")}
        description={t("intro-text")}
      />
      <div className={"flex flex-col py-5"}>
        <div className={"flex bg-orange_2 p-2 text-white"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>{t("ongoing")}</div>
            <div className={"flex-col text-right"}>
              {projects
                .filter((project) => project.category === "en-cours")
                .map((activity) => (
                  <div key={activity.id}>{activity.name}</div>
                ))}
            </div>
          </div>
        </div>
        <div className={"flex p-2"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>{t("gear")}</div>
            <div className={"flex-col text-right"}>
              {projects
                .filter(
                  (project) => project.category === "equipements-disponibles",
                )
                .map((activity) => (
                  <div key={activity.id}>{activity.name}</div>
                ))}
            </div>
          </div>
        </div>
        <div className={"flex bg-orange_2 p-2 text-white"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>
              {t("in-development")}
            </div>
            <div className={"flex-col text-right"}>
              {projects
                .filter((project) => project.category === "en-developpement")
                .map((activity) => (
                  <div key={activity.id}>{activity.name}</div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
