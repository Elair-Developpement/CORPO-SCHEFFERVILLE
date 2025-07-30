"use client";

import { useTranslations } from "next-intl";
import { useState, useTransition, useEffect } from "react";

import { createClient } from "@/lib/supabase/client";
import ProfileCard from "@/components/common/profileCard";

export default function CorporationMembersDetails() {
  const t = useTranslations("corporation");
  const [members, setMembers] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const supabase = await createClient();

      const { data: membersData, error: membersError } = await supabase
        .from("members")
        .select("*");

      if (membersError) {
        console.error("Erreur lors du chargement des membres:", membersError);
        return;
      }

      setMembers(membersData);
    });
  }, []);

  return (
    <div className="py-4 grid grid-cols-3 gap-2">
      <div>
        <h2 className="text-xl font-bold mb-2 text-green_1">
          {t("general-assembly")}
        </h2>
        <p>{t("general-assembly-text")}</p>
        {members
          .filter((member) => member.section === "assemblee")
          .map((member) => (
            <ProfileCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image || "/images/blank_person.png"}
            />
          ))}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2 text-green_1">
          {t("board-of-directors")}
        </h2>
        <p>{t("board-of-directors-text")}</p>
        {members
          .filter((member) => member.section === "conseil")
          .map((member) => (
            <ProfileCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image || "/images/blank_person.png"}
            />
          ))}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2 text-green_1">
          {t("general-management")}
        </h2>
        {members
          .filter((member) => member.section === "direction")
          .map((member) => (
            <ProfileCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image || "/images/blank_person.png"}
            />
          ))}
      </div>
    </div>
  );
}
