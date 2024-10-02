'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const UserProfileBody = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  return (
    <div className="">
      {/* <div>
        <p>Mis Recetas</p>
      </div>
      <div>
        <p>Recetas Guardadas</p>
      </div> */}
      <div className="flex flex-row justify-end items-center">
        <button
          onClick={() => setShow(true)}
          className={`${show ? 'text-[#7DA626] border-b-2 border-[#7DA626] ' : ''} text-[20px] flex flex-row items-center text-center leading-5   pb-2 w-[170px] pl-2`}
        >
          <Image
            className={`${show ? 'fill-[#7DA626] text-[#7DA626]' : ''}`}
            src="/icons/arcticons--recipe-keeper.svg"
            alt="profile"
            width={40}
            height={40}
          />
          Recetas
        </button>
        <button
          onClick={() => setShow(false)}
          className={`${!show ? 'text-[#7DA626] border-b-2 border-[#7DA626]' : ''} text-[20px] flex flex-row items-center text-center  leading-5 ml-2 pb-2 pl-2 w-[170px]`}
        >
          <Image
            src="/icons/hugeicons--cook-book.svg"
            alt="profile"
            width={40}
            height={40}
          />
          Guardados
        </button>
      </div>
      <hr className="w-full h-px  mx-auto  bg-gray-900 border-0 rounded  dark:bg-white"></hr>
    </div>
  );
};

export default UserProfileBody;
