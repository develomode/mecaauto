// Next Tools
import Image from "next/image";

// Images
import garage from "../../../public/images/garage.jpeg";

// Eva Icon
import { Icon } from "@iconify/react";
import navigation2Fill from "@iconify/icons-eva/navigation-2-fill";

export default function Adress() {
  return (
    <section
      className="bg-green py-[50px] relative overflow-hidden border-y-[5px] border-white shadow-xl"
      id="adress"
    >
      <div className="absolute sm:right-[-299px] md:right-[-399px] right-[-900px] h-screen w-screen">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute left-[-300px] ">
            <Image src={garage} alt="garage" />
          </div>
        </div>
      </div>
      <div className="absolute sm:right-[-299px] md:right-[-399px]  right-[-900px] h-screen w-screen z-20 gradient">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute left-[-300px] ">
            <h1>test</h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-[18px] full-col z-30 xs:text-center sm:text-center xm:text-center">
        <h1 className="text-[32px] xs:text-[24px] sm:text-[24px] font-[800] xs:hidden sm:hidden">
          Adresse
        </h1>
        <h1 className="text-[16px] mt-[5px] font-[800]">
          19 RUE JEAN DE LA FONTAINE - REBAIS 77510
        </h1>
      </div>
      <div className="full-col my-[25px]  gap-[48px] flex overflow-scroll justify-start z-30">
        <div className="flex gap-[24px]">
          <div className="text-center w-[100px]">
            <h1 className="text-[24px] font-extrabold">Lundi</h1>
            <h2>8h30 - 18h</h2>
          </div>
          <div className="text-center w-[100px]">
            <h1 className="text-[24px] font-extrabold">Mardi</h1>
            <h2>8h30 - 18h</h2>
          </div>
          <div className="text-center w-[100px]">
            <h1 className="text-[24px] font-extrabold">Mercredi</h1>
            <h2>8h30 - 18h</h2>
          </div>
          <div className="text-center w-[100px]">
            <h1 className="text-[24px] font-extrabold">Jeudi</h1>
            <h2>8h30 - 18h</h2>
          </div>
          <div className="text-center w-[100px]">
            <h1 className="text-[24px] font-extrabold">Vendredi</h1>
            <h2>8h30 - 18h</h2>
          </div>
        </div>
      </div>
      <div className="z-30 col-span-11 xs:col-span-4 sm:col-span-4  md:col-span-8 col-start-1 overflow-hidden duration-300 bg-black shadow-2xl rounded-r-2xl border-white border-[5px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3822488926685!2d3.238243815569418!3d48.850920909186684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8c639e00e97af%3A0xb094ab78994eba40!2s19%20Av.%20Jean%20de%20la%20Fontaine%2C%2077510%20Rebais%2C%20France!5e0!3m2!1sfr!2sro!4v1663936835815!5m2!1sfr!2sro"
          width="1800"
          height="450"
          loading="lazy"
          className="duration-300 rounded-r-2xl opacity-70 hover:opacity-100 xs:opacity-100 sm:opacity-100"
        ></iframe>
      </div>
    </section>
  );
}
