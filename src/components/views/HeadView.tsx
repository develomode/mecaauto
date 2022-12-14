// Next Tools
import Image from "next/image";

// Motion
import { motion } from "framer-motion";

// Images
import avatacar from "../../../public/images/avatacar.svg";

// Eva Icons
import { Icon } from "@iconify/react";
import carIcon from "@iconify/icons-bxs/car";
import toolsWrench from "@iconify/icons-material-symbols/tools-wrench";
import navigation2Fill from "@iconify/icons-eva/navigation-2-fill";

export default function HeadView() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-cover bg-mechanic gap-[24px]">
      <motion.div
        animate={{ y: 50, opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 2 }}
        className="flex flex-col items-center py-[32px] px-[16px] shadow-xl full-col bg-green rounded-xl relative h-[200px] w-full"
      >
        {/* Avatacar */}
        <div className="absolute w-[200px] xs:w-[100px] sm:w-[100px] md:w-[150px] h-[65px] xs:h-[40px] sm:h-[40px] md:h-[50px] sm:right-[20px] right-[40px] xs:top-[-35px]  sm:top-[-35px] top-[-40px] bg-transGrey p-[10px] rounded-xl shadow-md">
          <Image src={avatacar} alt="avatacar" />
        </div>
        <h1 className="text-[80px] xs:text-[38px] sm:text-[38px] md:text-[50px] text-white font-bold drop-shadow-md text-center uppercase">
          Garage Meca Auto
        </h1>
        <h2 className="text-2xl xs:text-[16px] sm:text-[16px] font-extrabold text-white drop-shadow-md text-center">
          REPARATION, ENTRETIEN, CARROSERIE
        </h2>
      </motion.div>
      <div className="flex items-start justify-between w-full xs:flex-col sm:flex-col">
        <div className="col-span-5 mt-[50px]">
          <div className="">
            <p className="text-lg font-normal text-white cursor-default drop-shadow-sm">
              &rdquo;Meca Auto spécialiste pour la réparation et l’entretien
              <br className="xs:hidden sm:hidden" />
              des voitures et utilitaires toutes marques&bdquo;
            </p>
            <br />
            <h2 className="text-white cursor-default">
              Contactez-nous :{" "}
              <a href="tel:0769368328">
                <span className="text-xl font-normal duration-300 cursor-pointer hover:font-extrabold text-green">
                  07 69 36 83 28
                </span>
              </a>
            </h2>
          </div>
        </div>
        <div className="col-span-3 col-end-13 md:col-start-1 text-white mt-[50px]">
          <a href="#cars">
            <div className="flex items-center gap-[10px] hover:text-green duration-200 cursor-pointer">
              <Icon icon={carIcon} className="w-[20px] h-[20px]" />
              <h1 className="font-bold text-[18px]">Voitures disponibles</h1>
            </div>
          </a>
          <a href="#services">
            <div className="flex items-center gap-[10px]  hover:text-green duration-200 cursor-pointer">
              <Icon icon={toolsWrench} className="w-[20px] h-[20px]" />
              <h1 className="font-bold text-[18px]">Services proposés</h1>
            </div>
          </a>
          <a href="#adress">
            <div className="flex items-center gap-[10px]  hover:text-green duration-200 cursor-pointer">
              <Icon icon={navigation2Fill} className="w-[20px] h-[20px]" />
              <h1 className="font-bold text-[18px]">Rebais 77510</h1>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
