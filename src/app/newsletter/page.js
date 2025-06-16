import { useTranslations } from "next-intl";

import Link from "next/link";

import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import NewslettersTable from "@/app/newsletter/(components)/newslettersTable";
import { buttonVariants } from "@/components/ui/button";

export default function Newsletter() {
  const t = useTranslations("newsletter");

  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex-col flex"}
    >
      <PageTitleAndDescription
        title={t("newsletter")}
        description={t("intro-text")}
      />

      <p className={"my-1"}>{t("download-text")}</p>
      <NewslettersTable />
    </main>
  );
}
