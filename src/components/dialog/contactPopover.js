import { useTranslations } from "next-intl";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ContactPopover({ triggerText }) {
  const t = useTranslations("contact-popover");
  const u = useTranslations("running");

  return (
    <Popover>
      <PopoverTrigger href="/contact" className="hover:underline">
        {triggerText}
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col container space-y-2">
          <h1 className="text-3xl text-left text-orange_1 justify-center font-bold">
            {u("contact-us")}
          </h1>
          <p className="text-left">
            {t("text-part-1")}
            <br />
            <a
              target={"_blank"}
              href={`mailto:cds@schefferville.ca`}
              className={"hover:underline text-orange_2"}
            >
              cds@schefferville.ca
            </a>
            <br />
            {t("text-part-2")}
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
