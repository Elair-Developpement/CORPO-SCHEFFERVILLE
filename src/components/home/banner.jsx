export default function Banner({ text, bgColor }) {
  return (
    <div
      className={`flex flex-col ${bgColor} w-full min-h-[5rem] text-white text-xl text-center justify-center items-center p-2`}
    >
      {text}
    </div>
  );
}
