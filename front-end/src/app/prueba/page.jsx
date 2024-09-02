'use client';

// import ModalLoginMainStart from "@/components/modalLoginMainStart/ModalLoginMainStart";
import ModalRegisterMainStart from '@/components/modalLoginMainStart/ModalRegisterMainStart';
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
      <ModalRegisterMainStart
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        typeModal={handleOpenModal}
      />
    </div>
  );
}
