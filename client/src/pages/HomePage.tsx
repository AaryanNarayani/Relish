import SearchBar from "../components/SearchBar";

function HomePage() {
  

  return (
    <div className="w-screen h-[calc(100vh-100px)] flex flex-col justify-center items-center relative">
      <img src="/home/main.png" alt="Background" className="absolute w-96 h-96 left-1/2 top-1/2  -translate-x-1/2 -translate-y-36 object-cover" />
      <div className="relative z-10 flex flex-col items-center -translate-y-1/2 ">
        <h1 className="text-6xl text-[--secondary]">RELISH</h1>
        <p className="mt-2 mb-4">Life is a combination of magic and pasta.</p>
        <SearchBar/>
      </div>
    </div>
  );
}

export default HomePage;