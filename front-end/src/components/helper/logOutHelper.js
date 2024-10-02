import { resetsetPegeScrollGeneric } from '@/redux/pegeScrollGeneric/pegeScrollGenericSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useUserContext } from '../UserProvider';

const logOutHelper = () => {
  const { token, setToken, setUser } = useUserContext();
  // const router = useRouter();
  const dispatch = useDispatch();
  localStorage.clear();
  setToken(null);
  setUser(null);
  dispatch(resetsetPegeScrollGeneric());
  // router.push('/');
  // console.log('logOutHelper');
  window.location.href = '/';
};

export default logOutHelper;
