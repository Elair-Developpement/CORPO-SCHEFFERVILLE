"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { ExternalLink } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import ActivityListItem from "@/app/communal-life/(components)/activityListItem";

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
      className={
        "container mx-auto max-md:mt-[5rem] min-h-[calc(100vh-249.27px)] flex flex-col"
      }
    >
      <div className="m-2 mb-0">
        <PageTitleAndDescription
          title={t("communal-life-alt")}
          description={t("intro-text")}
        />
        <div className="flex max-md:flex-col gap-1">
          <span>{t("intro-text-follow-up")}</span>
          <ExternalLink />
        </div>
      </div>
      <div className={"flex flex-col pt-3 md:py-5"}>
        <div className={"flex bg-orange_2 p-3 md:p-2 text-white"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>{t("ongoing")}</div>
            <div className={"flex-col text-lg space-y-2 text-right"}>
              {projects
                .filter((project) => project.category === "en-cours")
                .map((activity) => (
                  <ActivityListItem key={activity.id} activity={activity} />
                ))}
            </div>
          </div>
        </div>
        <div className={"flex p-3 md:p-2"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>{t("gear")}</div>
            <div className={"flex-col text-lg space-y-2 text-right"}>
              {projects
                .filter(
                  (project) => project.category === "equipements-disponibles"
                )
                .map((activity) => (
                  <ActivityListItem key={activity.id} activity={activity} />
                ))}
            </div>
          </div>
        </div>
        <div className={"flex bg-orange_2 p-3 md:p-2 text-white"}>
          <div className={"flex w-full justify-between"}>
            <div className={"flex text-xl font-bold"}>
              {t("in-development")}
            </div>
            <div className={"flex-col text-lg space-y-2 text-right"}>
              {projects
                .filter((project) => project.category === "en-developpement")
                .map((activity) => (
                  <ActivityListItem key={activity.id} activity={activity} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
