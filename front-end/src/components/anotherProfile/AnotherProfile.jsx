import UserProfile from '../userProfile/UserProfile';
import UserProfileBody from '../userProfileBody/UserProfileBody';

const AnotherProfile = ({ user }) => {
  return (
    <main>
      <div className="fixed z-100  inset-0 flex justify-start items-center bg-blue-gray-200">
        <div className=" h-[270px] bg-black ">
          <h1>Hola</h1>
        </div>
        <div className="w-[330px] h-[600px] fixed mt-[150px] mx-[100px]">
          <UserProfile />
        </div>
        <div className="ml-[500px] mr-[200px]	 mt-6 w-[[calc(var(--vh, 1vh) * 100)]] h-[270px] ">
          <UserProfileBody />
        </div>
      </div>
    </main>
  );
};

export default AnotherProfile;
