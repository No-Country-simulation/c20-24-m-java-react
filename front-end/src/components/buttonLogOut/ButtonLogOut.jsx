import { useEffect } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { useUserContext } from '../UserProvider';
import { useRouter } from 'next/navigation';

const ButtonLogOut = () => {
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
