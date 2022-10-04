// React Tools
import { useState } from "react";

// Next Tools
import Image from "next/image";

// Services Data
import servicesData from "../../static/servicesData";

// Ui Components
import ServCard from "../ui/ServCard";

// Images
import entretien from "../../../public/images/entretien.jpg";
import mecanique from "../../../public/images/mecanique.jpeg";
import diagnostic from "../../../public/images/diagnostic.jpg";
import carosserie from "../../../public/images/carosserie.jpg";
import parebrise from "../../../public/images/parebrise.jpeg";
import pneus from "../../../public/images/pneus.jpg";

export default function Services() {
  const [more, setMore] = useState(false);
  return (
    <section
      className="bg-transGrey h-full w-screen grid grid-cols-12 gap-[24px] xxl:px-[768px] xl:px-[256px] lg:px-[128px] md:px-[64px] sm:px-[40px] xs:px-[24px] pt-[70px] relative  text-darkGrey"
      id="services"
    >
      <div className="flex sm:flex-col xs:flex-col items-center col-span-12 col-start-1 gap-[12px] text-center text-darkGrey sm:col-span-12">
        <h1 className="text-3xl font-bold text-center">Nos Services</h1>
        <i>
          <h2 className="text-2xl">simples, rapides et efficaces !</h2>
        </i>
      </div>
      {/* Services */}
      <div className="col-span-12 bg-white shadow-sm rounded-lg px-[50px] flex items-center justify-center gap-[48px] overflow-scroll">
        {/* Entretien */}
        <div className=" w-[300px] h-[400px] flex flex-col items-center justify-center gap-[10px] xs:ml-[1200px] sm:ml-[1100px] md:ml-[900px] ml-[400px]">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-[999px] shadow-lg">
            <div className="w-full h-full scale-150 rounded-[999px] overflow-hidden flex items-center justify-center shadow-lg ml-[50px]">
              <Image src={entretien} alt="entretien" className="scale-125" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">Entretien</h1>
          <div className="text-green">
            <h2>Vidange</h2>
            <h2>Filtres</h2>
            <h2>Révision</h2>
          </div>
          {/* <h2 className=" cursor-pointer hover:underline  text-[14px]">
            Voir plus ...
          </h2> */}
        </div>
        {/* Mecanique */}
        <div className=" w-[300px] h-[400px] flex flex-col items-center justify-center gap-[10px]">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-[999px] shadow-lg">
            <div className="w-full h-full scale-150 rounded-[999px] overflow-hidden flex items-center justify-center shadow-lg ml-[50px]">
              <Image src={mecanique} alt="entretien" className="scale-125" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">Mécanique</h1>
          <div className="text-green">
            <h2>Distribution</h2>
            <h2>Embreyage</h2>
            <h2>Direction</h2>
          </div>
        </div>
        {/* Diagnositique */}
        <div className=" w-[300px] h-[400px] flex flex-col items-center justify-center gap-[10px]">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-[999px] shadow-lg">
            <div className="w-full h-full scale-150 rounded-[999px] overflow-hidden flex items-center justify-center shadow-lg ml-[50px]">
              <Image src={diagnostic} alt="entretien" className="scale-125" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">Diagnostic</h1>
          <div className="text-green">
            <h2>Vidange</h2>
            <h2>Révision voiture</h2>
            <h2>Freinage + Suspensions</h2>
          </div>
        </div>
        {/* Carrosserie */}
        <div className=" w-[300px] h-[400px] flex flex-col items-center justify-center gap-[10px]">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-[999px] shadow-lg">
            <div className="w-full h-full scale-150 rounded-[999px] overflow-hidden flex items-center justify-center shadow-lg mr-[50px]">
              <Image src={carosserie} alt="entretien" className="scale-125" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">Carrosserie</h1>
          <div className="text-green">
            <h2>Peinture PRO</h2>
            <h2>Réparation</h2>
          </div>
        </div>
        {/* Pare Brise */}
        <div className=" w-[300px] h-[400px] flex flex-col items-center justify-center gap-[10px]">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-[999px] shadow-lg">
            <div className="w-full h-full scale-150 rounded-[999px] overflow-hidden flex items-center justify-center shadow-lg mr-[50px]">
              <Image src={parebrise} alt="entretien" className="scale-125" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">Pare Brise</h1>
          <div className="text-green">
            <h2>Vidange + filtre à huile</h2>
            <h2>Révision voiture</h2>
            <h2>Freinage + Suspensions</h2>
          </div>
        </div>
        {/* Pneus */}
        <div className=" w-[300px] h-[400px] flex flex-col items-center justify-center gap-[10px]">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-[999px] shadow-lg">
            <div className="w-full h-full scale-150 rounded-[999px] overflow-hidden flex items-center justify-center shadow-lg mr-[50px]">
              <Image src={pneus} alt="entretien" className="scale-125" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">Pneus</h1>
          <div className="text-green">
            <h2>Équilibrage</h2>
            <h2>Parallélisme</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
