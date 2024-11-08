import Button from '@/components/button/Button';
import HeaderLogo from '@/components/headerLogo/HeaderLogo';
// import Loading from '@/components/loading/Loading';
import MainStart from '@/components/mainStart/MainStart';

import Image from 'next/image';

import { AlertCircle } from 'react-feather';

export default function Home() {
  return (
    <main className="">
      <HeaderLogo />
      <MainStart />
      <div className="flex flex-wrap items-center justify-center p-5">
        <p className="m-1 text-2xl justify-stretch items-stretch text-center ">
          <span className="text-black lg:text-2xl font-bold m-1 text-center ">
            Descubre y comparte
          </span>
          las mejores recetas caseras. ¡Únete a nuestra comunidad y empieza a cocinar
          con nosotros!
        </p>
      </div>
      <div className="flex justify-center items-center text-center mr-auto p-10 gap-10 ">
        <Button
          typeBotton={'register'}
          className="top-2 w-40 h-14  bg-[#7da626] rounded-xl hover:bg-[#160852]  md:w-52 md:h-10 sm:w-40 "
        >
          <p
            id="register"
            className="text-black hover:text-white  font-semibold p-2"
          >
            Registrarse
          </p>
        </Button>
        <Button
          typeBotton={'login'}
          className="w-40 h-14 bg-[#160852] rounded-xl hover:bg-[#7da626] hover:text-black md:w-52 md:h-10 sm:w-40"
        >
          <p id="login" className="text-white  hover:text-black font-semibold p-2">
            Inicio Sesion
          </p>
        </Button>
      </div>

      <div className=" flex justify-center h-auto w-[100%] ">
        <div className=" w-[100%] md:sticky  md:grid md:grid-cols-5  md:gap-x-5 md:gap-y-3 md:justify-center md:items-center md:mx-1 md:m-auto md:px-2  lg:gap-x-15 lg:gap-y-5 md:p-2   ">
          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-3 rounded-2xl md:pt-10  pt-28 sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-1.svg"
          />
          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-2 rounded-2xl md:pt-5 pt-28  sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-2.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="rounded-2xl  md:pt-0 sticky pt-28  lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-3.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-2 rounded-2xl md:pt-5 pt-28 sticky lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-4.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-3 rounded-2xl md:pt-5 pt-28 sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-5.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-4 rounded-2xl md:pt-5 pt-28 sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-6.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-5 rounded-2xl md:pt-5  pt-28  sticky lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-7.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-5 rounded-2xl  md:pt-5  pt-28 sticky lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-8.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-7  rounded-2xl  md:pt-5 pt-28   sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-9.svg"
          />

          <Image
            sizes="(max-width: 380px) 50vw,400px"
            height={100}
            width={100}
            className="row-span-7 rounded-2xl xl: md:pt-5   pt-28 sticky lg:static  md:relative md:top-0 md:translate-x-0 w-[80%] mx-auto z-10 "
            src="/img/cards-10.svg"
          />
        </div>
      </div>
      <footer className="bg-white h-auto w-[100%]  p-5 stiky mt-10 ">
        <div className="">
          <div className="flex justify-start items-center mb-1">
            <AlertCircle className=" text-white fill-[#160852]" />
            <h2 className="text-lg font-semibold ml-1">Información de contacto</h2>
          </div>
          <div className="md:grid  md:grid-cols-7 md:gap-4">
            <div className="">
              <h3 className="font-medium ml-3 md:ml-10 mt-5">
                Desarrolladores back-end
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="flex ml-6 md:ml-14">
                  <a
                    href="https://www.linkedin.com/in/eloy-simonin/"
                    className="flex items-center hover:text-[#7da626]"
                  >
                    <img
                      src="/img/linkedin.svg"
                      alt="LinkedIn"
                      className="w-4 h-4 mr-2  bg-[#0a66c2] hover:bg-white  "
                    />
                    Eloy Simonin
                  </a>
                </li>
                <li className="flex ml-6 md:ml-14">
                  <a
                    href="https://www.linkedin.com/in/luciano-molina-/"
                    className="flex items-center hover:text-[#7da626]"
                  >
                    <img
                      src="/img/linkedin.svg"
                      alt="LinkedIn"
                      className="w-4 h-4 mr-2 bg-[#0a66c2] hover:bg-white "
                    />
                    Luciano Molina
                  </a>
                </li>
                <li className="flex ml-6 md:ml-14">
                  <a
                    href="https://www.linkedin.com/in/eric-merel-779669298"
                    className="flex items-center hover:text-[#7da626]"
                  >
                    <img
                      src="/img/linkedin.svg"
                      alt="LinkedIn"
                      className="w-4 h-4 mr-2 bg-[#0a66c2] hover:bg-white "
                    />
                    Eric Merel
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium ml-3 md:ml-10 mt-5">
                Desarrolladores front-end
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="flex ml-6 md:ml-14  ">
                  <a
                    href="https://www.linkedin.com/in/alejandro-abalos-flores-5bb905115"
                    className="flex items-center hover:text-[#7da626]"
                  >
                    <img
                      src="/img/linkedin.svg"
                      alt="LinkedIn"
                      className="w-4 h-4 mr-2 bg-[#0a66c2] hover:bg-white "
                    />
                    Alejandro Abalos
                  </a>
                </li>
                <li className="flex ml-6 md:ml-14">
                  <a
                    href="https://www.linkedin.com/in/hector-duarte"
                    className="flex items-center hover:text-[#7da626]"
                  >
                    <img
                      src="/img/linkedin.svg"
                      alt="LinkedIn"
                      className="w-4 h-4 mr-2 bg-[#0a66c2] hover:bg-white"
                    />
                    Hector Duarte
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium ml-3 md:ml-10 mt-5 ">Diseñadora UX/UI</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex ml-6 md:ml-14">
                  <a
                    href="https://www.linkedin.com/in/marian-miranda/"
                    className="flex items-center hover:text-[#7da626]"
                  >
                    <img
                      src="/img/linkedin.svg"
                      alt="LinkedIn"
                      className="w-4 h-4 mr-2 bg-[#0a66c2] hover:bg-white"
                    />
                    Marian Miranda
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center ">
              <img src="/img/logo.svg" alt="LinkedIn" className="w-40 h-60" />
            </div>

            <div className="md:flex md:flex-col-reverse md:col-start-6 md:col-end-8 md:text-end">
              <p className=" text-darkColor dark:text-whiteColor text-sm ">
                Copyright © 2024. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
