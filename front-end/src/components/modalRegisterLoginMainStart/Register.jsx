/* global process */
import Image from 'next/image';
import { useState } from 'react';
import { registerFormDataInputs } from './helpers/registerFormDataInputs';
import validateRegister from './helpers/validateRegister';
import axios from 'axios';
import { X } from 'react-feather';
import { useRouter } from 'next/navigation';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;

const Register = ({ onClose, typeModal }) => {
  const initialStateDataInput = {
    name: '',
    email: '',
    password: '',
    // confirmPassword: '',
  };
  const [userDataInputs, setUserDataInputs] = useState(initialStateDataInput);
  const [errorDataInputs, setErrorDataInputs] = useState(initialStateDataInput);
  const router = useRouter();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserDataInputs({
      ...userDataInputs,
      [name]: value,
    });

    setErrorDataInputs(validateRegister({ ...userDataInputs, [name]: value }));
    console.log(errorDataInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDataInputs);
    const data = {
      username: userDataInputs.name,
      email: userDataInputs.email,
      password: userDataInputs.password,
    };
    console.log(data);
    axios
      .post(`${BACK_API_URL}/auth/register`, data)
      .then(({ data }) => data)
      .then(() => console.log('Usuario creado'))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="w-full px-14 py-20  flex xl:w-4/5 flex-col  items-center  ">
        <div className="xl:hidden absolute top-5 ">
          <h2 className="text-[16px] w-[15rem]  font-bold text-center">
            ¡Únete a nuestra comunidad de apasionados por la cocina!{' '}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="absolute xl:hidden top-5 right-5 p-1 rounded-lg text-gray-400  hover:bg-blue-900 hover:text-[#160852]"
        >
          <X />
        </button>
        <form onSubmit={handleSubmit}>
          {registerFormDataInputs.map(({ name, type, placeholder }) => {
            return (
              <div key={name} className="relative z-0  mb-6 group ">
                <input
                  id={name}
                  type={type}
                  name={name}
                  value={userDataInputs[name]}
                  className={`block px-2 h-[48px]  text-black py-2.5  w-[319px]
                  text-sm  bg-transparent border-2  border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0  peer rounded-lg ${errorDataInputs[name] ? 'focus:border-red-600 dark:border-red-600' : 'focus:border-green-600'}`}
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_email"
                  className={`peer-focus:text-sm  absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-[14px]  origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white left-3 px-1 pointer-events-none ${errorDataInputs[name] ? 'peer-focus:text-red-600 peer-focus:dark:text-red-600' : ''}`}
                >
                  {placeholder}
                </label>
                {errorDataInputs[name] ? (
                  <span className="absolute  text-red-500 block w-full text-[12px]">
                    {errorDataInputs[name]}
                  </span>
                ) : null}
              </div>
            );
          })}

          <button
            type="submit"
            disabled={
              userDataInputs.email.length === 0 ||
              Object.keys(errorDataInputs).some((e) => errorDataInputs[e])
            }
            className={` my-5  w-[319px] h-[48px] bg-[#F27B13] hover:bg-orange-300 hover:shadow-xl text-black font-semibold hover:text-black py-2 px-4 border hover:border-transparent rounded-lg ${
              userDataInputs.email.length === 0 ||
              Object.keys(errorDataInputs).some((e) => errorDataInputs[e])
                ? 'opacity-50 cursor-not-allowed disabled'
                : ''
            }`}
          >
            Registrarse
          </button>
        </form>

        <p className="mb-4 mt-2">o registrate con </p>
        <button
          type="button"
          onClick={onClose}
          className="   w-[319px] h-[48px] bg-slate-50 hover:bg-[#F27B13] shadow-xl hover:shadow-none text-black font-semibold hover:text-black py-2 px-4 border hover:border-transparent rounded-lg"
        >
          Registrarse con google
        </button>

        <p className="mt-12">
          ¿Ya tenes cuenta?{' '}
          <span
            id="login"
            onClick={typeModal}
            className="text-[#F27B13] cursor-pointer"
          >
            Iniciar sesión
          </span>
          <a href=""></a>
        </p>
      </div>

      <div className="hidden text-white  w-full  px-14 py-16 xl:bg-[#160852] xl:block">
        <button
          onClick={onClose}
          className="absolute  top-5 right-5 p-1 rounded-lg text-gray-400  hover:bg-blue-900 hover:text-[#160852]"
        >
          <X />
        </button>
        <h2 className="text-2xl font-bold text-center">
          ¡Únete a nuestra comunidad de apasionados por la cocina!{' '}
        </h2>
        <p className="text-center mt-4">¡Ser parte es fácil y gratuito! </p>
        <div className="flex  flex-col items-center justify-between ">
          <Image
            className="w-[25rem] mt-5"
            width={3000}
            height={2000}
            src="/img/Iniciar sesion ilustracion.svg"
            alt="picture"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
