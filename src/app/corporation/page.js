import { useTranslations } from "next-intl";

import { Tabs, Tab } from "@/components/ui/tabs";
import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import CorporationDocumentsTable from "@/app/corporation/(components)/corporationDocumentsTable";
import CorporationMembersDetails from "@/app/corporation/(components)/corporationMembersDetails";

export default function Corporation() {
  const t = useTranslations("corporation");

  return (
    <main className={"container mx-auto min-h-[calc(100vh-249.27px)]"}>
      <PageTitleAndDescription
        title={t("corporation")}
        description={t("intro-text")}
      />
      <Tabs>
        <Tab label={t("members")} value="members">
          <CorporationMembersDetails />
        </Tab>
        <Tab label={t("documents")} value="documents">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              {t("documents")}
            </h2>
            <p className="text-gray-700">{t("documents-text")}</p>
            <CorporationDocumentsTable />
          </div>
        </Tab>
      </Tabs>
    </main>
  );
}
