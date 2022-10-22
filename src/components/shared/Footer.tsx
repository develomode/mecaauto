// Next Tools
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[200px] w-screen bg-green">
      <section className="py-[0px] pt-[30px] bg-green">
        <div className="flex justify-between full-col">
          <h1 className="col-span-2 text-[32px] font-[800]">Meca Auto</h1>{" "}
          <div className="flex flex-col items-end text-white">
            <a href="#cars">
              <div className="flex items-center gap-[10px] hover:underline duration-200 cursor-pointer">
                <h1 className="font-bold text-[18px]">Voitures disponibles</h1>
              </div>
            </a>
            <a href="#services">
              <div className="flex items-center gap-[10px]  hover:underline duration-200 cursor-pointer">
                <h1 className="font-bold text-[18px]">Services proposés</h1>
              </div>
            </a>
          </div>
        </div>
        <p className="col-span-4 col-start-1 sm:col-span-2 xs:col-span-2 mb-[32px]">
          ”Spécialiste pour la réparation et l’entretien des voitures et
          utilitaires toutes marques„
        </p>

        <h5 className="full-col text-[12px] mb-[5px]">
          © copyright &nbsp; <b>Meca Auto </b> &nbsp;2022 - Développé par &nbsp;
          <Link href="https://www.instagram.com/dev.code_/">
            <a target="_blank">
              <b className="cursor-pointer">@DevCode </b>
            </a>
          </Link>{" "}
          &nbsp;
        </h5>
      </section>
    </div>
  );
}
