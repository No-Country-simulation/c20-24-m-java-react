import Image from "next/image";

const ModalRegisterMainStart = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      id="modal_main"
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex"
    >
      <div
        id="modal_container"
        className="m-auto w-3/5 max-w-screen-xl max-h-full bg-slate-300 rounded-md "
      >
        {/* <div className="grid grid-cols-2 gap-3"> */}
        <div className="flex">
          <div className="px-14 py-20 bg-white flex w-4/5 flex-col  items-center  ">
            <form action="" className=" ">
              <div class="relative z-0  mb-6 group ">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block px-2 h-[48px]  text-black py-2.5  w-[319px]
                  text-sm  bg-transparent border-2  border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer rounded-lg"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:text-sm  absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-[14px]  origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white left-3 px-1 pointer-events-none"
                >
                  Nombre
                </label>
              </div>
              <div class="relative z-0  mb-6 group ">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block px-2 h-[48px]  text-black py-2.5  w-[319px] text-sm  bg-transparent border-2  border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer rounded-lg"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:text-sm  absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-[14px]  origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white left-3 px-1 pointer-events-none"
                >
                  Correo eletronico
                </label>
              </div>
              <div class="relative z-0  mb-6 group ">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block px-2 h-[48px]  text-black py-2.5  w-[319px] text-sm  bg-transparent border-2  border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-green-600 peer rounded-lg"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:text-sm  absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-[14px]   origin-[0] peer-focus:start-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white left-3 px-1 select-none pointer-events-none"
                >
                  Contraseña
                </label>
              </div>

              <button class=" my-5  w-[319px] h-[48px] bg-[#F27B13] hover:bg-orange-300 hover:shadow-xl text-black font-semibold hover:text-black py-2 px-4 border hover:border-transparent rounded-lg">
                Iniciar sesion
              </button>
            </form>
            <p className="mb-4 mt-2">o registrate con </p>
            <button
              type="button"
              onClick={onClose}
              class="   w-[319px] h-[48px] bg-slate-50 hover:bg-[#F27B13] shadow-xl hover:shadow-none text-black font-semibold hover:text-black py-2 px-4 border hover:border-transparent rounded-lg"
            >
              Registrarse con google
            </button>

            <p className="mt-12">
              ¿Ya tenes cuenta?{" "}
              <a href="" className="text-[#F27B13]">
                Iniciar sesión
              </a>
            </p>
          </div>

          <div className="text-white bg-[#160852] w-full px-14 py-16 ">
            <div></div>
            <h2 className="text-2xl font-bold text-center">
              ¡Únete a nuestra comunidad de apasionados por la cocina!{" "}
            </h2>
            <p className="text-center mt-4">¡Ser parte es fácil y gratuito! </p>
            <div className="flex  flex-col items-center justify-between ">
              <Image
                className="w-3/4 mt-5"
                width={3000}
                height={2000}
                src="/img/Iniciar sesion ilustracion.svg"
                alt="picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegisterMainStart;