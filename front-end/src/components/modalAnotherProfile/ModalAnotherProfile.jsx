import UserProfile from '../userProfile/UserProfile';
import UserProfileBody from '../userProfileBody/UserProfileBody';

const ModalAnotherProfile = ({
  onClose,
  isVisible,
  userId,
  title,
  image,
  description,
  ingredients,
  stepByStep,
  time,
  commensal,
  difficulty,
  category,
  subcategory,
  nameUser,
  dateCreation,
}) => {
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-10 inset-0 flex flex-g justify-start items-center py-14 transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={`h-[calc(var(--vh, 1vh) * 100)] flex flex-col  overflow-auto h-max w-[80rem] xl:ml-72 xl:mr-40  xl:max-w-screen  lg:mx-5 mx-5 bg-[#fff8f2] rounded-md  shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div className="xl:flex xl:flex-row md:flex md:flex-row sm:flex sm:flex-col justify-between items-start mx-1"></div>
        <div className="h-[120px] w-full bg-black">
          <img
            className="w-full h-full object-cover"
            src="/img/portada.svg"
            alt="Imagen de portada"
          />
        </div>

        <div className="flex justify-center flex-col  xl:flex xl:items-start xl:justify-start xl:flex-row xl:m-0 lg:flex lg:flex-row lg:items-start lg:justify-start lg:m-0 md:flex md:flex-row md:justify-start md:items-start md:m-0  w-full h-auto m-auto bg-[#fff8f2] ">
          <UserProfile
            onClose={onClose}
            className={'bg-[#fff8f2]'}
            userId={userId}
            username={nameUser}
          />
          <div className="flex flex-col ml-auto mr-auto	 w-full h-auto my-5 bg-[#fff8f2] ">
            <UserProfileBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAnotherProfile;
