import Link from "next/link";

export default function ServiceCard({ title, description, path }) {
  return (
    <div className="flex flex-col items-start space-y-7 max-w-3xl">
      <h1 className="text-3xl text-left">{title}</h1>
      <p className="text-left">{description}</p>
      <button className="self-center bg-black hover:bg-white hover:text-black hover:border-black text-white font-bold py-3 px-5 border-2 rounded">
        <Link href={path}>En savoir plus</Link>
      </button>
    </div>
  );
}
