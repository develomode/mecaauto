// Next Tools
import Image from "next/image";

// Car Images
import opel from "../../../public/images/cars/opelMerviva/imageFour.jpeg";
import peugeot from "../../../public/images/cars/peugeot207/imageTwo.jpeg";
import Button from "../ui/Button";

export default function Cars() {
  return (
    <section className="w-screen pb-[100px] gap-[32px]" id="cars">
      <div className="flex flex-col items-start full-col gap-[12px] text-center text-darkGrey">
        <h1 className="text-3xl font-bold text-center">Voitures Disponibles</h1>
      </div>
      {/* Opel Meriva */}
      <div className="flex col-span-6 col-start-1 overflow-hidden duration-300 bg-white cursor-pointer md:col-span-4 sm:col-span-4 xs:col-span-4 rounded-xl hover:shadow-lg ">
        <div className="w-[200px] h-[200px] overflow-hidden">
          <Image src={opel} alt="opel" />
        </div>
        <div className="py-[16px] px-[32px] flex flex-col justify-between text-darkGrey">
          <div className="">
            <h1 className="text-2xl font-bold text-darkGrey">Opel Meriva</h1>
            <h2>essence</h2>
            <h2 className="text-xl">2990€</h2>
            <br />
          </div>
          <div className=" w-full flex gap-[24px]">
            <a href="#contact">
              <Button label="Je suis intéressé" />
            </a>
          </div>
        </div>
      </div>
      {/* Peugeot 207 */}
      <div className="flex col-span-6 overflow-hidden duration-300 bg-white shadow-sm cursor-pointer xs:col-start-1 sm:col-start-1 md:col-span-4 sm:col-span-4 xs:col-span-4 rounded-xl hover:shadow-lg ">
        <div className="w-[200px] h-[200px] overflow-hidden">
          <Image src={peugeot} alt="opel" />
        </div>
        <div className="py-[16px] px-[32px] flex flex-col justify-between text-darkGrey">
          <div className="">
            <h1 className="text-2xl font-bold text-darkGrey">
              Peugeot 307 Phase 2
            </h1>
            <h2>essence</h2>
            <h2 className="text-xl">2990€</h2>
            <br />
          </div>
          <div className=" w-full flex gap-[24px]">
            <a href="#contact">
              <Button label="Je suis intéressé" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
