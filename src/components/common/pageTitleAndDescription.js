export default function PageTitleAndDescription({ title, description }) {
  return (
    <div className="flex flex-col container md:py-5 space-y-2 md:space-y-4">
      <h1 className="text-3xl text-left text-orange_1 justify-center font-bold">
        {title}
      </h1>
      <div className="text-left">{description}</div>
    </div>
  );
}
