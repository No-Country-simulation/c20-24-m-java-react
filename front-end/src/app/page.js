import Button from "@/components/button/Button";
import HeaderLogo from "@/components/headerLogo/HeaderLogo";
import ImgMainStar from "@/components/imgMainStar/ImgMainStar";
import MainStart from "@/components/mainStart/MainStart";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-orange-50">
      <HeaderLogo />
      <MainStart />
      <div className="flex flex-wrap items-center justify-center p-5">
        <p className="m-1 text-2xl justify-stretch items-stretch text-center ">
          <span className="text-black text-2xl font-bold m-1 text-center ">
            Descubre y comparte
          </span>
          las mejores recetas caseras. !Únete a nuestra comunidad y empieza a
          cocinar con nosotros!
        </p>
      </div>

      <div className="flex justify-center items-center text-center space-x-10 mr-auto p-10">
        <Button className="w-72 h-14 mar bg-lime-600 rounded-xl hover:bg-lime-800 xl:h-10 ">
          <p className="text-black">Registrarse</p>
        </Button>
        <Button className="w-72 h-14 bg-violet-950 rounded-xl hover:bg-lime-800 xl:h-10">
          <p className="text-white">Inicio Sesion</p>
        </Button>
      </div>

        <div className="grid grid-cols-5 gap-2 justify-center items-center p-5   ">
          <img
            className="row-span-3 rounded-2xl"
            src="/img/cards-4.svg "
          />

          <img
            className="row-span-2 rounded-2xl"
            src="/img/cards-5.svg"
          />
          <img
            className=" rounded-2xl"
            src="/img/cards-3.svg"
          />

          <img
            className="row-span-2 rounded-2xl"
            src="/img/cards-2.svg"
          />

          <img
            className="row-span-3 rounded-2xl"
            src="/img/cards-5.svg"
          />

          <img
            className="row-span-4 rounded-2xl"
            src="/img/cards-4.svg"
          />

          <img
            className="row-span-4 rounded-2xl "
            src="/img/cards-2.svg"
          />

          <img
            className="row-span-5 rounded-2xl"
            src="/img/cards-3.svg"
          />

          <img
            className="row-span-7  rounded-2xl"
            src="/img/cards-1.svg"
          />

          <img
            className="row-span-7 rounded-2xl   "
            src="/img/cards-5.svg" 
            />
      </div>
    </main>
  );
}
