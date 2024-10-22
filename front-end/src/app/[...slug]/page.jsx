import UserProfile from '@/components/userProfile/UserProfile';
import UserProfileBody from '@/components/userProfileBody/UserProfileBody';
import Link from 'next/link';

export default function Page({ params }) {
  return (
    <main>
      <div className="flex flex-col w-[100%]">
        <div className=" h-[270px] bg-black ">
          <h1>Hola</h1>
        </div>
        <div className="w-[330px] h-[600px] fixed z-10 mt-[150px] mx-[100px]">
          <UserProfile username={params.slug[0]} />
        </div>
        <div className="ml-[500px] mr-[200px]	 mt-6 w-[[calc(var(--vh, 1vh) * 100)]] h-[270px] ">
          <UserProfileBody params={params.slug} />
        </div>
      </div>
    </main>
  );
}
