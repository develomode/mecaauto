// Eva Icon
import { Icon } from "@iconify/react";
import phoneFill from "@iconify/icons-eva/phone-fill";
import emailFill from "@iconify/icons-eva/email-fill";
import navigation2Fill from "@iconify/icons-eva/navigation-2-fill";

export default function Contact() {
  return (
    <section className="text-darkGrey py-[100px]" id="contact">
      <div className="full-col border-[5px] bg-white border-green rounded-2xl p-[32px] flex flex-col items-center justify-center text-center">
        <h1 className="text-[32px] font-[800]">
          Contact - <span className="text-green">Meca Auto</span>
        </h1>
        <p className="mb-[50px]">
          Nous sommes à votre disposition pour toute autre information
          suplémentaire
        </p>
        <div className="flex xs:flex-col gap-[100px] sm:gap-[48px] sm:flex-col xm:flex-col items-center justify-center ">
          <a href="tel:0769368328">
            <div className="flex flex-col items-center duration-300 cursor-pointer jsutify-center hover:text-green  hover:rotate-[-2deg] gap-[2px] hover:gap-[5px]">
              <Icon icon={phoneFill} className="w-[50px] h-[50px]" />
              <h1 className="font-extrabold">Appelez-nous</h1>
              <h1>07 69 36 83 28</h1>
            </div>
          </a>
          <a href="#adress">
            <div className="flex flex-col items-center duration-300 cursor-pointer jsutify-center hover:text-green  gap-[2px] hover:gap-[5px]">
              <Icon icon={navigation2Fill} className="w-[50px] h-[50px]" />
              <h1 className="font-extrabold">Rendez-vous au garage</h1>
              <h1 className="">19 RUE JEAN DE LA FONTAINE</h1>
              <h1 className="">REBAIS 77510</h1>
            </div>
          </a>
          <a href="mailto:mecarebais@gmail.com">
            <div className="flex flex-col items-center duration-300 cursor-pointer jsutify-center hover:text-green hover:rotate-[2deg]  gap-[2px] hover:gap-[5px]">
              <Icon icon={emailFill} className="w-[50px] h-[50px]" />
              <h1 className="font-extrabold">Écrivez-nous</h1>
              <h1 className="">mecarebais@gmail.com</h1>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
