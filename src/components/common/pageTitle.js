export default function PageTitle({ title }) {
  return (
    <div className="flex flex-col container py-5 space-y-4">
      <h1 className="text-3xl text-left text-orange_1 justify-center font-bold">
        {title}
      </h1>
    </div>
  );
}
