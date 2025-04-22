import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import SignOutButton from "@/components/admin/signOutButton";
import PageTitle from "@/components/common/pageTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UploadCorporationDocumentsDialog from "@/components/admin/formDialog/uploadCorporationDocumentsDialog";

export default async function Admin() {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    redirect("/login");
  }

  const { data: members, error: membersError } = await supabase
    .from("members")
    .select("*")
    .order("section");

  const { data: projects, error: projectsError } = await supabase
    .from("projects")
    .select("*")
    .order("category");

  const { data: corpoDocsBucket, error: corpoDocsError } =
    await supabase.storage.from("corpo-documents").list();

  if (membersError || projectsError || corpoDocsError) {
    return <div>Error loading members data</div>;
  }

  const corpoDocs = corpoDocsBucket.map((doc) => ({
    name: doc.name,
    url: supabase.storage.from("corpo-documents").getPublicUrl(doc.name).data
      .publicUrl,
  }));

  return (
    <main className={"container mx-auto min-h-[calc(100vh-249.27px)]"}>
      <PageTitle title="Console administrateur" />
      <h1 className={"text-orange_2"}>
        Vous êtes connectés en tant que :{" "}
        <span className={"font-bold"}>{userData.user.email} </span>
      </h1>
      <SignOutButton />

      <p className={"mt-5 text-green_1 font-bold text-2xl"}>Réglages</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Général</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Infolettre</AccordionTrigger>
          <AccordionContent>
            <p className={"ml-1 text-orange_2 font-bold text-2xl"}>
              Documents d'infolettres
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Habitation</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Développement économique</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Vie communautaire & culturelle</AccordionTrigger>
          <AccordionContent>
            <p className={"ml-1 text-orange_2 font-bold text-2xl"}>
              Projets et équipements
            </p>
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left">Nom</th>
                  <th className="px-6 py-3 border-b text-left">Catégorie</th>
                  <th className="px-6 py-3 border-b text-left">Description</th>
                  <th className="px-6 py-3 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects?.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">{project.name}</td>
                    <td className="px-6 py-4 border-b">
                      {project.category === "en-cours" && "En cours"}
                      {project.category === "equipements-disponibles" &&
                        "Équipements disponibles"}
                      {project.category === "en-developpement" &&
                        "En développement"}
                    </td>
                    <td className="px-6 py-4 border-b">
                      {project.description}
                    </td>
                    <td className="px-6 py-4 border-b">
                      <button className="text-blue-600 hover:text-blue-800 mr-2">
                        Modifier
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>La corporation</AccordionTrigger>
          <AccordionContent>
            <p className={"ml-1 text-orange_2 font-bold text-2xl"}>Membres</p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 border-b text-left">Nom</th>
                    <th className="px-6 py-3 border-b text-left">Rôle</th>
                    <th className="px-6 py-3 border-b text-left">Section</th>
                    <th className="px-6 py-3 border-b text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 border-b">{member.name}</td>
                      <td className="px-6 py-4 border-b">{member.role}</td>
                      <td className="px-6 py-4 border-b">
                        {member.section === "assemblee" && "Assemblée générale"}
                        {member.section === "conseil" &&
                          "Conseil d'administration"}
                        {member.section === "direction" && "Direction générale"}
                      </td>
                      <td className="px-6 py-4 border-b">
                        <button className="text-blue-600 hover:text-blue-800 mr-2">
                          Modifier
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={"ml-1 text-orange_2 font-bold text-2xl"}>
              Documents corporatifs
            </p>
            <UploadCorporationDocumentsDialog />
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 border-b text-left">Nom</th>
                    <th className="px-6 py-3 border-b text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {corpoDocs.map((doc) => (
                    <tr key={doc.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4 border-b">{doc.name}</td>
                      <td className="px-6 py-4 border-b">
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Télécharger
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
