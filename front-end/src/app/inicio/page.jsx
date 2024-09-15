'use client';

import ScrollInfinite from '@/components/scrollInfinite/ScrollInfinite';
import SideMenu from '@/components/sideMenu/SideMenu';
import { Menu } from 'react-feather';
import { IoMenu } from 'react-icons/io5';
export default function Inicio() {
  return (
    <main className=" w-full">
      <div className="flex ">
        <div className="hidden lg:block  w-[300px] flex-col ">
          <SideMenu />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex  justify-center items-center mt-[2rem]">
            <h2 className="hidden lg:block w-[50rem] text-[54px] font-hanken text-center leading-tight">
              <span className="font-bold">Descubrí</span>,{' '}
              <span className="font-bold">compartí</span> y{' '}
              <span className="font-bold">conecta</span> con{' '}
              <span className="text-[#F58026]">foodies</span> alrededor del mundo
            </h2>
            {/*  */}
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button className="absolute left-[4rem] lg:hidden w-10 h-10 bg-white rounded-full p-1 shadow-sm">
              {/* <Menu /> */}
              <IoMenu className="w-[2em] h-[2em]" />
            </button>
            <h2 className="block lg:hidden font-hanken text-[54px] font-bold text-[#F58026]">
              FOODIES
            </h2>
          </div>
          <div className="flex flex-col justify-normal items-center mt-10 overflow-auto h-[calc(var(--vh, 1vh) * 100)]">
            <ScrollInfinite />
          </div>
        </div>
      </div>
    </main>
  );
}
