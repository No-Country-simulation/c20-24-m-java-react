'use client';
import { use, useState } from 'react';
const UploadRecipe = (isVisible) => {
  const [steps, setSteps] = useState([1]);
  const [steps2, setSteps2] = useState([1]);

  const [ImagePrevius, setImagePrevious] = useState(null);
  const changeImage = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.file[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setImagePrevious(e.target.result);
    };
  };

  const initialStateDataInput = {
    title: '',
    overview: '',

    time: '',
    diners: '',

    ingredients: '',
    deacriptionsteps: '',

    // confirmPassword: '',
  };
  const [userDataInputs, setUserDataInputs] = useState(initialStateDataInput);
  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserDataInputs({
      ...userDataInputs,
      [name]: value,
    });
    console.log(userDataInputs);
    //setErrorDataInputs(validateRegister({ ...userDataInputs, [name]: value }));
    // console.log(errorDataInputs);
  };

  return (
    <div
      id="modal_main"
      //onClick={onClose}
      className={`z-10  flex justify-center items-center transition-colors      `}
    >
      <div
        id="modal_container"
        //onClick={(e) => e.stopPropagation()}
        className={`flex flex-col w-[50rem]  bg-white rounded-md p-10 `}
      >
        <h2 className="text-4xl font-bold mb-8">Compartir receta</h2>
        <p>Publicar una foto del plato terminado </p>

        {/*Subir imagenes */}
        <form action="#" className="space-y-6 mt-5 mb-5">
          <div className="border-dashed border-2 border-gray-400 rounded-3xl p-6 flex items-center justify-center">
            <label
              htmlFor="uploadImage"
              className="text-gray-600 text-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16l6-6m0 0l6 6m-6-6v12m6-12l6 6M16 7V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2"
                />
              </svg>
              <span className="block mt-2">
                Elija una imagen o arrástrela y suéltela aquí
              </span>
            </label>
            <input type="file" id="uploadImage" className="hidden" />
          </div>
          <div className="flex justify-center items-center">
            <img src={ImagePrevius} alt="" height="150px" width="250px" />
          </div>
        </form>

        <div className="flex justify-center items-center mt-5 mb-14">
          <button
            type="button"
            className="t w-72 h-10 bg-[#160852] hover:bg-[#7da626]  hover:text-black font-semibold rounded-2xl text-white ease-in duration-300 "
          >
            Subir Imagen
          </button>
        </div>

        <div>
          <label htmlFor="titulo" className="block font-medium text-gray-700 mt-2">
            Título
          </label>
          <input
            name="title"
            onChange={handleChange}
            value={userDataInputs['title']}
            type="text"
            id="titulo"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="descripcion"
            className="block font-medium text-gray-700 mt-2 "
          >
            Descripción
          </label>
          <textarea
            name="overview"
            onChange={handleChange}
            value={useState['overview']}
            id="descripcion"
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div className={`flex justify-start  mt-5 mb-5`}>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlfor="categoria"
            >
              Categoría
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7da626]"
              id="categoria"
            >
              <option value="">Seleccionar opción...</option>
              <option value="">Dulce</option>
              <option value="">Salado</option>
              <option value="">Tragos y bebidas</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4 mt-5 mb-5">
          <div className="w-1/3">
            <label
              htmlFor="tiempo"
              className="text-center block font-medium text-gray-700"
            >
              Tiempo
            </label>
            <input
              name="time"
              onChange={handleChange}
              value={useState['time']}
              type="text"
              id="tiempo"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="comensales"
              className="text-center block font-medium text-gray-700"
            >
              Comensales
            </label>
            <input
              name="diners"
              onChange={handleChange}
              value={useState['diners']}
              type="text"
              id="comensales"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="dificultad"
              className="text-center block font-medium text-gray-700"
            >
              Dificultad
            </label>
            <select
              id="dificultad"
              className="w-full p-2 border border-gray-300 rounded-md focus:border-[#7da626]"
            >
              <option value="">Seleccionar opción...</option>
              <option value="">Facil</option>
              <option value="">Intermedia</option>
              <option value="">Dificil</option>
            </select>
          </div>
        </div>

        {steps.map((step, index) => {
          return (
            <div key={index} className="w-full mt-5 mb-5">
              <label className="block font-medium text-gray-700">Ingredientes</label>
              <div className="flex space-x-4 mb-2">
                <input
                  name="ingredients"
                  onChange={handleChange}
                  value={useState['ingredients']}
                  type="text"
                  placeholder="Ingrediente"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  name="amount"
                  onChange={handleChange}
                  value={useState['amount']}
                  type="text"
                  placeholder="Cantidad"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <div className="w-full">
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7da626] "
                    id="categoria"
                  >
                    <option value="">Seleccionar opción...</option>
                    <option value="">Taza</option>
                    <option value="">Milimetros</option>
                    <option value="">Centimetros Cubicos</option>
                    <option value="">Litro</option>
                    <option value="">Cucharada</option>
                    <option value="">Cucharadita</option>
                    <option value="">Gramos</option>
                    <option value="">kilo</option>
                    <option value="">Onza</option>
                    <option value="">Libra</option>
                  </select>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-center mt-5 mb-5">
          <button
            onClick={() => setSteps([...steps, 1])}
            type="button"
            className="  w-44 h-10 bg-[#160852] hover:bg-[#7da626]  hover:text-black rounded-2xl font-semibold text-white ease-in duration-300"
          >
            + Ingrediente
          </button>
        </div>

        {steps2.map((step, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div key={index} className="mt-5 m-b5">
              <label className="block font-medium text-gray-700">Paso a paso</label>
              <div className="flex items-start space-x-4 mb-2">
                <label className="w-32 h-32 border border-dashed border-gray-400 rounded-md flex items-center justify-center cursor-pointer">
                  <span>Upload</span>
                  <input type="file" className="hidden" />
                </label>
                <textarea
                  name="deacriptionsteps"
                  onChange={handleChange}
                  value={useState['deacriptionsteps']}
                  className="w-full h-32 p-2 border border-gray-300 rounded-md"
                  rows="3"
                ></textarea>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-center mt-5 mb-5">
          <button
            onClick={() => setSteps2([...steps2, 1])}
            type="button"
            className="  w-44 h-10 bg-[#160852] hover:bg-[#7da626] hover:text-black rounded-2xl font-semibold text-white ease-in duration-300"
          >
            + Pasos
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#7da626] hover:bg-[#160852] hover:text-white font-semibold text-black py-2 rounded-2xl mt-5 mb-5 uppercase ease-in duration-300"
        >
          Compartir Receta
        </button>
      </div>
    </div>
  );
};
export default UploadRecipe;
