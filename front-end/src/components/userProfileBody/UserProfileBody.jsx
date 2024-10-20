'use client';
import axios from 'axios';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { userLocalStorage } from '../helper/userLocalStorage';
import ScrollInfiniteRedux from '../scrollInfiniteRedux/ScrollInfiniteRedux';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;

const UserProfileBody = ({ params }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [setUserSavedRecipes, setSetUserSavedRecipes] = useState(false);
  const [show, setShow] = useState(true);
  const [btnType, setBtnType] = useState('btnRecipes');
  const [isScroll, setIsScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserName = async () => {
      const { user, token } = userLocalStorage();
      if (!user || !token) {
        router.push('/');
      }
      // console.log(params, 'userProfile');
      if (params[0] === user.username) {
        // console.log(params === user.username);
        setSetUserSavedRecipes(true);
      }

      // const response = await axios.get(`${BACK_API_URL}/recipes/find/${username}`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      // console.log(response?.data);
    };
    if (params[1] === 'guardados') {
      setBtnType('btnSavedRecipes');
    } else {
      setBtnType('btnRecipes');
    }
    setIsScroll(true);
    fetchUserName();
  }, [params]);

  const handleButtonRouter = (e) => {
    e.preventDefault();
    const id = e.target.id;
    // setBtnType(id);
    // console.log(id);
    // console.log(btnType);
    if (id === 'btnRecipes') {
      router.push(`/${params[0]}`);
    } else if (id === 'btnSavedRecipes') {
      router.push(`/${params[0]}/guardados`);
    }
  };
  return (
    <setIsScrolliv className="">
      {/* <div>
        <p>Mis Recetas</p>
      </div>
      <div>
        <p>Recetas Guardadas</p>
      </div> */}
      <div className="flex flex-row justify-end items-center">
        <button
          id="btnRecipes"
          onClick={handleButtonRouter}
          className={`${btnType === 'btnRecipes' ? 'text-[#7DA626] border-b-2 border-[#7DA626] ' : ''} text-[20px] flex flex-row items-center text-center leading-5   pb-2 w-[170px] pl-2`}
        >
          <Image
            className={`${btnType === 'btnRecipes' ? 'fill-[#7DA626] text-[#7DA626]' : ''}`}
            src="/icons/arcticons--recipe-keeper.svg"
            alt="profile"
            width={40}
            height={40}
          />
          Recetas
        </button>
        {setUserSavedRecipes && (
          <button
            id="btnSavedRecipes"
            onClick={handleButtonRouter}
            className={`${btnType === 'btnSavedRecipes' ? 'text-[#7DA626] border-b-2 border-[#7DA626]' : ''} text-[20px] flex flex-row items-center text-center  leading-5 ml-2 pb-2 pl-2 w-[170px]`}
          >
            <Image
              src="/icons/hugeicons--cook-book.svg"
              alt="profile"
              width={40}
              height={40}
            />
            Guardados
          </button>
        )}
      </div>
      <hr className="w-full h-px  mx-auto  bg-gray-900 border-0 rounded  dark:bg-white"></hr>
      <div className="flex flex-col justify-center items-center mt-10">
        {isScroll && <ScrollInfiniteRedux pathFather={params} />}
      </div>
    </setIsScrolliv>
  );
};

export default UserProfileBody;
