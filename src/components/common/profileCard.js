import Image from "next/image";

export default function ProfileCard({ name, title, image }) {
  return (
    <div className="flex ml-1 mt-5 space-y-7 container">
      <Image src={image} alt={name} width={160} height={160} />
      <div className="flex flex-col ml-5 space-y-7">
        <h1 className="text-3xl text-left text-orange_1">{name}</h1>
        <h2 className="text-xl text-left text-green_1">{title}</h2>
      </div>
    </div>
  );
}
