import { Bell, Home, Twitter } from 'react-feather';
import { BeakerIcon } from '@heroicons/react/24/solid';
const SideMenu = () => {
  return (
    <div className="bg-white w-[280px] h-[919px] p-1">
      <div className="flex flex-col justify-center items-center m-[2rem]">
        <Twitter />
        <h1 className="font-abril font-bold text-[28px]">Foodies</h1>
      </div>
      <div className="flex flex-col justify-start items-start ml-4">
        <ul>
          <li className="flex my-1">
            <Home /> <p className="ml-1">Inicio</p>
          </li>
          <li className="flex my-1">
            <Bell />
            <p className="ml-1">Notificaciones</p>
          </li>
        </ul>
      </div>
      <hr class="w-48 h-px mx-auto my-4 bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
    </div>
  );
};

export default SideMenu;
