import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface RestoMenuCardProps {
  dish: string;
  desc: string;
  price: number;
  stars: number;
  url: string;
  veg: boolean;
}

function RestoMenuCard({
  dish,
  desc,
  price,
  stars,
  url,
  veg,
}: RestoMenuCardProps) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prev) => prev + 1);
  const decrementCount = () => setCount((prev) => Math.max(0, prev - 1));

  return (
    <div className="w-[35rem] rounded bg-white overflow-hidden shadow-md">
      <div className=" relative flex">
        <img src={url} alt={dish} className="h-40" />
        <div className="absolute right-4 bottom-4 transition-all duration-300 ease-in-out ">
          {count === 0 ? (
            <button
              className="p-2 bg-[--primary] rounded-full flex justify-center items-center shadow-md hover:bg-gray-100 transition-all duration-300 ease-in-out"
              onClick={incrementCount}
            >
              <Plus className="h-4 w-4" />
            </button>
          ) : (
            <div className="p-1 bg-white rounded-full flex justify-center items-center shadow-md transition-all duration-300 ease-in-out">
              <button
                onClick={decrementCount}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <Minus className="h-4 w-4 text-[--nonVeg]" />
              </button>
              <p className="mx-2 font-semibold">{count}</p>
              <button
                onClick={incrementCount}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <Plus className="h-4 w-4 text-[--veg]" />
              </button>
            </div>
          )}
        </div>
        <div className="w-full p-4">
          <div className="flex justify-between">
            <h1
              className={` ${
                veg ? "text-[--veg]" : "text-[--nonVeg]"
              } text-xl`}
            >
              {dish}
            </h1>
            <p className="text-black">${price.toFixed(2)}</p>
          </div>
          <p className="text-[--meta]">{"★".repeat(stars).padEnd(5, "☆")}</p>
          <p className="text-sm font-[--relative] overflow-hidden h-10">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default RestoMenuCard;
