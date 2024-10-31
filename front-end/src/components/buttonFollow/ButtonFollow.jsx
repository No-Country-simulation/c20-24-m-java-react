import { useState } from 'react';
import ModalEditProfile from '../modalEditProfile/ModalEditProfile';

const ButtonFollow = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = () => {
    // console.log(isVisible);
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button className=" my-5  w-[183px] h-[48px] bg-[#7DA626] hover:bg-[#160852] hover:shadow-xl text-black font-semibold hover:text-white  px-4 border hover:border-transparent rounded-2xl">
        Seguir
      </button>
      {/* {isVisible && <ModalEditProfile onClose={handleModal} isVisible={isVisible} />} */}
    </>
  );
};

export default ButtonFollow;
