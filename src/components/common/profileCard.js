import Image from "next/image";

export default function ProfileCard({ name, role, image, email, phone }) {
  return (
    <div className="flex mx-1 mt-3 md:mt-5 container">
      <Image
        src={image ? image : "/images/blank_person.png"}
        alt={name}
        width={80}
        height={80}
      />
      <div className="flex flex-col ml-5">
        <h1 className="text-xl text-left text-orange_1">{name}</h1>
        <h2 className="text-l text-left text-green_1">{role}</h2>
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-l text-left text-orange_2 hover:underline"
          >
            {email}
          </a>
        )}
        {phone && (
          <h3
            href={`tel:${phone}`}
            className="text-l text-left text-orange_2 hover:underline"
          >
            {phone}
          </h3>
        )}
      </div>
    </div>
  );
}
