import Image from 'next/image';
import RatingStars from '../ratingStars/RatingStars';
import SaveRecipe from '../saveRecipe/SaveRecipe';
import LikeRecipe from '../likeRecipe/LikeRecipe';
import { Share2 } from 'react-feather';
import { useState } from 'react';
import ModalRecipeDetail from '../modalRecipeDetail/ModalRecipeDetail';
// import rsat from '../ratingStars/rsat';
const CardRecipe = ({ user, title, image, description, category, subcategory }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleModal = () => {
    console.log(isVisible);
    setIsVisible(!isVisible);
  };
  // const [isNear, fromRef] = useNearsatcreen();
  return (
    <div>
      <ModalRecipeDetail
        isVisible={isVisible}
        onClose={handleModal}
        category={category}
        subcategory={subcategory}
        title={title}
        description={description}
        image={image}
      />
      <div className="m-3 w-[39rem] h-[37rem] bg-white rounded-3xl shadow-md">
        <div className="relative bg-black w-full h-[417px] rounded-3xl">
          {/* <img
            src={image}
            alt="image"
            className="w-full h-full rounded-3xl  object-contain"
          /> */}
          <div className="absolute top-4 right-4 ">
            <SaveRecipe />
          </div>
          <Image
            className="w-full h-[417px] rounded-[20px] object-cover"
            width={80}
            height={80}
            src={image}
            sizes="(max-width: 380px) 50vw,400px"
            // placeholder="blur"
            alt="picture"
            // priority={true}
            loading="eager"
          />
        </div>

        <div className="px-9 py-3">
          <div className="flex justify-between items-center">
            <p className=" text-sm">
              {(category || 'Categoria') + ' - ' + (subcategory || 'Subcategoria')}
            </p>
            <RatingStars rating={Math.floor(Math.random() * 5) + 1} />
          </div>
          <h3
            onClick={handleModal}
            className="text-2xl font-semibold cursor-pointer"
          >
            {title || 'Titulo'}
          </h3>
          <p className="text-[13px] h-[40px] items-start">{description || ''}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-start items-center -ml-3 ">
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
                {user}
              </p>
            </div>

            <div className="flex justify-between items-center ">
              <LikeRecipe />
              <Image
                className=" rounded-full mx-2"
                width={30}
                height={30}
                src="/icons/vaadin_comments.svg"
                alt="picture"
              />
              <Share2 className="w-[2em] h-[2em]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;