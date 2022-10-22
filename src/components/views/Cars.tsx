// Next Tools
import Image from "next/image";

// Car Images
import opel from "../../../public/images/cars/opelMerviva/imageFour.jpeg";
import peugeot from "../../../public/images/cars/peugeot207/imageOne.jpeg";
import Button from "../ui/Button";

export default function Cars() {
  return (
    <section className="w-screen py-[100px] gap-[32px]" id="cars">
      <div className="flex flex-col items-start full-col gap-[12px] text-center text-darkGrey">
        <h1 className="text-3xl font-bold text-center">Voitures Disponibles</h1>
      </div>
      {/* Opel Meriva */}
      <div className="flex col-span-4 col-start-1 overflow-hidden duration-300 bg-white cursor-pointer md:col-span-4 sm:col-span-4 xs:col-span-4 rounded-xl hover:shadow-lg ">
        <div className="w-[200px] h-[200px]">
          <Image src={opel} alt="opel" className="w-[200px] h-[200px]" />
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
      <div className="flex col-span-4 overflow-hidden duration-300 bg-white shadow-sm cursor-pointer xs:col-start-1 sm:col-start-1 md:col-span-4 sm:col-span-4 xs:col-span-4 rounded-xl hover:shadow-lg ">
        <div className="w-[200px] h-[200px]">
          <Image src={peugeot} alt="opel" />
        </div>
        <div className="py-[16px] px-[32px] flex flex-col justify-between text-darkGrey">
          <div className="">
            <h1 className="text-2xl font-bold text-darkGrey">Peugeot 307</h1>
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
      <div className="col-span-4 flex flex-col items-center gap-[10px] justify-center mt-[25px] mb-[50px]">
        <h1 className="flex items-center gap-[10px] text-darkGrey">
          Besoin de plus d&apos;information ?
        </h1>
        <div className="flex flex-col gap-[12px] items-center">
          <h1 className="text-2xl font-bold xs:hidden sm:hidden text-darkGrey">
            Contactez-nous
          </h1>
          <a href="tel:0769368328">
            <span className=" text-xl font-bold flex items-center justify-center cursor-pointer hover:shadow-lg duration-300 bg-green hover:bg-lightGrey hover:text-green text-white px-[12px] py-[8px] rounded-xl hover:ring-4 hover:ring-green ">
              07 69 36 83 28
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
