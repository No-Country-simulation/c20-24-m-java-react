import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerFormDataInputs } from './helpers/registerFormDataInputs';

const Login = ({ onClose, typeModal }) => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-full px-14 py-20  flex xl:w-4/5 flex-col  items-center  ">
        <div className="xl:hidden absolute top-[1.6rem] ">
          <h2 className="text-[16px] w-[15rem]  font-bold text-center">
            ¡Qué alegría verte de nuevo!{' '}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="absolute xl:hidden top-5 right-5 p-1 rounded-lg text-gray-400  hover:bg-blue-900 hover:text-[#160852]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <form action="" className=" ">
          {registerFormDataInputs
            .filter((input) => input.name !== 'name')
            .map(({ name, type, placeholder }) => {
              return (
                <div key={name} class="relative z-0  mb-6 group ">
                  <input
                    id={name}
                    type={type}
                    name={name}
                    value={userDataInputs[name]}
                    className="block px-2 h-[48px]  text-black py-2.5  w-[319px]
                  text-sm  bg-transparent border-2  border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer rounded-lg"
                    placeholder=" "
                    onChange={handleChange}
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:text-sm  absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-[14px]  origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white left-3 px-1 pointer-events-none"
                  >
                    {placeholder}
                  </label>
                </div>
              );
            })}

          <button class=" my-5  w-[319px] h-[48px] bg-[#F27B13] hover:bg-orange-300 hover:shadow-xl text-black font-semibold hover:text-black py-2 px-4 border hover:border-transparent rounded-lg">
            Iniciar sesion
          </button>
        </form>
        <p className="mb-4 mt-2">o iniciar sesion con </p>
        <button
          type="button"
          onClick={onClose}
          class="   w-[319px] h-[48px] bg-slate-50 hover:bg-[#F27B13] shadow-xl hover:shadow-none text-black font-semibold hover:text-black py-2 px-4 border hover:border-transparent rounded-lg"
        >
          Iniciar sesion con google
        </button>

        <p className="mt-12">
          ¿No tenes cuenta?{' '}
          <span
            id="register"
            onClick={typeModal}
            className="text-[#F27B13] cursor-pointer"
          >
            Registrarme
          </span>
        </p>
      </div>

      <div className="hidden text-white  w-full  px-14 py-16 xl:bg-[#160852] xl:block">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-gray-400  hover:bg-blue-900 hover:text-[#160852]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-center">
          ¡Qué alegría verte de nuevo!{' '}
        </h2>
        <p className="text-center mt-4">
          Inicia sesión para continuar explorando deliciosas recetas y compartiendo
          tus propias creaciones.{' '}
        </p>
        <div className="flex  flex-col items-center justify-between ">
          <Image
            className="w-3/4 mt-5"
            width={3000}
            height={2000}
            src="/img/Registro ilustracion.svg"
            alt="picture"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
