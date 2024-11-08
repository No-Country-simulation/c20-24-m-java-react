'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Globe, Instagram, MapPin } from 'react-feather';
import { FaUser } from 'react-icons/fa6';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { userLocalStorage } from '../helper/userLocalStorage';
import { useDispatch } from 'react-redux';
import { deletePageKeyPegeScrollGeneric } from '@/redux/pegeScrollGeneric/pegeScrollGenericSlice';
import { setResetState } from '@/redux/resetStatePage/resetStatePageSlice';
import ButtonUploadRecipe from '../buttonUploadRecipe/buttonUploadRecipe';
import { useUserContext } from '../UserProvider';
import ButtonEditProfile from '../buttonEditProfile/buttonEditProfile';
import { Button } from '@material-tailwind/react';
import ButtonFollow from '../buttonFollow/ButtonFollow';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;

const UserProfile = ({ onClose, userId, username, imageUser }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const userData = {
    nameUser: username,
    location: '',
    socialLinks: [],
  };
  const [isUserProfile, setUserProfile] = useState(userData);
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const fetchUserName = async () => {
      const { user, token } = userLocalStorage();
      if (!user || !token) {
        router.push('/');
      }
      console.log(user, 'userProfile');
      const response = await axios
        .get(`${BACK_API_URL}/users/search/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((error) => console.log(error));
      console.log(response?.data.userProfile, 'userProfile');

      if (response?.data) {
        const dt = response?.data.userProfile;
        setUserProfile({ ...isUserProfile, ...dt });
      }
    };
    dispatch(setResetState(true));
    // const user = username;
    // const userPath = user.split('/');
    // console.log(username, 'userPath');
    fetchUserName();
    // console.log(username, 'user');
  }, [username]);

  const handleBackDeletePage = (e) => {
    e.preventDefault();
    // const user = username;
    // const userPath = user.split('/');
    // console.log(username, 'userPath');
    dispatch(deletePageKeyPegeScrollGeneric({ pageKey: username }));
    dispatch(setResetState(true));
    router.back();
  };

  return (
    <>
      {console.log(isUserProfile, 'isUserProfile')}
      <div className=" h-[270px] bg-black ">
        {isUserProfile?.bannerImage ? (
          <Image
            className=" h-[270px] w-full object-cover"
            width={1600}
            height={60}
            sizes=""
            src={isUserProfile.bannerImage}
            alt="picture"
          />
        ) : null}
      </div>
      {username === user?.username ? (
        <div className="absolute z-100 top-[12px] right-[30px] cursor-pointer">
          <ButtonEditProfile
            bannerImage={isUserProfile?.bannerImage}
            userImage={isUserProfile?.userImage}
            desc={isUserProfile?.description}
            name={isUserProfile?.nameUser}
            socialLink={isUserProfile?.socialLinks}
            loc={isUserProfile?.location}
            setUserProfile={setUserProfile}
          />
        </div>
      ) : null}

      <div className="w-[330px] h-[600px] fixed z-10 top-[150px] mx-[100px]">
        <div className="flex flex-col justify-center items-center ">
          <div
            onClick={handleBackDeletePage}
            className="fixed top-[12px] left-[30px] cursor-pointer"
          >
            <IoArrowBackCircleOutline className="w-[80px] h-[80px] text-white drop-shadow-[0_1px_1px_rgba(1,1,1,1.2)] " />
          </div>

          <div className="flex justify-center items-center  mt-1 bg-[#fff8f2] w-[252px] h-[252px] rounded-[50%] shadow-md ">
            {isUserProfile?.userImage ? (
              <Image
                className=" w-[250px] h-[250px] rounded-[50%]"
                width={80}
                height={80}
                sizes="(max-width: 1080px) 50vw,400px"
                src={isUserProfile.userImage}
                alt="picture"
              />
            ) : (
              <FaUser className="rounded-full w-[240px] h-[240px]" />
            )}
          </div>
          <div className="my-5">
            <p className="text-[25px] text-center w-[250px] h-[[calc(var(--vh, 1vh) * 100)]] overflow-hidden text-ellipsis leading-tight font-semibold">
              {username || 'Username'}
            </p>
          </div>
          <div className="my-5 ml-5 flex justify-start  items-center w-[250px]">
            <MapPin />
            {isUserProfile?.location !== '' ? (
              <p className="flex items-center ml-1 text-[14px] text-start  h-[[calc(var(--vh, 1vh) * 100)]]  text-ellipsis leading-tight ">
                {isUserProfile?.location}
              </p>
            ) : (
              <p className="flex items-center ml-3 text-[14px] text-start w-[50px] h-[[calc(var(--vh, 1vh) * 100)]]  text-ellipsis leading-tight ">
                -
              </p>
            )}
          </div>
          <div>
            {isUserProfile?.description ? (
              <p className="text-[14px] text-center w-[300px] h-[[calc(var(--vh, 1vh) * 100)]]  text-ellipsis leading-tight ">
                {isUserProfile?.description}
              </p>
            ) : null}
          </div>
          {isUserProfile?.socialLinks.length > 0 ? (
            <div className="my-5 flex flex-row justify-center items-center">
              <Instagram className="mx-1" />
              <Image
                alt="facebook"
                width={24}
                height={24}
                src="/icons/bi--facebook.svg"
              />
              <Globe className="mx-1" />
            </div>
          ) : null}

          <div className="flex flex-row justify-center items-center bg-white rounded-3xl border-[1px] border-green-400 border-solid shadow-md mt-2 p-2">
            <div className="mx-1 text-center w-[100px] ">
              <p className="font-semibold h-4">0</p>
              <p className="text-[14px]">Seguiendo</p>
            </div>
            <div className="mx-1 text-center w-[100px] ">
              <p className="font-semibold h-4">0</p>
              <p className="text-[14px]">Seguidores</p>
            </div>
          </div>
          <div className="flex justify-center pt-11">
            {username === user?.username ? (
              <ButtonUploadRecipe />
            ) : (
              <>
                <ButtonFollow user={user} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
