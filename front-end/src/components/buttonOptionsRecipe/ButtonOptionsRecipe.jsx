import { useRef, useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { deletePSGItemFromPage } from '@/redux/pegeScrollGeneric/pegeScrollGenericSlice';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const BACK_API_URL = process.env.NEXT_PUBLIC_API_URL;

const ButtonOptionsRecipe = ({ idRecipe }) => {
  const [open, setOpen] = useState(false);

  const abortControllerRef = useRef(null);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const path = pathname.split('/');
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
              : 'error';
  console.log(pat, 'path');

  const handleOpen = () => setOpen(!open);

  const deleteRecipe = async (e) => {
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

    dispatch(deletePSGItemFromPage({ pageKey: pat, itemId: idRecipe }));
    handleOpen();
    await axios
      .delete(`${BACK_API_URL}/recipes/delete/${idRecipe}`, {
        signal,
        headers: { Authorization: `Bearer ${stoken}` },
      })
      .then((response) => {
        console.log(response);
        // setDataRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setDataRecipes([]);
      });

    // try {
    //   const response = await fetch(
    //     `${BACK_API_URL}/recipes/delete/${idRecipe}`,
    //     { signal },
    //     {
    //       method: 'DELETE',
    //       headers: { Authorization: `Bearer ${stoken}` },
    //     },
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <SlOptionsVertical
        onClick={handleOpen}
        className="w-[2em] h-[2em] cursor-pointer"
      />
      <Dialog open={open} handler={handleOpen} size={'xs'}>
        <DialogHeader>Desea eliminar la Receta?</DialogHeader>
        <DialogBody>Una vez eliminado no se podra recuperar.</DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Cancelar</span>
          </Button>
          <Button onClick={deleteRecipe} variant="gradient" color="green">
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ButtonOptionsRecipe;
