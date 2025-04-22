import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/admin/signOutButton";
import PageTitle from "@/components/common/pageTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UploadNewslettersDialog from "@/components/admin/formDialog/uploadNewslettersDialog";
import NewslettersTable from "@/components/admin/tables/newslettersTable";
import ProjectsTable from "@/components/admin/tables/projectsTable";
import CorporationMembersTable from "@/components/admin/tables/corporationMembersTable";
import CorporationDocumentsTable from "@/components/admin/tables/corporationDocumentsTable";
import UploadCorporationDocumentsDialog from "@/components/admin/formDialog/uploadCorporationDocumentsDialog";

export default async function Admin() {
  const supabase = await createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    redirect("/login");
  }

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
            <UploadNewslettersDialog />
            <NewslettersTable />
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
            <ProjectsTable />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>La corporation</AccordionTrigger>
          <AccordionContent>
            <p className={"ml-1 text-orange_2 font-bold text-2xl"}>Membres</p>
            <CorporationMembersTable />
            <p className={"ml-1 text-orange_2 font-bold text-2xl"}>
              Documents corporatifs
            </p>
            <UploadCorporationDocumentsDialog />
            <CorporationDocumentsTable />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
