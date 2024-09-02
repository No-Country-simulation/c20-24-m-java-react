'use client';
import Button from '@/components/button/Button';
import HeaderLogo from '@/components/headerLogo/HeaderLogo';
import MainStart from '@/components/mainStart/MainStart';
import ModalRegisterLoginMainStart from '@/components/modalRegisterLoginMainStart/ModalRegisterLoginMainStart';

import { useState } from 'react';

export default function Home() {
  const stateInitial = {
    modal: false,
    typeModal: '',
  };
  const [isModalVisible, setIsModalVisible] = useState(stateInitial);

  const handleOpenModal = (event) => {
    const target = event.target;
    const id = target.id;
    console.log(isModalVisible);
    setIsModalVisible({ ...isModalVisible, modal: true, typeModal: id });
  };

  const handleCloseModal = () => {
    setIsModalVisible({ ...isModalVisible, modal: false, typeModal: '' });
  };
  return (
    <main className="bg-orange-50">
      <HeaderLogo />
      <MainStart />
      <div className="flex flex-wrap items-center justify-center p-5">
        <p className="m-1 text-2xl justify-stretch items-stretch text-center ">
          <span className="text-black lg:text-2xl font-bold m-1 text-center ">
            Descubre y comparte
          </span>
          las mejores recetas caseras. !Únete a nuestra comunidad y empieza a
          cocinar con nosotros!
        </p>
      </div>

      <div className="flex justify-center items-center text-center mr-auto p-10 gap-10 ">
        <Button
          stateModal={handleOpenModal}
          typeBotton={'register'}
          className="top-2 w-40 h-14  bg-lime-600 rounded-xl hover:bg-lime-800 md:w-52 md:h-10 sm:w-40 "
        >
          <p id="register" className="text-black">
            Registrarse
          </p>
        </Button>
        <Button
          stateModal={handleOpenModal}
          typeBotton={'login'}
          className="w-40 h-14 bg-violet-950 rounded-xl hover:bg-lime-800 md:w-52 md:h-10 sm:w-40"
        >
          <p id="login" className="text-white">
            Inicio Sesion
          </p>
        </Button>
        <ModalRegisterLoginMainStart
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          typeModal={handleOpenModal}
        />
      </div>

      <div className=" flex justify-center h-auto w-[100%] ">
        <div className=" w-[100%] md:sticky  md:grid md:grid-cols-5  md:gap-x-5 md:gap-y-3 md:justify-center md:items-center md:mx-1 md:m-auto md:px-2  lg:gap-x-15 lg:gap-y-5 md:p-2   ">
          <img
            className="row-span-3 rounded-2xl pt-10  sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-4.svg "
          />
          <img
            className="row-span-2 rounded-2xl pt-5  sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-5.svg"
          />

          <img
            className="rounded-2xl  pt-0 sticky  lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-3.svg"
          />

          <img
            className="row-span-2 rounded-2xl pt-5 sticky lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-4.svg"
          />

          <img
            className="row-span-3 rounded-2xl pt-10 sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-5.svg"
          />

          <img
            className="row-span-4 rounded-2xl sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-4.svg"
          />

          <img
            className="row-span-5 rounded-2xl sticky lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-3.svg"
          />

          <img
            className="row-span-5 rounded-2xl sticky lg:static top-[5px] w-[80%] mx-auto"
            src="/img/cards-3.svg"
          />

          <img
            className="row-span-7  rounded-2xl sticky lg:static top-[5px] w-[80%] mx-auto "
            src="/img/cards-1.svg"
          />

          <img
            className="row-span-7 rounded-2xl sticky lg:static sm:mb-0  mb-72 w-[80%] mx-auto "
            src="/img/cards-4.svg"
          />
        </div>
      </div>
    </main>
  );
}
