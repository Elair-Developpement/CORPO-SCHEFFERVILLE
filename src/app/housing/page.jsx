"use client";

import dynamic from "next/dynamic";

import { useTranslations } from "next-intl";
import { useState, useEffect, useTransition } from "react";

import {createClient} from "@/lib/supabase/client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";

const CentralLeafletMap = dynamic(
  () => import("@/components/map/centralLeafletMap"),
  {
    ssr: false,
  },
);

const IndustrialLeafletMap = dynamic(
  () => import("@/components/map/industrialLeafletMap"),
  {
    ssr: false,
  },
);

export default function Housing() {
  const t = useTranslations("housing");
  const [isResidentialMap, setIsResidentialMap] = useState(true);
  const [centralProperties, setCentralProperties] = useState([]);
  const [industrialProperties, setIndustrialProperties] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const supabase = createClient();

    startTransition(async () => {
      const { data: residentialData, error: residentialError } = await supabase.from("land").select("*").eq("residential", true);
      const {data: industrialData, error: industrialError} = await supabase.from("land").select("*").eq("residential", false);

      // TODO: Ajouter error handling

      if (residentialData) {
        setCentralProperties(residentialData);
      }

      if (industrialData) {
        setIndustrialProperties(industrialData);
      }
    })
  }, [])

  return (
    <main
      className={"block max-md:max-w-screen md:container md:mx-auto min-h-[calc(100vh-249.27px)]"}
    >
      <PageTitleAndDescription
        title={t("housing-alt")}
        description={t("page-text")}
      />
      <div className="flex items-center space-x-2">
        <Label htmlFor="map-toggle" className="text-lg font-semibold text-green_1">
          {t("industrial-sector")}
        </Label>
        <Switch
          id="map-toggle"
          checked={isResidentialMap}
          onCheckedChange={(checked) => setIsResidentialMap(checked)}
          className="data-[state=checked]:bg-orange_1 data-[state=unchecked]:bg-green_1"
        />
        <Label htmlFor="map-toggle" className="text-lg font-semibold text-orange_1">
          {t("central-sector")}
        </Label>
      </div>
      <div className={"flex flex-grow h-[60rem] w-full mb-7 z-0 rounded-2xl overflow-hidden"}>
        {!isPending && (
            isResidentialMap ? <CentralLeafletMap centralPropertiesProp={centralProperties} /> : <IndustrialLeafletMap industrialPropertiesProp={industrialProperties} />
        )}
      </div>
    </main>
  );
}
