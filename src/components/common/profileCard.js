import Image from "next/image";

export default function ProfileCard({ name, role, image }) {
  return (
    <div className="flex mx-1 mt-5 space-y-4 container">
      <Image src={image} alt={name} width={80} height={80} />
      <div className="flex flex-col ml-5">
        <h1 className="text-xl text-left text-orange_1">{name}</h1>
        <h2 className="text-l text-left text-green_1">{role}</h2>
      </div>
    </div>
  );
}
