'use client';

import SideMenu from '@/components/sideMenu/SideMenu';

export default function Inicio() {
  return (
    <main className=" w-full">
      <div className="flex ">
        <div className="flex w-[300px] flex-col">
          <SideMenu />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex  justify-center items-center mt-[2rem]">
            <h2 className="w-[50rem] text-[54px] font-hanken text-center leading-tight">
              <span className="font-bold">Descubrí</span>,{' '}
              <span className="font-bold">compartí</span> y{' '}
              <span className="font-bold">conecta</span> con{' '}
              <span className="text-[#F58026]">foodies</span> alrededor del mundo
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
