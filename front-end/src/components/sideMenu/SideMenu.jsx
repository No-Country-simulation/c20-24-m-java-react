'use client';
import { Twitter } from 'react-feather';
import './acordeonStyle.css';

import { useState } from 'react';
import Accordion from '../accordion/Accordion';
import Image from 'next/image';
const SideMenu = () => {
  const [activeAccordion, setActiveAccordion] = useState('');

  return (
    <div className="select-none bg-red-900 w-[280px] h-[919px] p-1 overflow-auto shadow-md sticky top-0">
      <div className="flex flex-col justify-center items-center mt-14 mb-7">
        <Twitter />
        <h1 className="font-abril font-bold text-[28px]">Foodies</h1>
      </div>
      <div className="flex justify-start items-center ml-4 text-[18px] font-semibold text-center">
        <ul>
          <li className=" my-1 flex justify-start items-center w-f cursor-pointer">
            <Image width={30} height={30} src="/icons/ion--home.svg" alt="picture" />
            <p className="ml-1  ">Inicio</p>
          </li>
          <li className="flex justify-start items-center  my-1 cursor-pointer">
            <Image
              width={30}
              height={30}
              src="/icons/clarity--notification-solid.svg"
              alt="picture"
            />
            <p className="ml-1">Notificaciones</p>
          </li>
        </ul>
      </div>
      <hr className="w-[15rem] h-px mx-auto my-4 bg-gray-900 border-0 rounded  dark:bg-white"></hr>
      <div className="h-[300px]">
        <Accordion
          title={'Dulce'}
          icon={
            <Image
              width={30}
              height={30}
              src="/icons/hugeicons--apple-pie.svg"
              alt="picture"
            />
          }
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          <ul>
            <li>
              <p>Postres</p>
            </li>
            <li>
              <p>Tortas</p>
            </li>
            <li>
              <p>Planificacion</p>
            </li>
            <li>
              <p>Galletas</p>
            </li>
            <li>
              <p>Tartas</p>
            </li>
          </ul>
        </Accordion>
        <Accordion
          title={'Salado'}
          icon={
            <Image
              width={30}
              height={30}
              src="/icons/mdi--food-italian (1).svg"
              alt="picture"
            />
          }
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          <ul>
            <li>
              <p>Entradas y aperitivos</p>
            </li>
            <li>
              <p>Platos principales</p>
            </li>
            <li>
              <p>Guarniciones</p>
            </li>
            <li>
              <p>Sopa y cremas</p>
            </li>
          </ul>
        </Accordion>

        <Accordion
          title={'Tragos y bebidas'}
          icon={
            <Image
              width={30}
              height={30}
              src="/icons/entypo--drink.svg"
              alt="picture"
            />
          }
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          <ul>
            <li>
              <p>Con alcohol</p>
            </li>
            <li>
              <p>Sin alcohol</p>
            </li>
          </ul>
        </Accordion>
        <div className="flex justify-start items-center ml-4 mt-2  font-semibold cursor-pointer">
          <Image
            className="mr-1"
            width={30}
            height={30}
            src="/icons/hugeicons--cook-book.svg"
            alt="picture"
          />
          <p>Recetas Guardadas</p>
        </div>
      </div>
      <div className="flex justify-center pt-11">
        <button
          type="submit"
          className=" my-5  w-[183px] h-[48px] bg-[#7DA626] hover:bg-[#160852] hover:shadow-xl text-black font-semibold hover:text-white  px-4 border hover:border-transparent rounded-2xl"
        >
          SUBIR RECETA
        </button>
      </div>
      <div className="flex justify-end items-center mt-12">
        <div className="mx-2">
          <Image
            className="icon_profile"
            width={3000}
            height={2000}
            src="/img/Registro ilustracion.svg"
            alt="picture"
          />
        </div>
        <p className="text-start w-[160px] overflow-hidden text-ellipsis leading-tight font-semibold">
          Camila lopez
        </p>
      </div>
      <div className=" text-[14px] mt-16 ml-4">
        <div className="flex justify-start items-center">
          <Image
            className="mr-1"
            width={20}
            height={20}
            src="/icons/material-symbols--help-outline.svg"
            alt="picture"
          />
          <p>Ayuda</p>
        </div>
        <div className="flex justify-start items-center">
          <Image
            className="mr-1"
            width={20}
            height={20}
            src="/icons/hugeicons--configuration-02.svg"
            alt="picture"
          />
          <p>Configuración</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
