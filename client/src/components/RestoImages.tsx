import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RestoImages() {
  return (
    <div className="flex gap-2 w-[800px] m-4 mt-0">
      <div className="w-1/3 space-y-2">
        <div className="aspect-[4/4] bg-[#F3F3F3] rounded-lg overflow-hidden">
          {/* <img src="/api/placeholder/500/400" className="w-full h-full object-cover" /> */}
        </div>
        <div className="aspect-[4/4] bg-[#F3F3F3] rounded-lg overflow-hidden">
          {/* <img src="/api/placeholder/500/400" className="w-full h-full object-cover" /> */}
        </div>
      </div>
      <div className="w-1/2 space-y-2">
        <div className="aspect-square bg-[#F3F3F3] rounded-lg overflow-hidden">
          {/* <img src="/api/placeholder/800/800" className="w-full h-full object-cover" /> */}
        </div>
        <div className="flex">
          <div className="w-1/3 aspect-square bg-[#F3F3F3] rounded-lg overflow-hidden">
            {/* <img src="/api/placeholder/200/200" className="w-full h-full object-cover" /> */}
          </div>
          <div className="mt-8 ml-8">
            <div className="flex justify-center items-center gap-2">
              <Link to={"/resto/images"}>
                <button className="bg-[--primary] text-black px-4 py-2 rounded-full flex items-center">
                  More
                </button>
              </Link>
              <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
                <Link to={"/resto/images"}>
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
