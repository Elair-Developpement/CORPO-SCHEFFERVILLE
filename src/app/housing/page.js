"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

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
  const [isIndustrialMap, setIsIndustrialMap] = useState(false);

  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex-col flex"}
    >
      <PageTitleAndDescription
        title={t("housing-alt")}
        description={t("page-text")}
      />
      <div className="flex items-center space-x-2">
        <Label htmlFor="map-toggle" className="text-lg">
          {t("central-sector")}
        </Label>
        <Switch
          id="map-toggle"
          checked={isIndustrialMap}
          onCheckedChange={(checked) => setIsIndustrialMap(checked)}
        />
        <Label htmlFor="map-toggle" className="text-lg">
          {t("industrial-sector")}
        </Label>
      </div>
      <div className={"flex flex-grow max-h-vh w-full mb-7"}>
        {!isIndustrialMap && <CentralLeafletMap />}
        {isIndustrialMap && <IndustrialLeafletMap />}
      </div>
    </main>
  );
}
