// Interface
interface IServ {
  name: string;
}

interface ICardBtn {
  label: IServ;
}

export default function CardBtn({ label }: ICardBtn) {
  return (
    <div className="px-[34px] rounded-md hover:border-b-4 hover:border-green hover:shadow-md hover:text-xl hover:w-[150px text-lg sm:text-2xl font-bold duration-300 text-darkGrey flex items-center justify-center bg-white h-[70px] sm:h-[140px] md:h-[100px] cursor-pointer">
      <h1>{label.name}</h1>
    </div>
  );
}
