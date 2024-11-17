import Image from 'next/image';
import './modalEditProfile.style.css';
import { FaUser } from 'react-icons/fa6';
import { dataImput } from './helpers/editProfileDataImput';
import { useState } from 'react';
import { userLocalStorage } from '../helper/userLocalStorage';
import axios from 'axios';
import { X } from 'react-feather';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;

const ModalEditProfile = ({
  isVisible,
  onClose,
  imgBanner,
  imgUser,
  desc,
  name,
  socialUrl,
  loc,
  setUserProfile,
}) => {
  const userData = {
    nameUser: name,
    description: desc,
    socialLinks: socialUrl,
    location: loc,
    userImage: imgUser,
    bannerImage: imgBanner,
  };
  const userImgs = {
    userImage: '',
    bannerImage: '',
  };
  const [isUserData, setUserData] = useState(userData);
  const [isImgUser, setImgUser] = useState(userImgs);
  // const [ImagePrevius, setImagePrevious] = useState(imgUser);

  const changeImage = (e) => {
    const { value, name } = e.target;
    const reader = new FileReader();
    // console.log(e.target.files[0]);
    const img = e.target.files[0];
    // console.log(img);
    reader.readAsDataURL(img);
    reader.onload = (e) => {
      e.preventDefault();
      setUserData({
        ...isUserData,
        [name]: e.target.result,
      });
      // setImagePrevious(e.target.result);
      // setImagePrevious(e.target.result);
    };
    setImgUser({ ...isImgUser, [name]: img });
    // setUserData({
    //   ...isUserData,
    //   [name]: img,
    // });
    // console.log(userDataImage);
    // console.log(userDataImage);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...isUserData,
      [name]: value,
    });

    // console.log(isUserData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, token } = userLocalStorage();
    setUserProfile({ ...isUserData });
    // const userInfo = {
    //   userId: data.userId,
    //   username: data.username,
    //   // email: data.user.email,
    //   rol: data.rol || null,
    //   imageUser: data.userImage || null,
    // };
    // localStorage.setItem('user', JSON.stringify(userInfo));
    axios
      .put(
        `${BACK_API_URL}/userProfile/${user.userId}/update-user-profile
`,
        isUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(({ data }) => console.log(data))
      .then((data) => {
        if (isImgUser.userImage !== '') {
          // console.log(isImgUser.userImage);
          const formData = new FormData();

          formData.append('image', isImgUser.userImage);

          // console.log(formData?.image[0], 'formData.image[0]');

          const file = {
            image: formData.get('image'),
          };
          // console.log(file, 'file');
          axios
            .put(
              `${BACK_API_URL}/userProfile/${user.userId}/update-imageUser`,
              file,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data',
                },
              },
            )
            .then(({ data }) => data)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.log(err));
        }
        if (isImgUser.bannerImage !== '') {
          const formData = new FormData();

          formData.append('image', isImgUser.bannerImage);

          // console.log(formData?.image[0], 'formData.image[0]');

          const file = {
            banner: formData.get('image'),
          };
          // console.log(file, 'file');
          axios
            .put(`${BACK_API_URL}/userProfile/${user.userId}/update-banner`, file, {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(({ data }) => data)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
    // console.log(isUserData);
  };
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-50 cursor-default   inset-0 flex justify-start items-center py-14 transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={` h-[calc(var(--vh, 1vh) * 100)] absolute right-0 top-0 left-0 bottom-0 m-auto flex flex-col overflow-auto h-[600px] w-[650px]   bg-white rounded-[4px]  shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div className="relative h-[170px] bg-black ">
          <button
            onClick={onClose}
            className="absolute z-30  top-3 right-3 p-1 rounded-lg text-gray-400  hover:bg-[#69696965] hover:text-[#160852]"
          >
            <X />
          </button>
          <input
            type="file"
            name="bannerImage"
            id="uploadImage"
            className="edit_profile_input_hover outline-none absolute m-0 p-0 w-full h-full cursor-pointer opacity-0 z-20 hover:bg-[#69696965]"
            accept="image/*"
            onChange={(e) => {
              changeImage(e);
            }}
          />
          {isUserData.bannerImage ? (
            <>
              <Image
                className="absolute  h-[170px] w-full object-cover"
                width={60}
                height={60}
                sizes="(max-width: 1080px) 50vw,400px"
                src={isUserData.bannerImage}
                alt="picture"
              />
              <div className="edit_profile_img_hover absolute inset-0 w-full h-full group hover:bg-[#69696965] "></div>
            </>
          ) : null}
        </div>
        <div className="absolute top-[100px] left-[30px] flex justify-center items-center  mt-1 bg-[#fff8f2] w-[152px] h-[152px] rounded-[50%] shadow-md ">
          <div className="relative w-[150px] h-[150px] rounded-[50%]">
            <input
              type="file"
              name="userImage"
              id="uploadImage"
              className="edit_profile_input_hover outline-none absolute m-0 p-0 w-full h-full cursor-pointer opacity-0 z-20"
              accept="image/*"
              onChange={(e) => {
                changeImage(e);
              }}
            />
            {isUserData.userImage ? (
              <>
                <Image
                  className=" w-[150px] h-[150px] rounded-[50%]"
                  width={80}
                  height={80}
                  sizes="(max-width: 380px) 50vw,400px"
                  src={isUserData.userImage}
                  alt="picture"
                />
                <div className="edit_profile_img_hover absolute inset-0 w-full h-full group hover:bg-[#69696965] rounded-[50%]"></div>
              </>
            ) : (
              // <img
              //   src={userData.userImage}
              //   alt="picture"
              //   className="w-[150px] h-[150px] rounded-[50%]"
              // />
              <FaUser className="rounded-full w-[140px] h-[140px]" />
            )}
          </div>
        </div>
        <div className="w-[319px] ml-[230px] mt-10">
          {/* {console.log(dataImput)} */}
          <form action="" onSubmit={handleSubmit}>
            {dataImput?.map(({ name, type, placeholder }) => {
              return (
                <div key={name} className="relative z-0  mb-6 group ">
                  <input
                    id={name}
                    type={type}
                    name={name}
                    value={isUserData[name]}
                    className={`block px-2 h-[48px]  text-black py-2.5  w-[319px]
                    text-sm  bg-transparent border-2  border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0  peer rounded-lg $`}
                    placeholder=" "
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="floating_email"
                    className={`peer-focus:text-sm  absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-[14px]  origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white left-3 px-1 pointer-events-none `}
                  >
                    {placeholder}
                  </label>
                </div>
              );
            })}
            <button
              type="submit"
              className="w-[319px] h-[48px] bg-[#F27B13] hover:bg-[#160852] hover:shadow-xl text-black font-semibold hover:text-white  px-4 border border-transparent hover:border-transparent rounded-[8px]"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModalEditProfile;
