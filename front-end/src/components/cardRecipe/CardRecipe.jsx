import Image from 'next/image';
import RatingStars from '../ratingStars/RatingStars';
import SaveRecipe from '../saveRecipe/SaveRecipe';
// import rsat from '../ratingStars/rsat';
const CardRecipe = ({ user, title, image, description, category, subcategory }) => {
  // const [isNear, fromRef] = useNearsatcreen();
  return (
    <div>
      <div className="m-3 w-[39rem] h-[37rem] bg-white rounded-3xl shadow-md">
        <div className="relative bg-black w-full h-[417px] rounded-3xl">
          {/* <img
            src={image}
            alt="image"
            className="w-full h-full rounded-3xl  object-contain"
          /> */}
          <div className="absolute top-7 right-6 p-1">
            <SaveRecipe />
          </div>
          <Image
            className="w-full h-[417px] rounded-3xl object-contain"
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
            <p className=" text-sm">{category + ' - ' + subcategory}</p>
            <RatingStars rating={Math.floor(Math.random() * 5) + 1} />
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-[13px] h-[40px] items-start">{description}</p>
          <div className="flex justify-start items-center -ml-3 , mt-2">
            <div className=" ">
              <Image
                className="icon_profile w-[47px] h-[47px] rounded-full"
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
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
