const PopupProfile = ({ children, idUser }) => {
  return (
    // <div className="group relative inline-block">
    //   {children}
    //   <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-500 text-white p-1 rounded absolute top-full mt-2">
    //     <h1>PopupProfile {idUser}</h1>
    //   </span>
    // </div>
    <div>
      <span>
        <h1>PopupProfile {idUser}</h1>
      </span>
    </div>
  );
};

export default PopupProfile;
