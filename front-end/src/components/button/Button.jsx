'use client';
const Button = ({ className, children, typeBotton, stateModal }) => {
  return (
    <>
      <button id={typeBotton} onClick={stateModal} className={className}>
        {children}
      </button>
    </>
  );
};

export default Button;
