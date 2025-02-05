import TitleCard from "@/components/common/titleCard";

export default function Contact() {
  return (
    <main
      className={"container mx-auto min-h-[calc(100vh-249.27px)] flex-col flex"}
    >
      <div className="flex flex-col container py-5 space-y-4">
        <h1 className="text-3xl text-left text-orange_1 justify-center font-bold">
          Nous Joindre
        </h1>
        <p className="text-left">
          {" "}
          Pour répondre à vos questions ou pour avoir de l’information sur les
          projets en cours. Écrivez-nous à l’adresse électronique
          <a
            href={`mailto:cds@schefferville.ca`}
            className={"hover:underline hover:text-blue-500"}
          >
            cds@schefferville.ca
          </a>{" "}
          ou téléphonez-nous au 418-297-5747.
        </p>
      </div>
    </main>
  );
}
