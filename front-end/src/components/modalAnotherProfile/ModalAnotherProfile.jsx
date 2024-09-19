import UserProfile from '../userProfile/UserProfile';
import UserProfileBody from '../userProfileBody/UserProfileBody';

const ModalAnotherProfile = ({ onClose, isVisible }) => {
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-10   inset-0 flex justify-start items-center py-14 transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col overflow-auto h-[750px] w-[80rem] xl:ml-72 xl: xl:w-auto xl:max-w-screen-xl lg:mx-5 mx-5  bg-blue-400 rounded-md  shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div className=" h-[270px] bg-black ">
          <h1>Hola</h1>
        </div>
        <div className="w-[330px] h-[600px] fixed mt-[150px] mx-[100px]">
          <UserProfile onClose={onClose} />
        </div>
        <div className="ml-[500px] mr-[200px]	 mt-6 w-[[calc(var(--vh, 1vh) * 100)]] h-[270px] ">
          <UserProfileBody />
        </div>
      </div>
    </div>
  );
};

export default ModalAnotherProfile;
