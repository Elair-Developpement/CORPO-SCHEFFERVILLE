import TitleCard from "@/components/common/titleCard";

export default function Contact() {
  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex-col flex"}
    >
      <TitleCard
        title={"Contactez-nous"}
        description={
          "Vous avez des questions? Vous souhaitez nous contacter? N'hésitez pas à nous\n" +
          "envoyer un message en utilisant le formulaire ci-dessous."
        }
      />
      <div className={"flex flex-grow max-h-full w-full"}></div>
    </main>
  );
}
