import Image from "next/image";

export default function PartnerCard({ name, logoPath, link }) {
  return (
    <a href={link} target="_blank">
      <div className="flex flex-col h-fit text-center text-orange_1 font-semibold no-underline hover:underline">
        <div className="relative w-full h-36">
          <Image
            src={logoPath}
            alt={link}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div>{name}</div>
      </div>
    </a>
  );
}
