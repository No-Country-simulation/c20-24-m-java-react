import { useState } from 'react';
import UploadRecipe from '../uploadRecipe/UploadRecipe';
import ModalEditProfile from '../modalEditProfile/ModalEditProfile';

const ButtonEditProfile = ({
  bannerImage,
  userImage,
  desc,
  name,
  socialLink,
  loc,
  setUserProfile,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = () => {
    // console.log(isVisible);
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button
        onClick={handleModal}
        type="submit"
        className=" my-5  w-[132px] h-[48px] bg-[#F27B13] hover:bg-[#160852] hover:shadow-xl text-black font-semibold hover:text-white  px-4 border border-transparent hover:border-transparent rounded-[8px]"
      >
        Editar Perfil
      </button>
      {isVisible && (
        <ModalEditProfile
          onClose={handleModal}
          isVisible={isVisible}
          imgBanner={bannerImage}
          imgUser={userImage}
          desc={desc}
          name={name}
          socialUrl={socialLink}
          loc={loc}
          setUserProfile={setUserProfile}
        />
      )}
    </>
  );
};
export default ButtonEditProfile;
