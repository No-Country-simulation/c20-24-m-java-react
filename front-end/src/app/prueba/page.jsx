"use client";

import ModalLoginMainStart from "@/components/modalLoginMainStart/ModalLoginMainStart";
import { useState } from "react";

export default function Prueba() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    // console.log(isModalVisible);

    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    console.log(isModalVisible);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Buttond
      </button>
      <ModalLoginMainStart
        isVisible={isModalVisible}
        onClose={handleCloseModal}
      />
    </div>
  );
}
