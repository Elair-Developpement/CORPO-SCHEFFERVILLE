import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import { Tabs, Tab } from "@/components/utils/tabs";
import ContactPopover from "@/components/dialog/contactPopover";

export default function Business() {
  return (
    <main className={"container mx-auto min-h-[calc(100vh-249.27px)]"}>
      <PageTitleAndDescription
        title={"Développement économique"}
        description={
          "Vous avez en tête un projet d'entreprise ? vous souhaitez démarrer une entreprise\n" +
          "d'économie sociale, connaître les ressources et les services disponibles à\n" +
          "Schefferville ? En apprendre plus sur les projets miniers ?\n" +
          "Vous êtes à la recherche d'un site pour votre entreprise ? Nous vous invitons à\n" +
          "consulter cette section ou à nous contacter."
        }
      />
      <Tabs>
        <Tab label="Démarrer un projet ou une entreprise">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              Démarrer un projet ou une entreprise
            </h2>
            <p className="text-gray-700">
              Vous souhaitez démarrer un projet, une activité ou mettre en place
              une initiative,{" "}
              <ContactPopover
                triggerText={"faites-nous en part"}
                classname={"hover:underline text-orange_2"}
              />
              . Notre longue expérience en gestion et développement de projet
              conjugué à un réseau de contact et des partenaires pour le
              financement, vous aidera à atteindre vos objectifs. Nous vous
              précisons que les échanges demeureront confidentiels. Si vous être
              à l’étape de préfaisabilité, envoyez-nous le sommaire du projet.
              NOus en discuterons. Votre projet n’est pas encore démarré mais
              votre plan d’affaires est monté, soumettez-le-nous afin de le
              valider et s’assurer d’obtenir les aides financières selon les
              règles établis par les partenaires financiers. N’oubliez pas que
              lorsque qu’un projet est démarré, il est difficile de demander du
              financement.
            </p>
          </div>
        </Tab>
        <Tab label="Financement et partenaires">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              Financement et partenaires
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
        <Tab label="Projets miniers">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              Projets miniers
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
        <Tab label="Entreprises et ressources">
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-green_1">
              Entreprises et ressources
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
