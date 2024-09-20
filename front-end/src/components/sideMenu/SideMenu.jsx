'use client';
import { Twitter } from 'react-feather';
import './acordeonStyle.css';
import { FaUser } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Accordion from '../accordion/Accordion';
import Image from 'next/image';
import { useUserContext } from '../UserProvider';
import UploadRecipe from '../uploadRecipe/UploadRecipe';
import { MdOutlineLogout } from 'react-icons/md';
import ButtonLogOut from '../buttonLogOut/ButtonLogOut';
import Link from 'next/link';
const SideMenu = ({ showMenu, handleShowMenu, setType, setTypeGeneric }) => {
  const { user, setUser } = useUserContext();
  const [activeAccordion, setActiveAccordion] = useState('');
  const [showUploadRecipe, setShowUploadRecipe] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const currentUser = await JSON.parse(localStorage.user);
      setUser(currentUser);
    };

    checkToken();
  }, [setUser]);

  const handleShowUploadRecipe = () => {
    // console.log(showMenu, 'showMenu');
    setShowUploadRecipe(!showUploadRecipe);
  };
  const data = user;
  return (
    <div
      onClick={handleShowMenu}
      className={`fixed z-10   flex justify-start items-center transition-colors  ${showMenu ? 'visible bg-black/55  inset-0  backdrop-blur-md ' : ''}  `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="select-none bg-white w-[280px] h-[calc(var(--vh, 1vh) * 100)] p-1 overflow-auto shadow-md fixed   top-0"
      >
        <div className="flex flex-col justify-center items-center mt-5 mb-7">
          <Image
            onClick={() => setTypeGeneric('list')}
            width={130}
            height={130}
            src="/img/Logo.svg"
            alt="picture"
          />

          {/* <h1 className="font-abril font-bold text-[28px]">Foodies</h1> */}
        </div>
        <div
          onClick={() => setTypeGeneric('list')}
          className="flex justify-start items-center ml-4 text-[18px] font-semibold text-center"
        >
          <ul>
            <li className=" my-1 flex justify-start items-center w-f cursor-pointer">
              <Image
                width={30}
                height={30}
                src="/icons/ion--home.svg"
                alt="picture"
              />
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
          {/* <Accordion
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
          </Accordion> */}
          <div
            onClick={() => setTypeGeneric('SWEET')}
            className="flex justify-start items-center ml-4 mt-2  font-semibold cursor-pointer"
          >
            <Image
              width={30}
              height={30}
              src="/icons/hugeicons--apple-pie.svg"
              alt="picture"
            />
            <p className="ml-1">Dulce</p>
          </div>
          <div
            onClick={() => setTypeGeneric('SAVORY')}
            className="flex justify-start items-center ml-4 mt-2  font-semibold cursor-pointer"
          >
            <Image
              width={30}
              height={30}
              src="/icons/mdi--food-italian (1).svg"
              alt="picture"
            />
            <p className="ml-1">Salado</p>
          </div>
          <div
            onClick={() => setTypeGeneric('DRINKS_COCKTAILS')}
            className="flex justify-start items-center ml-4 mt-2  font-semibold cursor-pointer"
          >
            <Image
              width={30}
              height={30}
              src="/icons/entypo--drink.svg"
              alt="picture"
            />
            <p className="ml-1">Tragos y bebidas</p>
          </div>
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
            onClick={handleShowUploadRecipe}
            type="submit"
            className=" my-5  w-[183px] h-[48px] bg-[#7DA626] hover:bg-[#160852] hover:shadow-xl text-black font-semibold hover:text-white  px-4 border hover:border-transparent rounded-2xl"
          >
            SUBIR RECETA
          </button>
          {showUploadRecipe && (
            <UploadRecipe
              onClose={handleShowUploadRecipe}
              isVisible={showUploadRecipe}
            />
          )}
        </div>
        <div className="flex flex-col justify-between items-center mt-12">
          <Link href="/perfil">
            <div className="mx-2 w-[60px] h-[60px] icon_profile flex justify-center items-center">
              {data?.imageUser ? (
                <Image
                  className="icon_profile flex items-center"
                  width={60}
                  height={60}
                  src={data.imageUser}
                  alt="picture"
                />
              ) : (
                <FaUser className="rounded-full w-[50px] h-[50px]" />
              )}
            </div>
          </Link>
          <Link href="/perfil">
            <p className="mt-2 text-center w-[160px] overflow-hidden text-ellipsis leading-tight font-semibold">
              {data?.username || 'UsuarioError'}
            </p>
          </Link>
        </div>
        <div className=" text-[14px] mt-10 ml-4">
          <div className="flex justify-start items-center">
            <ButtonLogOut />
          </div>
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
    </div>
  );
};

export default SideMenu;
