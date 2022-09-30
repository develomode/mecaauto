// React Tools
import { useState } from "react";

// Ui component
import Button from "./Button";

export default function CarCard() {
  return (
    <div className="bg-white flex flex-col items-center w-[250px] h-fit text-darkGrey px-[20px] py-[12px] rounded-lg hover:shadow-md duration-100 ">
      <div className="bg-lightGrey w-[95%] rounded-md h-[200px] mb-[7px] flex items-center justify-center">
        Image
      </div>
      <div className=" flex flex-col duration-300">
        <h2 className="mb-[20px]"> Marque de la voiture</h2>
        <Button label="Voir Plus" />
      </div>
    </div>
  );
}
