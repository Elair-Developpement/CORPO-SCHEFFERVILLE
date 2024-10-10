import { Tabs, Tab } from "@/components/utils/tabs";
import TitleCard from "@/components/common/titleCard";
import ProfileCard from "@/components/common/profileCard";

export default function Corporation() {
  return (
    <div className={"container mx-auto min-h-[calc(100vh-249.27px)]"}>
      <TitleCard
        title={"La corporation"}
        description={
          "La corporation de développement de Schefferville est un organisme sans but lucratif paramunicipal dont les membres sont nommés majoritairement par la Ville de Schefferville. Les nations innues de Matimekush-Lac-John et Kawawachichamak nomment également des représentants."
        }
      />
      <Tabs>
        <Tab label="Assemblée générale">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              Assemblée générale
            </h2>
            <ProfileCard
              title={"Rôle 1"}
              name={"Nom 1"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 2"}
              name={"Nom 2"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 3"}
              name={"Nom 3"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 4"}
              name={"Nom 4"}
              image={"/images/blank_person.png"}
            />
          </div>
        </Tab>
        <Tab label="Conseil d'administration">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              Conseil d'administration
            </h2>
            <ProfileCard
              title={"Rôle 1"}
              name={"Nom 1"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 2"}
              name={"Nom 2"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 3"}
              name={"Nom 3"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 4"}
              name={"Nom 4"}
              image={"/images/blank_person.png"}
            />
          </div>
        </Tab>
        <Tab label="Direction générale">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              Direction générale
            </h2>
            <ProfileCard
              title={"Rôle 1"}
              name={"Nom 1"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 2"}
              name={"Nom 2"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 3"}
              name={"Nom 3"}
              image={"/images/blank_person.png"}
            />
            <ProfileCard
              title={"Rôle 4"}
              name={"Nom 4"}
              image={"/images/blank_person.png"}
            />
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
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
