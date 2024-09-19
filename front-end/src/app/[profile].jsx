import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProfilePage() {
  const router = useRouter();
  const profile = router.query.profile;
  console.log('asdas');
  return (
    <main>
      <div className="flex flex-col w-[100%]">
        <div className=" h-[270px] bg-blue-gray-50 ">
          <h1>Hola{profile}</h1>
        </div>
        {/* <div className="w-[330px] h-[600px] fixed mt-[150px] mx-[100px]">
          <UserProfile />
        </div>
        <div className="ml-[500px] mr-[200px]	 mt-6 w-[[calc(var(--vh, 1vh) * 100)]] h-[270px] ">
          <UserProfileBody />
        </div> */}
      </div>
    </main>
  );
}
