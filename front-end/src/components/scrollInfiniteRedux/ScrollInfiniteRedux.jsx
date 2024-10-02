'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import CardRecipe from '../cardRecipe/CardRecipe';
import axios from 'axios';
import { useUserContext } from '../UserProvider';
import { usePathname, useRouter } from 'next/navigation';

import { useSelector, useDispatch } from 'react-redux';
import {
  addPageScrollItem,
  resetsetPageScroll,
  setPageScrollCurrentPage,
  setPageScrollItem,
  setPageScrollPosition,
  setPageScrollTypeList,
} from '@/redux/pageScroll/pageScrollSlice';
import {
  addPegeScrollGenericItems,
  resetsetPegeScrollGeneric,
  setPegeScrollGenericCurrentPage,
  setPegeScrollGenericScrollPosition,
} from '@/redux/pegeScrollGeneric/pegeScrollGenericSlice';
import { setResetState } from '@/redux/resetStatePage/resetStatePageSlice';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;
const ScrollInfiniteRedux = ({ type }) => {
  // const { items, scrollPosition, currentPage, typeList } = useSelector(
  //   (state) => state.pageScrollSlice,
  // );
  const plus = useSelector((state) => state.resetStatePageSlice.resetState);
  // console.log(plus, 'averadasda');
  const dispatch = useDispatch();
  const pathname = usePathname();
  const pat =
    pathname === '/categoria/dulce'
      ? 'SWEET'
      : pathname === '/categoria/salado'
        ? 'SAVORY'
        : pathname === '/categoria/tragos_y_bebidas'
          ? 'DRINKS_COCKTAILS'
          : pathname === '/inicio'
            ? 'list'
            : pathname === '/recetas_guardadas'
              ? 'recetas_guardadas'
              : 'list';
  // console.log(pat, 'pat');
  const { items, scrollPosition, currentPage } = useSelector(
    (state) => state.pegeScrollGenericSlice.pages[pat],
  ) || { items: [], scrollPosition: 0, currentPage: 1 };
  // console.log(items, 'av');
  const [asType, setAsType] = useState(type);
  const [dataRecipes, setDataRecipes] = useState([]);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [scrollPositions, setScrollPositions] = useState(0);

  const itemsPerPage = 2;
  // const [currentPage, setCurrentPage] = useState(1);
  const elementRef = useRef(null);
  const scrollYRef = useRef(0);
  // Cancelar peticiones cuando la ruta cambia rápidamente
  const controllerRef = useRef(null); // Ref para AbortController
  const { setToken } = useUserContext();
  const { setUser } = useUserContext();

  // const { dataRecipes, setDataRecipes } = useUserContext();
  const router = useRouter();

  // Verificar si la ruta actual corresponde a una categoría o 'inicio'
  const isCategoryPage = pathname.startsWith('/categoria') || pathname === '/inicio';

  // Limpiar el estado cuando se cambie a otra categoría o la página de inicio
  useEffect(() => {
    if (isCategoryPage) {
      // dispatch(resetsetPegeScrollGeneric()); // Resetea solo en categorías
      // setHasMore(true); // Restaurar la paginación
    }
    // Cancelar cualquier petición anterior si la ruta cambia
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    return () => {
      // Cancelar petición cuando el componente se desmonta o cambia la ruta
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

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

  // Cargar productos al montar el componente o cambiar de página
  useEffect(() => {
    // setAsType(type);
    // const loadData = async () => {
    //   const stoken = await localStorage.getItem('token');
    //   setToken(stoken);

    //   const response = await axios.get(${BACK_API_URL}/recipes/list, {
    //     headers: {
    //       Authorization: Bearer ${stoken},
    //     },
    //   });
    //   // console.log(response.data, 'data');
    //   // return response.data;
    //   setDataRecipes(response.data);
    // };

    if (items.length === 0) {
      // console.log('avers');
      dispatch(resetsetPegeScrollGeneric());
      setHasMore(true);
      dispatch(setResetState(true));
      // fetchProducts(); // Si no hay productos, cargarlos
      // loadData();
      // setDataRecipes(data);
      // console.log(dataRecipes, 'dataRecipes');
    } else {
      // console.log('no avers');
      // console.log(scrollPosition, 'pageScrollView');
      // console.log(items, 'items');
      // console.log(currentPage, 'currentPage');
      setTimeout(() => {}, 0); // Restaurar el scroll
      window.scrollTo(0, scrollPosition); // Restaurar el scroll
    }
  }, []);

  // Guardar la posición del scroll en Redux
  useLayoutEffect(() => {
    const handleScroll = () => {
      // const currentScroll = window.scrollY;
      // setScrollPositions(currentScroll);
      // console.log(scrollPositions, 'scrollPositions');
      // dispatch(setPageScrollPosition(scrollPositions));
      // console.log(window.scrollY, 'scroll'); // Guardar la posición actual
      scrollYRef.current = window.scrollY;
    };
    // handleScroll();
    window.addEventListener('scroll', handleScroll);
    // router.events.on('routeChangeStart', handleScroll);
    return () => {
      // console.log(window.scrollY, 'scroll demontado');
      // const currentScroll = window.scrollY;
      // dispatch(setPageScrollPosition(currentScroll));
      dispatch(
        setPegeScrollGenericScrollPosition({
          pageKey: pat,
          scrollPosition: scrollYRef.current,
        }),
      );
      // console.log(window.scrollY, 'scroll demontado');
      window.removeEventListener('scroll', handleScroll);
      // router.events.off('routeChangeStart', handleScroll);
      // console.log('se demonta');
    };
  }, [dispatch]);

  useEffect(() => {
    // console.log(dataRecipes);
    setAsType(type);
    // console.log(type, 'type');
    const observer = new IntersectionObserver(OnIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [items, asType, setAsType]);

  const OnIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && plus) {
      getData();
    }
  };
  const getPaginatedData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const loadData = async (signal) => {
    const user = JSON.parse(localStorage.user);
    const stoken = await localStorage.getItem('token');
    setToken(stoken);
    if (pathname === '/recetas_guardadas') {
      const response = await axios.get(
        `${BACK_API_URL}/favorites/user/${user.userId}`,
        { signal },
        {
          headers: {
            Authorization: `Bearer ${stoken}`,
          },
        },
      );
      if (response?.data.length !== 0) {
        // console.log(response.data[0].recipeList, 'data');
        return response.data[0].recipeList;
      } else {
        return [];
      }
    } else {
      const path =
        pathname === '/categoria/dulce'
          ? 'list/SWEET'
          : pathname === '/categoria/salado'
            ? 'list/SAVORY'
            : pathname === '/categoria/tragos_y_bebidas'
              ? 'list/DRINKS_COCKTAILS'
              : pathname === '/inicio'
                ? 'list'
                : 'list';
      // console.log(pathname, 'type');
      // console.log(path, 'path');
      // dispatch(resetsetPageScroll());
      const response = await axios.get(
        `${BACK_API_URL}/recipes/${path}`,
        { signal },
        {
          headers: {
            Authorization: `Bearer ${stoken}`,
          },
        },
      );
      // console.log(response.data, 'data');
      return response.data;
      // setDataRecipes(response.data);
    }
  };
  const getData = async () => {
    // axios.get(`);
    // console.log('asdas');
    // if (dataRecipes.length === 0) {
    //   loadData();
    // }
    controllerRef.current = new AbortController(); // Crear un nuevo AbortController para esta petición
    const signal = controllerRef.current.signal; // Obtener la señal de control
    try {
      const dato = await loadData(signal);
      const view = getPaginatedData(dato);
      // console.log(dataRecipes, 'adasda');
      // console.log(view);
      if (view.length === 0) {
        setHasMore(false);
        dispatch(setResetState(false));
      } else {
        setData([...data, ...view]);
        dispatch(addPegeScrollGenericItems({ pageKey: pat, products: view }));
        // console.log(data);
        // setDataRecipes([...dataRecipes, ...view]);
        // console.log(dataRecipes);
        // setCurrentPage((currentPage) => currentPage + 1);
        dispatch(
          setPegeScrollGenericCurrentPage({
            pageKey: pat,
            currentPage: currentPage + 1,
          }),
        );
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error fetching data:', error);
      }
    }
  };
  return (
    <>
      <>
        <div>
          {/* {console.log(items, 'items')}
          {console.log(data, 'dataaXX')} */}
          {items.map((food) => (
            <CardRecipe
              key={food.id}
              id={food.id}
              title={food.title}
              image={food.imageUrls[0]}
              user={food.userId}
              description={food.description}
              category={food.category}
              subcategory={food.subcategory}
              nameUser={food.nombreDelUsuario}
              dateCreation={food.dateCreation}
              time={food.time}
              commensal={food.commensal}
              difficulty={food.difficulty}
              ingredients={food.ingredients}
              stepByStep={food.instructions}
              userId={food.userId}
            />
          ))}
        </div>

        {plus && (
          <div className="" ref={elementRef}>
            {' '}
            Cargando Recetas
          </div>
        )}
        {/*  */}
      </>
    </>
  );
};
export default ScrollInfiniteRedux;
