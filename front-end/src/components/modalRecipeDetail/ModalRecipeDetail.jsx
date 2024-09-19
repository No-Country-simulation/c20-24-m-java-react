import Image from 'next/image';
import { ArrowRight, Share2 } from 'react-feather';
import { MdOutlineNoFood } from 'react-icons/md';
import SaveRecipe from '../saveRecipe/SaveRecipe';
import LikeRecipe from '../likeRecipe/LikeRecipe';
import RatingStars from '../ratingStars/RatingStars';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { FaComments } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
const ModalRecipeDetail = ({
  isVisible,
  onClose,
  category,
  subcategory,
  title,
  description,
  image,
  time,
  commensal,
  difficulty,
  user,
}) => {
  return (
    <div
      id="modal_main"
      onClick={onClose}
      className={`fixed z-10   inset-0 flex justify-start items-center py-14 transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col overflow-auto h-[750px] w-[80rem] xl:ml-72 xl: xl:w-auto xl:max-w-screen-xl lg:mx-5 mx-5  bg-blue-400 rounded-md  shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div className={`flex flex-col justify-center items-center my-5`}>
          <div className="flex flex-col justify-center items-center rounded-3xl w-auto h-auto my-auto mx-1  md:flex md:flex-row-reverse xl:flex xl:justify-center xl:items-center xl:w-auto xl:h-auto xl:mx-1 xl:p-8  xl:bg-green-500 lg:bg-pink-900 md:bg-deep-orange-700 sm:bg-amber-400 bg-pink-400    md:w-auto md:h-auto md:mx-2 sm:w-auto sm:h-auto sm:mx-1 sm:flex sm:flex-col sm:justify-center sm:items-center ">
            <div className="mb-1 mx-10 bg-blue-gray-800 w-auto h-auto rounded-3xl my-5 ">
              {/* <img
                src={image}
                alt="image"
                className="w-full h-full rounded-3xl  object-contain"
              /> */}
              {image ? (
                <Image
                  className="w-full h-full rounded-[20px] object-cover"
                  width={80}
                  height={80}
                  src={image}
                  sizes="(max-width: 380px) 50vw,400px"
                  // placeholder="blur"
                  alt="picture"
                  // priority={true}
                  loading="eager"
                />
              ) : (
                <div className="flex items-center justify-center">
                  <MdOutlineNoFood className="w-40 h-40" />
                </div>
              )}
            </div>

            <div className="xl:w-[600px] xl:h-[430px] w-[100] h-[100] ">
              <div className="flex justify-between items-center xl:ml-10 ml-10 mt-2">
                <p className=" text-sm">
                  {(category || 'Categoria') +
                    ' - ' +
                    (subcategory || 'Subcategoria')}
                </p>
              </div>
              <h3 className="text-[45px] w-56 font-semibold cursor-pointer ml-10">
                {title || 'Titulo'}
              </h3>
              <p className="text-[17px] overflow-auto  h-[100px] items-start leading-5 ml-10 ">
                {description || ''}
              </p>
              <div className="flex justify-center items-center  ">
                {/* <Image
                  className="bg-[#7DA626] "
                  width={80}
                  height={80}
                  src="/icons/hugeicons--time-01.svg"
                  alt="like"
                /> */}
                <div className="grid  grid-cols-3 gap-3 w-auto h-auto mx-1">
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`${time ? 'bg-[#7DA626]' : 'bg-[#696968]'} xl:w-[110px] xl:h-[110px] md:w-[110px] md:h-[110px] sm:w-[110px] sm:h-[110px] w-[90px] h-[90px] flex flex-col justify-center items-center rounded-xl`}
                    >
                      <svg
                        className="mb-1 text-white w-auto h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="0.8"
                          color="currentColor"
                        >
                          <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                          <path d="M12.008 10.508a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 0V7m3.007 8.02l-1.949-1.948" />
                        </g>
                      </svg>
                      <p className="text-white text-[17px]">Tiempo</p>
                    </div>
                    <p className="text-[20px] font-semibold mt-2">{time || '-'}</p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`${commensal ? 'bg-[#7DA626]' : 'bg-[#696968]'} xl:w-[110px] xl:h-[110px] md:w-[110px] md:h-[110px] sm:w-[110px] sm:h-[110px] w-[90px] h-[90px] flex flex-col justify-center items-center rounded-xl`}
                    >
                      <svg
                        className="mb-1 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M3.743 2.816A.88.88 0 0 1 5.5 2.88v4.494a.625.625 0 1 0 1.25 0V2.75a.75.75 0 0 1 1.5 0v4.624a.625.625 0 1 0 1.25 0V2.88a.88.88 0 0 1 1.757-.064C11.3 3.428 11.5 6.37 11.5 8c0 1.35-.67 2.544-1.692 3.267c-.216.153-.268.315-.263.397c.123 1.878.455 7.018.455 7.833a2.5 2.5 0 0 1-5 0c0-.816.332-5.955.455-7.833c.005-.082-.047-.244-.263-.397A4 4 0 0 1 3.5 8c0-1.63.2-4.572.243-5.184M13 7.75A5.75 5.75 0 0 1 18.75 2a.75.75 0 0 1 .75.75v8.5c0 .318.106 1.895.225 3.642l.005.083c.13 1.908.27 3.983.27 4.522a2.5 2.5 0 0 1-5 0c0-.514.128-2.611.252-4.534c.062-.971.125-1.912.172-2.61l.023-.353h-.697A1.75 1.75 0 0 1 13 10.25z"
                        />
                      </svg>
                      <p className="text-white text-[17px]">Comensales</p>
                    </div>
                    <p className="text-[20px] font-semibold mt-2">
                      {commensal || '-'}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`${difficulty ? 'bg-[#7DA626]' : 'bg-[#696968]'}  xl:w-[110px] xl:h-[110px] md:w-[110px] md:h-[110px] sm:w-[110px] sm:h-[110px] w-[90px] h-[90px] flex flex-col justify-center items-center rounded-xl`}
                    >
                      <svg
                        className="mb-1 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="0.8"
                          color="currentColor"
                        >
                          <path d="M7 18v-2m5 2v-3m5 3v-5M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                          <path d="M5.992 11.486c2.155.072 7.042-.253 9.822-4.665m-1.822-.533l1.876-.302c.228-.029.564.152.647.367l.495 1.638" />
                        </g>
                      </svg>
                      <p className="text-white text-[17px]">Dificultad</p>
                    </div>
                    <p className="text-[20px] font-semibold mt-2">
                      {difficulty || '-'}
                    </p>
                  </div>
                </div>
              </div>
              {/* user */}
              <div className="flex justify-start items-center mx-10 my-10">
                <div className=" ">
                  <Image
                    className=" w-[45px] h-[45px] rounded-full"
                    width={300}
                    height={200}
                    src="/img/Registro ilustracion.svg"
                    alt="picture"
                  />
                </div>
                <p className="mx-auto text-start w-[160px] overflow-hidden text-ellipsis leading-tight font-semibold">
                  {user || 'Anonimo'}
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-center items-center w-full">
            <div className="my-3 mx-1 flex justify-center items-center p-3 rounded-3xl  h-auto xl:w-[69rem] md:w-full sm:w-full bg-[#33cfa8]">
              <div className="grid grid-cols-3 gap-4 justify-center items-center">
                <div className="flex flex-col justify-center items-center mx-5">
                  <Share2 height={23} />
                  <p className="mt-2 text-center">Compartir</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-5">
                  <SaveRecipe height={23} />
                  <p className="mt-2 text-center">Guardar</p>
                </div>
                <div className="flex flex-col justify-center items-center mx-5">
                  <LikeRecipe height={23} />
                  <p className="mt-2 text-center">Me gusta</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mx-5">
                <p className="text-[17px] text-center">Calificación:</p>
                <RatingStars className="mt-2 flex justify-center items-center" />
              </div>
            </div>
          </div>

          <div className="xl:flex xl:flex-row md:flex md:flex-row sm:flex sm:flex-col justify-between items-start mx-1">
            <div className="w-auto h-auto mx-1 flex flex-col justify-center items-center rounded-3xl bg-[#fff8f2] my-1">
              <h3 className="text-2xl mt-1 font-semibold">Paso a paso</h3>
              <Image
                sizes="(max-width: 380px) 50vw,400px"
                height={100}
                width={100}
                className=" pt-5 mb-5 top-[5px] w-auto mx-auto"
                src="/img/test.svg"
              />

              <ol class="list-decimal my-3 mx-3  ">
                <li className="mx-2 my-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique, iure iusto illum, eos dicta illo exercitationem in
                    voluptatem, tempore eaque doloremque deleniti quod odio
                    perferendis repellat esse obcaecati dolorum dolores. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dignissimos culpa
                    doloribus blanditiis debitis hic quo, ab nisi ipsa sapiente
                    asperiores non! Velit maxime fuga at quod perferendis tempora
                    nesciunt dolore? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quod quasi aspernatur tempore, animi saepe
                    consectetur ex sit necessitatibus? Sit vitae consequatur magnam
                    obcaecati incidunt. Et quas dicta adipisci nostrum nemo.
                  </p>
                </li>
                <Image
                  sizes="(max-width: 380px) 50vw,400px"
                  height={100}
                  width={100}
                  className=" pt-5 mb-5 top-[5px] w-auto mx-auto"
                  src="/img/test.svg"
                />
                <li className="mx-2 my-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique, iure iusto illum, eos dicta illo exercitationem in
                    voluptatem, tempore eaque doloremque deleniti quod odio
                    perferendis repellat esse obcaecati dolorum dolores. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dignissimos culpa
                    doloribus blanditiis debitis hic quo, ab nisi ipsa sapiente
                    asperiores non! Velit maxime fuga at quod perferendis tempora
                    nesciunt dolore? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quod quasi aspernatur tempore, animi saepe
                    consectetur ex sit necessitatibus? Sit vitae consequatur magnam
                    obcaecati incidunt. Et quas dicta adipisci nostrum nemo.
                  </p>
                </li>
              </ol>
            </div>
            <div className="">
              <div className="flex flex-col  xl:w-[400px] w-auto h-auto my-2 mx-1 p-3 rounded-2xl  bg-[#fff8f2]">
                <h3 className="text-2xl font-semibold ml-5">Ingredientes</h3>
                <div className="flex justify-center items-center pt-5 ml-5 pb-5">
                  <FaCircleArrowRight className="w-[23px] h-[23px]" />
                  <p className="ml-1">Ingredientes 250g</p>
                </div>
                <div className="flex justify-center items-center pt-5 ml-5 pb-5">
                  <FaCircleArrowRight className="w-[23px] h-[23px]" />
                  <p className="ml-1">Ingredientes 250g</p>
                </div>
                <div className="flex justify-center items-center pt-5 ml-5 pb-5">
                  <FaCircleArrowRight className="w-[23px] h-[23px]" />
                  <p className="ml-1">Ingredientes 250g</p>
                </div>
                <div className="flex justify-center items-center pt-5 ml-5 pb-5">
                  <FaCircleArrowRight className="w-[23px] h-[23px]" />
                  <p className="ml-1">Ingredientes 250g</p>
                </div>
                <div className="flex justify-center items-center pt-5 ml-5 pb-5">
                  <FaCircleArrowRight className="w-[23px] h-[23px]" />
                  <p className="ml-1">Ingredientes 250g</p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mx-1   rounded-2xl bg-[#fff8f2] ">
                <h3 className="text-ml font-semibold mt-5 ">
                  ¿Que te parecio la receta?
                </h3>
                <RatingStars className="m-24 p-36" />
                <p className="felx justify-center items-center text-center mb-5 "></p>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex flex-col it w-auto h-auto mx-1 my-2 p-3 rounded-2xl bg-[#fff8f2]">
                  <div className="flex pt-5 ml-5 pb-5">
                    <FaComments className="w-[23px] h-[23px]" />
                    <p className="ml-1">Comentarios</p>
                  </div>
                  <div className="flex pt-5 ml-5 pb-5">
                    <CgProfile className="w-[23px] h-[23px]" />
                    <p className="ml-1">Nombre 27 de agosto 2024, 14:30 pm </p>
                  </div>

                  <p className="flex flex-wrap ml-5 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique, iure iusto illum, eos dicta illo exercitationem in
                    voluptatem,
                  </p>
                  <br />
                  <div className="flex pt-5 ml-5 pb-5">
                    <CgProfile className="w-[23px] h-[23px]" />
                    <p className="ml-1">Nombre 27 de agosto 2024, 14:30 pm </p>
                  </div>

                  <p className="ml-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique, iure iusto illum, eos dicta illo exercitationem in
                    voluptatem,
                  </p>
                  <br />
                  <div className="flex pt-5 ml-5 pb-5">
                    <CgProfile className="w-[23px] h-[23px]" />
                    <p className="ml-1">Nombre 27 de agosto 2024, 14:30 pm </p>
                  </div>

                  <p className="ml-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique, iure iusto illum, eos dicta illo exercitationem in
                    voluptatem,
                  </p>

                  <div className="flex items-center mt-5 ml-5">
                    <button className="bg-[#7da626] p-2 rounded-full text-white w-10 h-10"></button>
                    <input
                      type="text"
                      placeholder="Escribir comentario"
                      className="flex-1 p-2 ml-2 border border-gray-300 rounded-full focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRecipeDetail;
