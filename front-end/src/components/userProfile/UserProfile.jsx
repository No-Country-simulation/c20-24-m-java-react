import Image from 'next/image';
import { Globe, Instagram, MapPin } from 'react-feather';

const UserProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-1 bg-blue-gray-600 w-[252px] h-[252px] rounded-[50%] shadow-md ">
        <Image
          className=" w-[250px] h-[250px] rounded-[50%]"
          width={60}
          height={60}
          src="/img/Registro ilustracion.svg"
          alt="picture"
        />
      </div>
      <div className="my-5">
        <p className="text-[25px] text-center w-[250px] h-[[calc(var(--vh, 1vh) * 100)]] overflow-hidden text-ellipsis leading-tight font-semibold">
          Camila Lopez
        </p>
      </div>
      <div className="my-5 ml-5 flex justify-center  items-center w-[250px]">
        <MapPin />
        <p className="flex items-center ml-1 text-[14px] text-start w-[150px] h-[[calc(var(--vh, 1vh) * 100)]]  text-ellipsis leading-tight ">
          Rosario, Argentina
        </p>
      </div>
      <div>
        <p className="text-[14px] text-center w-[300px] h-[[calc(var(--vh, 1vh) * 100)]]  text-ellipsis leading-tight ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis harum
          sit libero quia deserunt vitae praesentium saepe culpa provident quos!
          Dolores fugit perspiciatis tempore sint provident voluptatum vero expedita
          excepturi.
        </p>
      </div>
      <div className="my-5 flex flex-row justify-center items-center">
        <Instagram className="mx-1" />
        <Image width={24} height={24} src="/icons/bi--facebook.svg" />
        <Globe className="mx-1" />
      </div>
      <div className="flex flex-row justify-center items-center bg-white rounded-3xl border-[1px] border-green-400 border-solid shadow-md p-2">
        <div className="mx-1 text-center w-[100px] ">
          <p className="font-semibold h-4">50</p>
          <p className="text-[14px]">Seguiendo</p>
        </div>
        <div className="mx-1 text-center w-[100px] ">
          <p className="font-semibold h-4">50</p>
          <p className="text-[14px]">Seguidores</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
