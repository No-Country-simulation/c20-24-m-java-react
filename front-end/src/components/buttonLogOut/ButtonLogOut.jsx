import { useEffect } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { useUserContext } from '../UserProvider';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { resetsetPageScroll } from '@/redux/pageScroll/pageScrollSlice';
import { resetsetPegeScrollGeneric } from '@/redux/pegeScrollGeneric/pegeScrollGenericSlice';

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token, setToken, setUser } = useUserContext();

  useEffect(() => {
    const checkToken = async () => {
      const currentToken = localStorage.getItem('token');
      setToken(currentToken);
    };

    checkToken();
  }, [setToken]);

  const handleLogOut = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
    dispatch(resetsetPegeScrollGeneric());
    router.push('/');
  };
  return (
    <>
      {token ? (
        <button onClick={handleLogOut} className="flex justify-start items-center">
          <MdOutlineLogout className="h-[20px] w-[20px] mr-1" />
          <p>Cerrar sesion</p>
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default ButtonLogOut;
