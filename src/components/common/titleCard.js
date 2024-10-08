import Link from "next/link";

export default function TitleCard({ title, description }) {
  return (
    <div className="flex flex-col items-start w-auto">
      <h1 className="text-3xl text-left text-orange_1 justify-center font-bold">
        {title}
      </h1>
      <p className="text-left">{description}</p>
    </div>
  );
}
