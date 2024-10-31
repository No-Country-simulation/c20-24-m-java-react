import Image from 'next/image';
import './cardRecipe.style.css';
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
import { useDispatch } from 'react-redux';
import { setPageScrollPosition } from '@/redux/pageScroll/pageScrollSlice';
import { FaUser } from 'react-icons/fa6';
import ButtonOptionsRecipe from '../buttonOptionsRecipe/ButtonOptionsRecipe';

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
  imageUser,
  dateCreation,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isModalAnotherVisible, setIsModalAnotherVisible] = useState(false);
  const { setToken } = useUserContext();
  const { user, setUser } = useUserContext();
  // const { dataRecipes, setDataRecipes } = useUserContext();
  const dispatch = useDispatch();
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

  const handleClick = (e) => {
    e.preventDefault();
    const currentScroll = window.scrollY;
    // Guardar la posición actual del scroll en Redux
    // dispatch(setPageScrollPosition(currentScroll));
    // console.log(currentScroll, 'currentScrollBooton');
    // Luego navegar a la nueva página
    const href = e.currentTarget.getAttribute('href');
    router.push(href);
  };

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
      {/* <ModalAnotherProfile
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
      /> */}
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
        userIdLogin={user?.userId}
        idRecipe={id}
      />
      <div className="m-3 w-[39rem] h-[37rem] bg-white rounded-3xl shadow-md">
        <div className=" bg-black w-full h-[417px] rounded-3xl">
          <div className="relative  ">
            <div className="absolute   top-4 right-4 ">
              {user?.userId !== userId ? <SaveRecipe idRecipe={id} /> : null}
            </div>
          </div>
          <Image
            className=" w-full h-[417px] rounded-[20px] object-cover"
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
          <p className="text-[13px] h-[40px] items-start w-[500px] text-ellipsis        overflow-hidden  ">
            {description || ''}
          </p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex justify-start items-center -ml-3 ">
              <div className=" ">
                {imageUser ? (
                  <Image
                    onClick={handleAnotherProfile}
                    className="w-[45px] h-[45px] rounded-full cursor-pointer"
                    width={300}
                    height={200}
                    src="/img/Registro ilustracion.svg"
                    alt="picture"
                  />
                ) : (
                  <FaUser className="rounded-full w-[40px] h-[40px]" />
                )}
              </div>
              <Link
                href={`/${nameUser}`}
                // href={{
                //   pathname: `/perfil/${nameUser}`,
                //   query: { secreto: 'informacion_oculta' },
                // }}
                scroll={false}
                // onClick={handleClick}
              >
                <p className="cursor-pointer ml-2 text-start w-[160px] overflow-hidden text-ellipsis leading-tight font-semibold">
                  {nameUser}
                </p>
              </Link>
              {/* <div className="fixed">
                <AnotherProfile user={user} />
              </div> */}
              {/* <PopupProfile idUser={nameUser} /> */}
            </div>

            <div className="flex justify-between items-center -mr-2">
              <LikeRecipe />
              <Image
                className=" rounded-full mx-2"
                width={30}
                height={30}
                src="/icons/vaadin_comments.svg"
                alt="picture"
              />
              <Share2 className="w-[2em] h-[2em]" />
              <ButtonOptionsRecipe idRecipe={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
