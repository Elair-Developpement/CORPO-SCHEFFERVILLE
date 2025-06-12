import { useTranslations } from "next-intl";

import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import { Tabs, Tab } from "@/components/ui/tabs";
import ContactPopover from "@/components/dialog/contactPopover";
import { Button } from "@/components/ui/button";

export default function Business() {
  const t = useTranslations("business");
  const c = useTranslations("common");

  return (
    <main className={"container mx-auto min-h-[calc(100vh-249.27px)]"}>
      <PageTitleAndDescription
        title={t("business")}
        description={t("intro-text")}
      />
      <Tabs>
        <Tab label={t("label-project")} value="projects">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              {t("label-project")}
            </h2>
            <p className="text-gray-700">{t("project-text")}</p>
            <br />
            <span
              className={"font-bold text-orange_2 text-xl flex justify-center"}
            >
              {" "}
              <ContactPopover triggerText={c("contact-us")} />
            </span>
          </div>
        </Tab>
        <Tab label={t("label-finance")} value="finance">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              {t("label-finance")}
            </h2>
            {/* TODO: Texte manquant */}
            <p className="text-gray-700">{c("to-do")}</p>
          </div>
        </Tab>
        <Tab label={t("label-mining")} value="mining">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              {t("label-mining")}
            </h2>
            {/* TODO: Texte manquant */}
            <p className="text-gray-700">{c("to-do")}</p>
          </div>
        </Tab>
        <Tab label={t("label-directory")} value="directory">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              {t("label-directory")}
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum.
            </p>
          </div>
        </Tab>
      </Tabs>
    </main>
  );
}
