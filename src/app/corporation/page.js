"use server";

import { createClient } from "@/lib/supabase/server";
import { Tabs, Tab } from "@/components/ui/tabs";
import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import ProfileCard from "@/components/common/profileCard";
import CorporationDocumentsTable from "@/app/corporation/(components)/corporationDocumentsTable";

export default async function Corporation() {
  const supabase = await createClient();

  const { data: assemblee } = await supabase
    .from("members")
    .select("*")
    .eq("section", "assemblee");

  const { data: conseil } = await supabase
    .from("members")
    .select("*")
    .eq("section", "conseil");

  const { data: direction } = await supabase
    .from("members")
    .select("*")
    .eq("section", "direction");

  return (
    <main className={"container mx-auto min-h-[calc(100vh-249.27px)]"}>
      <PageTitleAndDescription
        title={"La corporation"}
        description={
          "La corporation de développement de Schefferville est un organisme sans but lucratif paramunicipal dont les membres sont nommés majoritairement par la Ville de Schefferville. Les nations innues de Matimekush-Lac-John et Kawawachichamak nomment également des représentants."
        }
      />
      <Tabs>
        <Tab label="Membres">
          <div className="py-4 grid grid-cols-3">
            <div>
              <h2 className="text-xl font-bold mb-2 text-green_1">
                Assemblée générale
              </h2>
              <p>
                L'assemblée des membres est constituée de représentants de la
                nation innu de Matimekush-Lac John, de la nation naskapie de
                Kawawachikamach et de la ville de Schefferville.
              </p>
              {assemblee.map((member) => (
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
                Conseil d'administration
              </h2>
              <p>
                Le conseil d'administration est composé de sept membres
                représentants des trois communautés. Trois sièges sont réservés
                pour chaque volet de développement.
              </p>
              {conseil.map((member) => (
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
                Direction générale
              </h2>
              {direction.map((member) => (
                <ProfileCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image || "/images/blank_person.png"}
                />
              ))}
            </div>
          </div>
        </Tab>
        <Tab label="Documents">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">Documents</h2>
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
            <CorporationDocumentsTable />
          </div>
        </Tab>
      </Tabs>
    </main>
  );
}
