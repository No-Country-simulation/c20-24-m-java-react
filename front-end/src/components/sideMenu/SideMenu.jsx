'use client';
import { Bell, ChevronDown, Home, Twitter } from 'react-feather';
import './acordeonStyle.css';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Image from 'next/image';
const SideMenu = () => {
  const [activeAccordion, setActiveAccordion] = useState('');
  const handleOpenModal = (event) => {
    const target = event.currentTarget.toggle('close');
    const cl = target.classList[1];
    console.log(cl);
  };

  return (
    <div className="bg-white w-[280px] h-[919px] p-1 overflow-auto ">
      <div className="flex flex-col justify-center items-center m-[2rem]">
        <Twitter />
        <h1 className="font-abril font-bold text-[28px]">Foodies</h1>
      </div>
      <div className="flex flex-col justify-start items-start ml-4 text">
        <ul>
          <li className="flex my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
              />
              <path
                fill="currentColor"
                d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"
              />
            </svg>{' '}
            <p className="ml-1">Inicio</p>
          </li>
          <li className="flex my-1">
            <Bell />
            <p className="ml-1">Notificaciones</p>
          </li>
        </ul>
      </div>
      <hr className="w-48 h-px mx-auto my-4 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
      <div className="h-[300px]">
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
          title={'Dulce'}
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
          title={'Tragos y bebidas'}
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
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className=" my-5  w-[183px] h-[48px] bg-[#7DA626] hover:bg-[#160852] hover:shadow-xl text-black font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded-2xl"
        >
          SUBIR RECETA
        </button>
      </div>
      <div>
        <div>
          <Image
            className="icon_profile"
            width={3000}
            height={2000}
            src="/img/Registro ilustracion.svg"
            alt="picture"
          />
        </div>
        <p className="text-center mt-4">Cambiamos el mundo</p>
      </div>
    </div>
  );
};

export default SideMenu;
