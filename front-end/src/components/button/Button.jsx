'use client';

import { useState } from 'react';
import ModalRegisterLoginMainStart from '../modalRegisterLoginMainStart/ModalRegisterLoginMainStart';

const Button = ({ className, children, typeBotton, stateModal }) => {
  const stateInitial = {
    modal: false,
    typeModal: '',
  };
  const [isModalVisible, setIsModalVisible] = useState(stateInitial);

  const handleOpenModal = (event) => {
    const target = event.target;
    const id = target.id;
    console.log(isModalVisible);
    setIsModalVisible({ ...isModalVisible, modal: true, typeModal: id });
  };

  const handleCloseModal = () => {
    setIsModalVisible({ ...isModalVisible, modal: false, typeModal: '' });
  };
  return (
    <>
      <button id={typeBotton} onClick={handleOpenModal} className={className}>
        {children}
      </button>
      <ModalRegisterLoginMainStart
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        typeModal={handleOpenModal}
      />
    </>
  );
};

export default Button;
