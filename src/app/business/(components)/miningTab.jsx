import { useTranslations } from "next-intl";

import ProfileCard from "@/components/common/profileCard";
import BusinessCard from "./businessCard";
import MiningMap from "./miningMap";

export default function MiningTab() {
  const t = useTranslations("business");

  return (
    <div className="md:py-4">
      <h2 className="text-xl font-bold mb-2 text-green_1">
        {t("label-mining")}
      </h2>
      <p>{t("mining-intro")}</p>
      <ProfileCard
        name="Ghislain Lévesque"
        role={t("contact-commissioner")}
        email="glevesque@cgl25.ca"
        phone="418-964-6275"
      />
      <h3 className="text-lg font-semibold text-blue_2 mt-2">
        Tata Steel Minerals Canada
      </h3>
      <a
        href="https://www.tatasteelcanada.com/"
        target="_blank"
        className="hover:underline hover:cursor-pointer text-orange_1"
      >
        tatasteelcanada.com
      </a>
      <h3 className="text-lg font-semibold text-blue_2 mt-2">Iron Bear</h3>
      <a
        href="https://www.cyclonemetals.au/iron-bear/overview/"
        target="_blank"
        className="hover:underline hover:cursor-pointer text-orange_1"
      >
        cyclonemetals.au/iron-bear/overview
      </a>
      <h2 className="text-xl font-bold my-2 text-green_1">{t("mining-map")}</h2>
      <div className="flex flex-grow h-[40rem] md:h-[60rem] w-full md:mb-7 z-0 rounded-2xl overflow-hidden">
        <MiningMap />
      </div>
    </div>
  );
}
