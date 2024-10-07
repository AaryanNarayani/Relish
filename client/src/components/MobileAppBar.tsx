import { useState } from "react";

function MobileAppBar() {

    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        console.log(email)
    }

  return (
    <div className=" flex justify-center w-[1440px] gap-20 p-10 ">
      <img src="/home/mobile-app.svg" alt="Bc kaam kar" className="h-[450px] w-fit" />
      <div className=" flex justify-center  flex-col w-1/3">
        <h1 className="text-3xl mb-1">Get the Relish App</h1>
        <p className="w-full mb-5">App is Under Progress</p>
        <div className="flex gap-2 w-full">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="focus:outline-none px-4 rounded border border-[--line] w-1/2"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <button className="bg-[--primary] px-4 py-2 rounded" onClick={handleSubmit}>Get Notified</button>
        </div>
      </div>
    </div>
  );
}

export default MobileAppBar;
