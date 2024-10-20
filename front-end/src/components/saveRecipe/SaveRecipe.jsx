// import './saveRecipe.styles.css';
import { useEffect, useRef, useState } from 'react';
import './save.css';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import logOutHelper from '../helper/logOutHelper';
import { toast } from 'sonner';
import { CiSaveDown2 } from 'react-icons/ci';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BookmarkSlashIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { deletePSGItemFromPage } from '@/redux/pegeScrollGeneric/pegeScrollGenericSlice';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;

const SaveRecipe = ({ height, idRecipe }) => {
  const [isSave, setIsSave] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const pathname = usePathname();
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchSave = async () => {
      const stoken = await localStorage.getItem('token');
      const userInfo = await JSON.parse(localStorage.user);
      const response = await axios
        .get(`${BACK_API_URL}/favorites/user/${userInfo.userId}`, {
          headers: { Authorization: `Bearer ${stoken}` },
        })

        .catch((error) => console.log(error));
      // console.log(response?.data, 'aver');
      if (response?.data.length) {
        const data = response?.data[0].recipeList;
        const exists = data?.some((item) => item.id === idRecipe);
        // console.log(exists, 'exists');
        setIsSave(exists);
      }
    };
    fetchSave();
  }, []);

  // useEffect(() => {
  //   console.log(isSave, 'isSave Effect');
  // }, [isSave]);

  const handleSaveRecipe = async (e) => {
    console.log(pathname, 'pathname');
    e.preventDefault();
    // console.log(idRecipe, 'idRecipe');
    // Si ya hay una petición en curso, cancelarla
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    // Crear un nuevo AbortController
    abortControllerRef.current = new AbortController();

    const signal = abortControllerRef.current.signal;

    const userInfo = JSON.parse(localStorage.user);
    const stoken = localStorage.getItem('token');
    setIsSave(!isSave);
    // const state = isSave;
    if (!isSave) {
      // console.log(isSave, 'verdad');
      //! VERDADERO
      try {
        await axios
          .get(`${BACK_API_URL}/favorites/user/${userInfo.userId}`, {
            signal,
            headers: { Authorization: `Bearer ${stoken}` },
          })
          .then(({ data }) => data)
          .then((data) => {
            // console.log(data, 'guardo en verda?');
            if (data?.length === 0) {
              const userAndNameFavorites = {
                userId: userInfo.userId,
                name: 'Predeterminado',
              };
              axios
                .post(`${BACK_API_URL}/favorites/save`, userAndNameFavorites, {
                  signal,
                  headers: { Authorization: `Bearer ${stoken}` },
                })
                .then(({ data }) => data)
                .then((data) => {
                  // console.log(data, 'guardo en verda?');

                  axios
                    .post(
                      `${BACK_API_URL}/favorites/${data[0].id}/addRecipe/${idRecipe}`,
                      {
                        signal,
                        headers: { Authorization: `Bearer ${stoken}` },
                      },
                    )
                    .then(({ data }) => data)
                    // .then((data) => {
                    //   console.log(data, 'guardo en verda?');
                    // })
                    .catch((error) => console.log(error));
                })
                .catch((error) => {
                  // console.log(error);
                  console.log(error.status, 'error.status');
                  if (error.status === 500) {
                    logOutHelper();
                  }
                });
            } else {
              console.log(data[0].id, 'id');
              axios
                .post(
                  `${BACK_API_URL}/favorites/${data[0].id}/addRecipe/${idRecipe}`,
                  {
                    signal,
                    headers: { Authorization: `Bearer ${stoken}` },
                  },
                )
                .then(({ data }) => data)
                .then((data) => {
                  // console.log(data, 'guardo en verda?');
                  toast('Se guardo la receta', {
                    // position: 'bottom-center',
                    style: { background: '#ffb74d' },
                    icon: <BookmarkIcon />,
                  });
                })
                .catch((error) => console.log(error));
            }
          })
          .catch((error) => {
            // console.log(error);
            console.log(error.status, 'error.status');
            if (error.status === 500) {
              logOutHelper();
            }
          });
        // console.log(response?.data, 'guardo en verda?');
        // Si todo va bien, limpiar el AbortController
        abortControllerRef.current = null;
      } catch (error) {
        if (error.name === 'CanceledError') {
          console.log('La petición fue cancelada');
        } else {
          // Manejar errores normales y revertir la UI si falla

          console.error('Error al dar me gusta:', error);
        }
      }
    } else {
      //!falso
      // console.log('falso');
      // axios
      //   .post(`${BACK_API_URL}/favorites/1/${idRecipe}`)
      //   .then(({ data }) => data)
      //   .then((data) => console.log(data))
      //   .catch((error) => console.log(error));
      try {
        // quitar la receta de /recetas-guardadas
        if (pathname === '/recetas_guardadas') {
          dispatch(
            deletePSGItemFromPage({
              pageKey: 'recetas_guardadas',
              itemId: idRecipe,
            }),
          );
        }
        await axios
          .delete(`${BACK_API_URL}/favorites/1/removeRecipe/${idRecipe}`, {
            signal,
            headers: { Authorization: `Bearer ${stoken}` },
          })
          .then(({ data }) => data)
          .then((data) => {
            // console.log(data, 'guardo en falso?');
            toast('Se quito la receta', {
              // position: 'bottom-center',
              style: { background: '#ffb74d' },
              icon: <BookmarkSlashIcon />,
            });
          })
          .catch((error) => {
            // console.log(error);
            console.log(error, 'error.status');
            if (error.status === 500) {
              logOutHelper();
            }
          });
        // console.log(response?.data, 'guardo en falso?');
        // Si todo va bien, limpiar el AbortController
        abortControllerRef.current = null;
      } catch (error) {
        console.log(error);
        if (error.name === 'CanceledError') {
          console.log('La petición fue cancelada');
        } else {
          // Manejar errores normales y revertir la UI si falla

          console.error('Error al dar me gusta:', error);
        }
      }
    }
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
      <label className="containe flex justify-center align-center relative cursor-pointer">
        <input
          onClick={handleSaveRecipe}
          type="checkbox"
          className="absolute opacity-0 h-0 w-0 "
        />

        <svg
          id="iconSave-false"
          className={`${isSave === false ? 'visible' : 'hidden'}  fill-orange-300`}
          xmlns="http://www.w3.org/2000/svg"
          height={`${height || '30px'}`}
          viewBox="0 0 384 512"
        >
          <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path>
        </svg>

        <svg
          id="iconSave-true"
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
