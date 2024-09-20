import Image from 'next/image';
import RatingStars from '../ratingStars/RatingStars';
import SaveRecipe from '../saveRecipe/SaveRecipe';
import LikeRecipe from '../likeRecipe/LikeRecipe';
import { Share2 } from 'react-feather';
import { useEffect, useState } from 'react';
import ModalRecipeDetail from '../modalRecipeDetail/ModalRecipeDetail';
import PopupProfile from '../popupProfile/PopupProfile';
import AnotherProfile from '../anotherProfile/AnotherProfile';
import Link from 'next/link';
import ModalAnotherProfile from '../modalAnotherProfile/ModalAnotherProfile';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../UserProvider';
// import rsat from '../ratingStars/rsat';
const CardRecipe = ({
  id,
  userId,
  title,
  image,
  description,
  ingredients,
  stepByStep,
  time,
  commensal,
  difficulty,
  category,
  subcategory,
  nameUser,
  dateCreation,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isModalAnotherVisible, setIsModalAnotherVisible] = useState(false);
  const { setToken } = useUserContext();
  const { user, setUser } = useUserContext();
  // const { dataRecipes, setDataRecipes } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      if (localStorage.user) {
        const currentUser = await JSON.parse(localStorage.user);
        setUser(currentUser);
      } else {
        router.push('/');
      }
    };

    checkToken();
  }, [setUser]);

  const handleModal = () => {
    // console.log(isVisible);
    setIsVisible(!isVisible);
  };
  const handleAnotherProfile = () => {
    setIsModalAnotherVisible(!isModalAnotherVisible);
  };
  // const [isNear, fromRef] = useNearsatcreen();
  return (
    <div>
      <ModalAnotherProfile
        isVisible={isModalAnotherVisible}
        onClose={handleAnotherProfile}
        title={title}
        image={image}
        userId={userId}
        description={description}
        category={category}
        subcategory={subcategory}
        nameUser={nameUser}
        dateCreation={dateCreation}
        time={time}
        commensal={commensal}
        difficulty={difficulty}
        ingredients={ingredients}
        stepByStep={stepByStep}
      />
      <ModalRecipeDetail
        isVisible={isVisible}
        onClose={handleModal}
        title={title}
        image={image}
        userId={userId}
        description={description}
        category={category}
        subcategory={subcategory}
        nameUser={nameUser}
        dateCreation={dateCreation}
        time={time}
        commensal={commensal}
        difficulty={difficulty}
        ingredients={ingredients}
        stepByStep={stepByStep}
      />
      <div className="m-3 w-[39rem] h-[37rem] bg-white rounded-3xl shadow-md">
        <div className="relative bg-black w-full h-[417px] rounded-3xl">
          {/* <img
            src={image}
            alt="image"
            className="w-full h-full rounded-3xl  object-contain"
          /> */}
          <div className="absolute top-4 right-4 ">
            {user?.userId !== userId ? <SaveRecipe idRecipe={id} /> : null}
            {/* <SaveRecipe idRecipe={id} />  */}
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
            onClick={handleModal}
          />
        </div>

        <div className="px-9 py-3">
          <div className="flex justify-between items-center">
            <p className=" text-sm">
              {(category === 'SWEET'
                ? 'Dulce'
                : category === 'SAVORY'
                  ? 'Salado'
                  : category === 'DRINKS_COCKTAILS'
                    ? 'Tragos y bebidas'
                    : category) +
                ' - ' +
                (subcategory || 'Subcategoria')}
            </p>
            <RatingStars rating={Math.floor(Math.random() * 5) + 1} />
          </div>
          <h3
            onClick={handleModal}
            className="text-2xl font-semibold cursor-pointer"
          >
            {title || 'Titulo'}
            {/* user:{user?.userId} */}
          </h3>
          <p className="text-[13px] h-[40px] items-start">{description || ''}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-start items-center -ml-3 ">
              <div className=" ">
                <Image
                  onClick={handleAnotherProfile}
                  className="w-[45px] h-[45px] rounded-full cursor-pointer"
                  width={300}
                  height={200}
                  src="/img/Registro ilustracion.svg"
                  alt="picture"
                />
              </div>
              <p
                onClick={handleAnotherProfile}
                className="cursor-pointer ml-2 text-start w-[160px] overflow-hidden text-ellipsis leading-tight font-semibold"
              >
                {nameUser}
              </p>
              {/* <div className="fixed">
                <AnotherProfile user={user} />
              </div> */}
              {/* <PopupProfile idUser={nameUser} /> */}
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
