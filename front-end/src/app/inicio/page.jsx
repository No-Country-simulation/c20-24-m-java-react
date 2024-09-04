'use client';

import SideMenu from '@/components/sideMenu/SideMenu';

export default function Inicio() {
  return (
    <main className="bg-orange-50 w-full">
      <div className="flex ">
        <div className="flex w-[300px] flex-col">
          <SideMenu />
        </div>
        <div className="flex w-4/5 flex-col">
          <h2>
            Descubrí, compartí y conecta con foodies alrededor del mundo Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Optio quia accusantium illum
            distinctio adipisci labore ratione molestias animi provident. Alias porro
            laudantium molestias quasi. Beatae placeat corporis a culpa magni!
          </h2>
        </div>
      </div>
    </main>
  );
}
