import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Analytics(){
    return(
        <>
        <div className="h-fit flex justify-center m-20 mb-5 mt-10">
            <div className="bg-[--primary-50] h-fit w-[1200px] rounded-md flex flex-col items-center justify-center p-20 pb-9">
                <div className="font-medium text-center text-5xl">
                    This section's reserved for the v2 version,
                    which is still in the work.
                </div>
                <div className="font-light mt-4 text-xl">
                    So hold tight and stay patient. 
                </div>
                <div className="mt-10">
                    <img src="/v2.png" alt="v2-meme" className="w-[400px] h-[400px] rounded-md"/>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center m-5 mt-0">
            <Link to={'/admin/hotel/dashboard'}>
            <button className="flex gap-3 rounded-md p-3 bg-[--primary] hover:bg-[--primary]/50 transition-colors duration-300 shadow-lg opacity-100 hover:opacity-80">
            <ArrowLeft className="h-5 w-5 text-black" />
            <span className="font-medium text-black">Back to Dashboard</span>
            </button>
            </Link>
        </div>
    </>
    )
}