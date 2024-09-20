// import './saveRecipe.styles.css';
import { useEffect, useState } from 'react';
import './save.css';
import axios from 'axios';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;

const SaveRecipe = ({ height, idRecipe }) => {
  const [isSave, setIsSave] = useState(false);
  useEffect(() => {
    const fetchRecipe = async () => {};
  });

  const handleSaveRecipe = () => {
    console.log(idRecipe);
    axios
      .post(`${BACK_API_URL}/favorites/1/${idRecipe}`)
      .then(({ data }) => data)
      .then((data) => console.log(data));
  };
  return (
    <>
      {/* <input type="checkbox" id="checkboxInput" />
      <label for="checkboxInput" class="bookmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          class="svgIcon"
        >
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
        </svg>
      </label> */}
      <label class="containe flex justify-center align-center relative cursor-pointer">
        <input
          onClick={handleSaveRecipe}
          type="checkbox"
          className="absolute opacity-0 h-0 w-0 "
        />

        <svg
          className={`${isSave === true ? 'hidden' : 'visible'}  fill-orange-300`}
          xmlns="http://www.w3.org/2000/svg"
          height={`${height || '30px'}`}
          viewBox="0 0 384 512"
        >
          <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
        </svg>

        <svg
          className={`${isSave === false ? 'hidden' : 'visible'} fill-orange-300`}
          xmlns="http://www.w3.org/2000/svg"
          height={`${height || '30px'}`}
          viewBox="0 0 384 512"
        >
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
        </svg>
      </label>
    </>
  );
};

export default SaveRecipe;
