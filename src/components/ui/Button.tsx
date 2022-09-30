// Interface
interface IButton {
  label: string;
}

export default function Button({ label }: IButton) {
  return (
    <button className="text-lg font-bold cursor-pointer hover:shadow-lg duration-300 bg-green text-white px-[12px] py-[8px] rounded-xl">
      {label}
    </button>
  );
}
