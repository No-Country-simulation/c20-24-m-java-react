'use client';

import ScrollInfinite from '@/components/scrollInfinite/ScrollInfinite';

import ScrollInfiniteRedux from '@/components/scrollInfiniteRedux/ScrollInfiniteRedux';

import ScrollInfiniteSWEET from '@/components/scrollInfiniteSWEET/ScrollInfiniteSWEET';
import SideMenu from '@/components/sideMenu/SideMenu';
import { useUserContext } from '@/components/UserProvider';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import { IoMenu } from 'react-icons/io5';
import { Toaster } from 'sonner';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function Inicio() {
  const router = useRouter();
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [showGlobal, setShowGlobal] = useState('list');
  const [typeData, setTypeData] = useState([]);
  const [type, setType] = useState(true);
  const { user, setUser } = useUserContext();
  const { setToken } = useUserContext();

  useEffect(() => {
    const checkToken = async () => {
      if (localStorage.user) {
        const userInfo = await JSON.parse(localStorage.user);
        // console.log(userInfo);
        setUser(userInfo);
        // console.log(userInfo, 'userInfo');
      } else {
        router.push('/');
      }
    };
    checkToken();
  }, [setUser]);

  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     const stoken = await localStorage.getItem('token');
  //     setToken(stoken);
  //     // console.log(stoken);
  //     // if (stoken) {
  //     //   const response = await axios
  //     //     .get(`${BACK_API_URL}/recipes/list`, {
  //     //       headers: {
  //     //         Authorization: `Bearer ${stoken}`,
  //     //       },
  //     //     })
  //     //     .catch((error) => console.log(error));
  //     //   setTypeData(response?.data);
  //     //   console.log(response.data, 'aqui');
  //     // }
  //     const userInfo = await JSON.parse(localStorage.user);
  //     const response = await axios
  //       .get(`${BACK_API_URL}/favorites/user/${userInfo.userId}`, {
  //         headers: { Authorization: `Bearer ${stoken}` },
  //       })

  //       .catch((error) => console.log(error));
  //     console.log(response?.data.length, 'aver');
  //     if (response?.data.length === 0) {
  //       const userAndNameFavorites = {
  //         userId: userInfo.userId,
  //         name: 'Predeterminado',
  //       };
  //       console.log('se crea el favorito');
  //       const response = await axios
  //         .post(`${BACK_API_URL}/favorites/save`, userAndNameFavorites, {
  //           headers: { Authorization: `Bearer ${stoken}` },
  //         })
  //         .catch((error) => console.log(error));
  //       console.log(response.data, 'favorito creado');
  //     }
  //   };
  //   fetchRecipe();
  // }, []);

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
            setType={setType}
            setTypeGeneric={setShowGlobal}
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
            {/* user:{user?.userId} */}
          </div>
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
            <div className="">
              {/* <div>
        <p>Mis Recetas</p>
      </div>
      <div>
        <p>Recetas Guardadas</p>
      </div> */}
              <div className="flex flex-row justify-center items-center">
                {/* <button
                  onClick={() => setShowGlobal('list')}
                  className={`${showGlobal ? 'text-[#7DA626] border-b-2 border-[#7DA626] ' : ''} text-[20px]  items-center text-center leading-5   pb-2 w-[170px] pl-2`}
                >
                  Global
                </button> */}
                {/* <button
                  onClick={() => setShowGlobal(false)}
                  className={`${!showGlobal ? 'text-[#7DA626] border-b-2 border-[#7DA626]' : ''} text-[20px]  items-center text-center  leading-5 ml-2 pb-2 pl-2 w-[170px]`}
                >
                  Personal
                </button> */}
              </div>
              <hr className="w-full h-px  mx-auto  bg-gray-900 border-0 rounded  dark:bg-white"></hr>
            </div>
            {/* {showGlobal ? (
              <ScrollInfinite dataExternal={typeData} />
            ) : (
              <ScrollInfinite dataExternal={typeData} />
            )} */}

            {/* {showGlobal && <ScrollInfinite />} */}
            {/* {pathname} */}
            {/* <ScrollInfinite type={pathname} /> */}
            <ScrollInfiniteRedux type={pathname} />
            {/*  */}
            {/* {<ScrollInfiniteSWEET />} */}
            {/* {showGlobal === 'list' && (
              <ScrollInfinite dataExternal={typeData} type={type} />
            )}
           
            {showGlobal === 'SAVORY' && <ScrollInfiniteSAVORY />}
            {showGlobal === 'DRINKS_COCKTAILS' && <ScrollInfiniteDRINKS_COCKTAILS />} */}
          </div>
        </div>
      </div>
    </main>
  );
}
