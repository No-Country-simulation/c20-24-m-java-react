import { useState } from 'react';
import UploadRecipe from '../uploadRecipe/UploadRecipe';

const ButtonUploadRecipe = () => {
  const [showUploadRecipe, setShowUploadRecipe] = useState(false);

  const handleShowUploadRecipe = () => {
    // console.log(showMenu, 'showMenu');

    setShowUploadRecipe(!showUploadRecipe);
  };
  return (
    <>
      <button
        onClick={handleShowUploadRecipe}
        type="submit"
        className=" my-5  w-[183px] h-[48px] bg-[#7DA626] hover:bg-[#160852] hover:shadow-xl text-black font-semibold hover:text-white  px-4 border hover:border-transparent rounded-2xl"
      >
        SUBIR RECETA
      </button>
      {showUploadRecipe && (
        <UploadRecipe
          onClose={handleShowUploadRecipe}
          isVisible={showUploadRecipe}
        />
      )}
    </>
  );
};
export default ButtonUploadRecipe;
