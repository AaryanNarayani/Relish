import MobileAppBar from "../components/MobileAppBar";
import NextBite from "../components/NextBite";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <div>
      <div className="w-[1440px] h-[calc(100vh-80px)] flex flex-col justify-center items-center relative">
        <img
          src="/home/main.png"
          alt="Background"
          className="absolute w-96 h-96 left-1/2 top-1/2  -translate-x-1/2 -translate-y-36 object-cover"
        />
        <div className="relative z-10 flex flex-col items-center -translate-y-1/2 ">
          <h1 className="text-7xl text-[--secondary]">RELISH</h1>
          <p className="mt-2 mb-4">Life is a combination of magic and pasta.</p>
          <SearchBar />
        </div>
      </div>
      <div className=" p-5 w-full flex justify-center">
        <div className="w-fit">
          <h1 className="text-3xl mb-3 font-medium ">What's your next bite? Choose below!</h1>
          <NextBite/>
        </div>
        
      </div>
      <div className="w-full bg-white flex justify-center">
        <MobileAppBar/>
          
        </div>
    </div>
  );
}

export default HomePage;
