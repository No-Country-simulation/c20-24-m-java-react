const ModalTest = ({ isVisible, onClose }) => {
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-10   inset-0 flex justify-start items-center py-14 transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={` h-[calc(var(--vh, 1vh) * 100)] flex flex-col overflow-auto h-[800px] w-[80rem] xl:ml-72 xl:mr-40  xl:max-w-screen  lg:mx-5 mx-5  bg-white rounded-md  shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <h1>ModalTest</h1>
      </div>
    </div>
  );
};

export default ModalTest;
