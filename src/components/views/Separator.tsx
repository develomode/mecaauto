// Next Tools
import Image from "next/image";

// Image
import tire from "../../../public/images/tire.png";

export default function Separator() {
  return (
    <section className="w-screen bg-green flex items-center justify-center h-[150px] py-0">
      <div className="col-span-12 col-start-1 text-center text-white sm:col-span-12">
        <h1 className="text-3xl font-bold text-center">
          Les Services Meca Auto
        </h1>
        <h2>Voitures et utilitaires toutes marques</h2>
      </div>
    </section>
  );
}
