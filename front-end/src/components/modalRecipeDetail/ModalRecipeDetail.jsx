import Image from 'next/image';
import { Share2 } from 'react-feather';
import { MdOutlineNoFood } from 'react-icons/md';
import SaveRecipe from '../saveRecipe/SaveRecipe';
import LikeRecipe from '../likeRecipe/LikeRecipe';
import RatingStars from '../ratingStars/RatingStars';
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
      className={`fixed z-10  inset-0 flex justify-start items-center transition-colors  ${isVisible ? 'visible bg-black/55  inset-0  backdrop-blur-md  ' : 'invisible'}  `}
    >
      <div
        id="modal_container"
        onClick={(e) => e.stopPropagation()}
        className={`w-[28rem] overflow-auto xl:h-[800px] p-2 fixed right-[15%] xl:w-auto xl:max-w-screen-xl bg-white rounded-md   shadow transition-all ${isVisible ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <div className={`flex flex-col justify-center items-center`}>
          <div className="flex p-6 rounded-3xl bg-[#fff8f2]">
            <div className="w-[600px] h-[430px]">
              <div className="flex justify-between items-center">
                <p className=" text-sm">
                  {(category || 'Categoria') +
                    ' - ' +
                    (subcategory || 'Subcategoria')}
                </p>
              </div>
              <h3 className="text-[45px] w-56 font-semibold cursor-pointer">
                {title || 'Titulo'}
              </h3>
              <p className="text-[17px] overflow-auto  h-[100px] items-start leading-5">
                {description || ''}
              </p>
              <div className="flex justify-center items-center">
                {/* <Image
                  className="bg-[#7DA626] "
                  width={80}
                  height={80}
                  src="/icons/hugeicons--time-01.svg"
                  alt="like"
                /> */}
                <div className="grid  grid-cols-3 gap-3 g w-[400px]">
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className={`${time ? 'bg-[#7DA626]' : 'bg-[#696968]'}  w-[110px] h-[110px] flex flex-col justify-center items-center rounded-xl`}
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
                      className={`${commensal ? 'bg-[#7DA626]' : 'bg-[#696968]'}  w-[110px] h-[110px] flex flex-col justify-center items-center rounded-xl`}
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
                      className={`${difficulty ? 'bg-[#7DA626]' : 'bg-[#696968]'}  w-[110px] h-[110px] flex flex-col justify-center items-center rounded-xl`}
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
              <div className="flex justify-start items-center -ml-3 mt-14">
                <div className=" ">
                  <Image
                    className="w-[45px] h-[45px] rounded-full"
                    width={300}
                    height={200}
                    src="/img/Registro ilustracion.svg"
                    alt="picture"
                  />
                </div>
                <p className="ml-2 text-start w-[160px] overflow-hidden text-ellipsis leading-tight font-semibold">
                  {user || 'Anonimo'}
                </p>
              </div>
            </div>
            <div className="relative ml-10 bg-blue-gray-800 w-[430px] h-[430px] rounded-3xl">
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
          </div>
          {/*  */}
          <div className="w-[1118px] my-3 flex  p-3 rounded-3xl bg-[#fff8f2]">
            <div className="w-[600px] grid grid-cols-3 gap-1">
              <div className="flex  justify-center items-center">
                <Share2 className="w-[23px] h-[23px]" />
                <p className="ml-1">Compartir</p>
              </div>
              <div className="flex  justify-center items-center">
                <SaveRecipe height={23} />
                <p className="ml-1">Guardar</p>
              </div>
              <div className="flex  justify-center items-center">
                <LikeRecipe height={23} />
                <p className="ml-1">Me gusta</p>
              </div>
            </div>
            <div className="w-[450px] ml-10 flex justify-center items-center">
              <p className="text-[17px]">Calificacion:</p>
              <RatingStars />
            </div>
          </div>
          {/*  */}
          <div className="flex justify-between items-start">
            <div className="w-[680px] h-[1000px] my-3 mx-3 flex flex-col p-3 rounded-3xl bg-[#fff8f2]">
              <h3 className="text-2xl font-semibold">Paso a paso</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
                iure iusto illum, eos dicta illo exercitationem in voluptatem,
                tempore eaque doloremque deleniti quod odio perferendis repellat esse
                obcaecati dolorum dolores. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dignissimos culpa doloribus blanditiis debitis hic
                quo, ab nisi ipsa sapiente asperiores non! Velit maxime fuga at quod
                perferendis tempora nesciunt dolore? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod quasi aspernatur tempore, animi
                saepe consectetur ex sit necessitatibus? Sit vitae consequatur magnam
                obcaecati incidunt. Et quas dicta adipisci nostrum nemo.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[418px] h-auto my-3 flex  p-3 rounded-3xl bg-[#fff8f2]">
                <h3 className="text-2xl font-semibold">Ingredientes</h3>
                <div></div>
              </div>
              <div className="w-[418px] h-auto my-3 flex  p-3 rounded-3xl bg-[#fff8f2]">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Similique, iure iusto illum, eos dicta illo exercitationem in
                  voluptatem, tempore eaque doloremque deleniti quod odio perferendis
                  repellat esse obcaecati dolorum dolores. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dignissimos culpa doloribus
                  blanditiis debitis hic quo, ab nisi ipsa sapiente asperiores non!
                  Velit maxime fuga at quod perferendis tempora nesciunt dolore?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
                  aspernatur tempore, animi saepe consectetur ex sit necessitatibus?
                  Sit vitae consequatur magnam obcaecati incidunt. Et quas dicta
                  adipisci nostrum nemo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRecipeDetail;
