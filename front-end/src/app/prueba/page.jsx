'use client';

// import Button from '@/components/button/Button';
import ModalRegisterLoginMainStart from '@/components/modalRegisterLoginMainStart/ModalRegisterLoginMainStart';

// import ModalLoginMainStart from "@/components/modalLoginMainStart/ModalLoginMainStart";

import { useState } from 'react';

export default function Prueba() {
  const stateInitial = {
    modal: false,
    typeModal: '',
  };
  const [isModalVisible, setIsModalVisible] = useState(stateInitial);

  const handleOpenModal = (event) => {
    const target = event.target;
    const id = target.id;

    setIsModalVisible({ ...isModalVisible, modal: true, typeModal: id });
    console.log(isModalVisible);
  };

  const handleCloseModal = () => {
    setIsModalVisible({ ...isModalVisible, modal: false, typeModal: '' });
  };

  return (
    <div>
      <button
        id="login"
        onClick={handleOpenModal}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Login
      </button>
      <button
        id="register"
        onClick={handleOpenModal}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Registro
      </button>
      {/* <Button
        id="register"
        stateModal={handleOpenModal}
        typeBotton={'register'}
        className="top-2 w-40 h-14  bg-lime-600 rounded-xl hover:bg-lime-800 md:w-52 md:h-10 sm:w-40 "
      >
        <p id="register" className="text-black">
          Registrarse
        </p>
      </Button> */}

      <ModalRegisterLoginMainStart
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        typeModal={handleOpenModal}
      />
    </div>
  );
}
