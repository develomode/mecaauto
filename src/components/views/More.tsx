import React from "react";

export default function More() {
  return (
    <section>
      <div className="col-span-12 flex flex-col xs:items-center sm:items-center items-end gap-[10px] justify-center mt-[25px] mb-[50px]">
        <h1 className="flex items-center gap-[10px] text-darkGrey">
          Besoin de plus d&apos;information ?
        </h1>
        <div className="flex gap-[12px] items-center">
          <h1 className="text-2xl font-bold xs:hidden sm:hidden text-darkGrey">
            Contactez-nous au :
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
