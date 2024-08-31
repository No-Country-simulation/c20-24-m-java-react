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
           las mejores recetas caseras. !Únete a nuestra
          comunidad y empieza a cocinar con nosotros!
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

      <div className="grid grid-cols-5 gap-4 justify-center items-center p-5 mx-ful">
        <img
          className="row-span-3 rounded-2xl "
          src="https://media.gettyimages.com/id/1424826929/es/foto/close-up-of-chef-making-nigiri-sushi.jpg?s=612x612&w=gi&k=20&c=6BRjr0-uHDZR_yUwYn-2DF0dlK2kQrxR8Lq_SyYooBY= "
        />

        <img
          className="row-span-2 rounded-2xl"
          src="https://media.gettyimages.com/id/1097842636/es/foto/cosecha-oto%C3%B1o.jpg?s=2048x2048&w=gi&k=20&c=Xdj5hPrLzeC0LVXW4ASjRxW1GZN2avMAAuEVdV-PaYk="
        />
        <img
          className=" rounded-2xl"
          src="https://media.gettyimages.com/id/1217807835/es/foto/esto-es-delicioso.jpg?s=2048x2048&w=gi&k=20&c=5HFpINtfKsV8M-_rS9GTrCRa69BJSo4Ozm44FO3wg2w="
        />

        <img
          className="row-span-2 rounded-2xl"
          src="https://media.gettyimages.com/id/530067365/es/foto/usa-new-jersey-jersey-city-woman-choosing-between-pasta-and-salad.jpg?s=612x612&w=gi&k=20&c=YQlJ_mfUnXN8w4n6Tbz0g61OLOc3bXHDD1_WriWSgUA="
        />

        <img
          className="row-span-3 rounded-2xl"
          src="https://media.gettyimages.com/id/1241881284/es/foto/manos-de-cocinero-fotografiando-tacos-mexicanos.jpg?s=612x612&w=gi&k=20&c=S380x8WGYhO-a3pMUCoNa78ffbvCpUdfeYaP3nFtywM="
        />

        <img
          className="row-span-3 rounded-2xl"
          src="https://media.gettyimages.com/id/1385196919/es/foto/la-inflaci%C3%B3n-concepto.jpg?s=2048x2048&w=gi&k=20&c=orCWSaB8JyI-dyKKsHEspa0OfdJLbD_fuQ9uI4FKkns="
        />

        <img
          className="row-span-4 rounded-2xl "
          src="https://media.gettyimages.com/id/892674198/es/foto/preparar-su-plato-favorito.jpg?s=612x612&w=gi&k=20&c=fR7IKUWJ0vep2muNt6hDFxPV3S0WFeuqWBWwXDgzwXY="
        />

        <img
          className="row-span-5 rounded-2xl"
          src="https://media.gettyimages.com/id/1221325418/es/foto/ordering-food-online-at-home-with-smartphone.jpg?s=612x612&w=gi&k=20&c=iTAeGfWXRUJpkhoQHb0tUTtnbrNOr3aI2Y8aC4TUPEo="
        />

        <img
          className="row-span-7  rounded-2xl"
          src="https://media.gettyimages.com/id/1314632869/es/foto/primer-plano-de-la-mujer-empacando-comida-para-el-parto.jpg?s=612x612&w=gi&k=20&c=Esryh8o3c5fYlPxJQNAtRc_CbGugfm_gNiRbdyLxJsE="
        />

        <img
          className="row-span-7 rounded-2xl   "
          src="https://media.gettyimages.com/id/1314632869/es/foto/primer-plano-de-la-mujer-empacando-comida-para-el-parto.jpg?s=612x612&w=gi&k=20&c=Esryh8o3c5fYlPxJQNAtRc_CbGugfm_gNiRbdyLxJsE="
        />
      </div>
    </main>
  );
}
