'use client';

import ScrollInfinite from '@/components/scrollInfinite/ScrollInfinite';
import SideMenu from '@/components/sideMenu/SideMenu';
import { useUserContext } from '@/components/UserProvider';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import { IoMenu } from 'react-icons/io5';
export default function Inicio() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const checkToken = async () => {
      if (localStorage.user) {
        const userInfo = await JSON.parse(localStorage.user);
        // console.log(userInfo);
        setUser(userInfo);
        console.log(userInfo, 'userInfo');
      } else {
        router.push('/');
      }
    };
    checkToken();
  }, [setUser]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 1024) {
        setShowMenu(false);
      }
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <main className=" w-full">
      <div className="flex ">
        <div
          className={`${showMenu ? 'visible ' : 'hidden '} ${windowWidth > 1024 ? 'w-[300px]' : ''} lg:flex`}
        >
          <SideMenu
            showMenu={showMenu}
            handleShowMenu={handleShowMenu}
            windowWidth={windowWidth}
          />
        </div>
        <div className="flex w-full flex-col justify-end items-center">
          <div className="flex  justify-center items-center mt-[2rem]">
            <h2 className="hidden lg:block w-[50rem] text-[54px] font-hanken text-center leading-tight">
              <span className="font-bold">Descubrí</span>,{' '}
              <span className="font-bold">compartí</span> y{' '}
              <span className="font-bold">conecta</span> con{' '}
              <span className="text-[#F58026]">foodies</span> alrededor del mundo
            </h2>
            {/*  */}
          </div>
          <p>{windowWidth}</p>
          <p>idUser:{user?.username}</p>
          <div className="flex items-center justify-center lg:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`${showMenu ? 'hidden' : ''} fixed z-10 left-[4rem] lg:hidden w-10 h-10 bg-white rounded-full p-1 shadow-sm`}
            >
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
