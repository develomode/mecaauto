// Next Tools
import Image from "next/image";

// Image
import tire from "../../../public/images/tire.png";

export default function Separator() {
  return (
    <section className="w-screen bg-green flex items-center justify-center h-[150px] py-[32px]">
      <div className="flex sm:flex-col xs:flex-col items-center col-span-12 col-start-1 gap-[12px] text-center text-white sm:col-span-12"></div>
    </section>
  );
}
