const Button = ({ className, children, typeBotton, handleOpenModal }) => {
  return (
    <>
      <button id={typeBotton} onClick={handleOpenModal} className={className}>
        {children}
      </button>
    </>
  );
};

export default Button;
