'use client';
import axios from 'axios';
import { use, useEffect, useState } from 'react';
import { toast } from 'sonner';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;
const UploadRecipe = ({ isVisible, onClose }) => {
  const [steps, setSteps] = useState([1]);
  const [steps2, setSteps2] = useState([1]);

  const [ImagePrevius, setImagePrevious] = useState(null);

  useEffect(() => {
    return () => {};
  }, []);
  const changeImage = (e) => {
    const { value, name } = e.target;
    const reader = new FileReader();
    // console.log(e.target.files[0]);
    const img = e.target.files[0];
    // console.log(img);
    reader.readAsDataURL(img);
    reader.onload = (e) => {
      e.preventDefault();
      setImagePrevious(e.target.result);
    };
    setUserDataImage(img);
    // console.log(userDataImage);
    // console.log(userDataImage);
  };

  const initialStateDataInput = {
    title: '',
    overview: '',
    category: '',

    time: '',
    diners: '',
    difficulty: '',

    ingredients0: '',
    ingredients1: '',
    ingredients2: '',
    ingredients3: '',
    amount0: '',
    amount1: '',
    amount2: '',
    amount3: '',
    measurement0: '',
    measurement1: '',
    measurement2: '',
    measurement3: '',

    // ingredients: '',
    step: '',

    // confirmPassword: '',
  };
  const initialStateDataImage = {
    image: '',
  };
  const [userDataInputs, setUserDataInputs] = useState(initialStateDataInput);
  const [userDataImage, setUserDataImage] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    // console.log(e.target);
    setUserDataInputs({
      ...userDataInputs,
      [name]: value,
    });

    // console.log(userDataInputs);
    //setErrorDataInputs(validateRegister({ ...userDataInputs, [name]: value }));
    // console.log(errorDataInputs);
  };

  // const armArrayIngredients = () => {
  //   for (let i = 0; i < steps; i++) {
  //     const key = `ingredients${i}`;
  //     console.log(userDataInputs.key);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await localStorage.getItem('token');
    const user = await localStorage.getItem('user');
    console.log(user, 'Useraaa');

    const data = {
      userId: JSON.parse(user).userId,
      title: userDataInputs.title,
      description: userDataInputs.overview,
      category: userDataInputs.category,
      time: userDataInputs.time,
      difficulty: userDataInputs.difficulty,
      commensal: userDataInputs.diners,
      ingredients:
        userDataInputs.ingredients0 +
        ' ' +
        userDataInputs.amount0 +
        ' ' +
        userDataInputs.measurement0 +
        '|' +
        userDataInputs.ingredients1 +
        ' ' +
        userDataInputs.amount1 +
        ' ' +
        userDataInputs.measurement1 +
        '|' +
        userDataInputs.ingredients2 +
        ' ' +
        userDataInputs.amount2 +
        ' ' +
        userDataInputs.measurement2 +
        '|' +
        userDataInputs.ingredients3 +
        ' ' +
        userDataInputs.amount3 +
        ' ' +
        userDataInputs.measurement3,
      instructions: userDataInputs.step,
    };
    // console.log(token);
    toast.promise(
      axios
        .post(`${BACK_API_URL}/recipes/save`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => data)
        .then((data) => {
          console.log(data);
          console.log(userDataImage);
          // const imagen = userDataImage ? userDataImage : null;
          if (userDataImage) {
            const formData = new FormData();
            formData.append('image', userDataImage);
            formData.append('recipeId', data.id);
            // console.log(formData?.image[0]);
            const file = {
              recipeId: data.id,
              images: formData.get('image'),
            };
            console.log(formData, 'file');
            axios
              .post(`${BACK_API_URL}/recipes/upload-images`, file, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then(({ data }) => data)
              .then((data) => console.log(data))
              .catch((error) => console.log(error));
            onClose();
            // window.location.reload();
            // e.reset();
          }
          onClose();
        })
        .catch((error) => console.log(error)),
      {
        error: 'Error al conectar',
        loading: 'Publicando...',
        success: 'Receta publicada',
      },
    );
    // axios
    //   .post(`${BACK_API_URL}/recipes/save`, data, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //   .then(({ data }) => data)
    //   .then((data) => {
    //     console.log(data);
    //     console.log(userDataImage);
    //     // const imagen = userDataImage ? userDataImage : null;
    //     if (userDataImage) {
    //       const formData = new FormData();
    //       formData.append('image', userDataImage);
    //       formData.append('recipeId', data.id);
    //       // console.log(formData?.image[0]);
    //       const file = {
    //         recipeId: data.id,
    //         images: formData.get('image'),
    //       };
    //       console.log(formData, 'file');
    //       axios
    //         .post(`${BACK_API_URL}/recipes/upload-images`, file, {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //             'Content-Type': 'multipart/form-data',
    //           },
    //         })
    //         .then(({ data }) => data)
    //         .then((data) => console.log(data))
    //         .catch((error) => console.log(error));
    //       onClose();
    //       window.location.reload();
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-50  inset-0 flex justify-start items-center transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={`w-[28rem] overflow-auto xl:h-[800px] p-2 fixed  right-[15%] xl:w-[900px] xl:max-w-screen-xl bg-white rounded-md   shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div
          id=""
          //onClick={(e) => e.stopPropagation()}
          className={`flex flex-col   rounded-md p-10 `}
        >
          <h2 className="text-4xl font-bold mb-8">Compartir receta</h2>
          <p>Publicar una foto del plato terminado </p>
          <form onSubmit={handleSubmit}>
            {/*Subir imagenes */}
            <div action="#" className="space-y-6 mt-5 mb-5">
              <div className="relative  border-dashed border-2 border-gray-400 rounded-3xl p-6 flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-dashed hover:border-[#d0d7de]">
                {/* <label
                  htmlFor="uploadImage"
                  className="text-gray-600 text-center cursor-pointer"
                ></label> */}
                <input
                  type="file"
                  name="image"
                  id="uploadImage"
                  className=" outline-none absolute m-0 p-0 w-full h-full cursor-pointer opacity-0 "
                  accept="image/*"
                  onChange={(e) => {
                    changeImage(e);
                  }}
                />
                <div>
                  {ImagePrevius ? (
                    <img
                      src={ImagePrevius}
                      alt="picture"
                      className="w-[200px] h-[200px] object-cover"
                    />
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center items-center mt-5 mb-14">
              <button
                type="button"
                className="t w-72 h-10 bg-[#160852] hover:bg-[#7da626]  hover:text-black font-semibold rounded-2xl text-white ease-in duration-300 "
              >
                Subir Imagen
              </button>
            </div> */}

            <div>
              <label
                htmlFor="titulo"
                className="block font-medium text-gray-700 mt-2"
              >
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
                value={userDataInputs['overview']}
                id="descripcion"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <div className={`flex justify-start  mt-5 mb-5`}>
              <div>
                <label
                  class="block text-gray-700 font-semibold mb-2"
                  for="categoria"
                >
                  Categoría
                </label>
                <select
                  name="category"
                  onChange={handleChange}
                  value={userDataInputs['category']}
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7da626]"
                  id="categoria"
                >
                  <option value="UNSPECIFIED">Seleccionar opción...</option>
                  <option value="SWEET">Dulce</option>
                  <option value="SAVORY">Salado</option>
                  <option value="DRINKS_COCKTAILS">Tragos y bebidas</option>
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
                  value={userDataInputs['time']}
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
                  value={userDataInputs['diners']}
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
                  name="difficulty"
                  onChange={handleChange}
                  value={userDataInputs['difficulty']}
                  id="dificultad"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-[#7da626]"
                >
                  <option value="">Seleccionar opción...</option>
                  <option value="Facil">Facil</option>
                  <option value="Intermedia">Intermedia</option>
                  <option value="Dificil">Dificil</option>
                </select>
              </div>
            </div>
            <label className="block font-medium text-gray-700">Ingredientes</label>
            {steps.map((step, index) => {
              const ingredientsKey = `ingredients${index}`;
              const amountKey = `amount${index}`;
              const measurementKey = `measurement${index}`;
              return (
                <div key={index} className="w-full mt-5 mb-5">
                  <div className="flex space-x-4 mb-2">
                    <input
                      name={ingredientsKey}
                      onChange={handleChange}
                      value={userDataInputs[ingredientsKey]}
                      type="text"
                      placeholder="Ingrediente"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                      name={amountKey}
                      onChange={handleChange}
                      value={userDataInputs[amountKey]}
                      type="text"
                      placeholder="Cantidad"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <div className="w-full">
                      <select
                        name={measurementKey}
                        onChange={handleChange}
                        value={userDataInputs[measurementKey]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#7da626] "
                        id="categoria"
                      >
                        <option value="">Seleccionar opción...</option>
                        <option value="Taza">Taza</option>
                        <option value="Milimetros">Milimetros</option>
                        <option value="Centimetros Cubicos">
                          Centimetros Cubicos
                        </option>
                        <option value="Litro">Litro</option>
                        <option value="Cucharada">Cucharada</option>
                        <option value="Cucharadita">Cucharadita</option>
                        <option value="Gramos">Gramos</option>
                        <option value="kilo">kilo</option>
                        <option value="Onza">Onza</option>
                        <option value="Libra">Libra</option>
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-center items-center mt-5 mb-5">
              <button
                disabled={steps.length === 3}
                onClick={() => setSteps([...steps, 1])}
                type="button"
                className="bl  w-44 h-10 bg-[#160852] hover:bg-[#7da626]  hover:text-black rounded-2xl font-semibold text-white ease-in duration-300"
              >
                + Ingrediente
              </button>
            </div>

            {steps2.map((step, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div key={index} className="mt-5 m-b5">
                  <label className="block font-medium text-gray-700">
                    Paso a paso
                  </label>
                  <div className="flex items-start space-x-4 mb-2">
                    <label className="w-32 h-32 border border-dashed border-gray-400 rounded-md flex items-center justify-center cursor-pointer">
                      <span>Upload</span>
                      <input type="file" className="hidden" />
                    </label>
                    <textarea
                      name="step"
                      onChange={handleChange}
                      value={userDataInputs['step']}
                      className="w-full h-32 p-2 border border-gray-300 rounded-md"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-center items-center mt-5 mb-5">
              <button
                disabled={steps2.length === 1}
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default UploadRecipe;
