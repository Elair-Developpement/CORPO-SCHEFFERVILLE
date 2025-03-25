import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ContactPopover({ triggerText }) {
  return (
    <Popover>
      <PopoverTrigger href="/contact" className="hover:underline">
        {triggerText}
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col container space-y-2">
          <h1 className="text-3xl text-left text-orange_1 justify-center font-bold">
            Nous Joindre
          </h1>
          <p className="text-left">
            Pour répondre à vos questions ou pour avoir de l’information sur les
            projets en cours. Écrivez-nous à l’adresse électronique : <br />
            <a
              href={`mailto:cds@schefferville.ca`}
              className={"hover:underline text-orange_2"}
            >
              cds@schefferville.ca
            </a>
            <br />
            ou téléphonez-nous au :
            <br />
            <a
              href={"tel:418-297-5747"}
              className={"hover:underline text-orange_2"}
            >
              {" "}
              418-297-5747.
            </a>
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
