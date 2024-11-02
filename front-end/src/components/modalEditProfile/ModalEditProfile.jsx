import Image from 'next/image';
import { FaUser } from 'react-icons/fa6';

const ModalEditProfile = ({ isVisible, onClose }) => {
  const imageUser = localStorage.user ? JSON.parse(localStorage.user).image : null;
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-50 cursor-default   inset-0 flex justify-start items-center py-14 transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={` h-[calc(var(--vh, 1vh) * 100)] absolute right-0 top-0 left-0 bottom-0 m-auto flex flex-col overflow-auto h-[600px] w-[50rem]   bg-white rounded-[4px]  shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div className=" h-[170px] bg-black ">
          <h1>Hola</h1>
        </div>
        <div className="absolute top-[100px] left-[30px] flex justify-center items-center  mt-1 bg-[#fff8f2] w-[152px] h-[152px] rounded-[50%] shadow-md ">
          {imageUser ? (
            <Image
              className=" w-[150px] h-[150px] rounded-[50%]"
              width={60}
              height={60}
              src="/img/Registro ilustracion.svg"
              alt="picture"
            />
          ) : (
            <FaUser className="rounded-full w-[140px] h-[140px]" />
          )}
        </div>
        <div>
          <form action="">
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModalEditProfile;
