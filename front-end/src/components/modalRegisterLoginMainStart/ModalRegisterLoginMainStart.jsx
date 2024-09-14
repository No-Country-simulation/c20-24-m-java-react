import Login from './Login';
import Register from './Register';

const ModalRegisterLoginMainStart = ({ isVisible, onClose, typeModal }) => {
  // if (!isVisible.modal) return null;
  // console.log(isVisible);
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-10  inset-0 flex justify-center items-center transition-colors  ${isVisible.modal ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={`w-[28rem] xl:m-auto xl:w-3/5 xl:max-w-screen-xl xl:max-h-full bg-white rounded-md   shadow transition-all ${isVisible.modal ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div className={`flex`}>
          {isVisible.typeModal === 'login' ? (
            <Login onClose={onClose} typeModal={typeModal} />
          ) : isVisible.typeModal === 'register' ? (
            <Register onClose={onClose} typeModal={typeModal} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ModalRegisterLoginMainStart;
