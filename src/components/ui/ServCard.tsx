// Next Tools
import Image from "next/image";

// Image
import entretien from "../../../public/images/entretien.jpg";

// Interface
interface IServ {
  service: string;
  key: number;
}

export default function ServCard({ service, key }: IServ) {
  return (
    <div className=" w-[300px] h-[300px] flex flex-col items-center justify-center gap-[10px]">
      <div className="w-[200px] h-[200px] overflow-hidden rounded-[999px] shadow-lg">
        <div className="w-full h-full scale-150 rounded-[999px] overflow-hidden flex items-center justify-center shadow-lg">
          <Image src={entretien} alt="entretien" className="scale-125" />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center">{service}</h1>
    </div>
  );
}
