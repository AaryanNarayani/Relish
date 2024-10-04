import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface SearchCardProps {
  dish: string;
  desc: string;
  price: number;
  stars: number;
  url: string;
}

function SearchCard({ dish, desc, price, stars, url }: SearchCardProps) {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(prev => prev + 1);
  const decrementCount = () => setCount(prev => Math.max(0, prev - 1));

  return (
    <div className="w-52 rounded border border-[--secondary] overflow-hidden">
      <img src={url} alt={dish} className="" />
      <div className="p-2 relative">
        <div className="absolute right-2 -top-10 transition-all duration-300 ease-in-out">
          {count === 0 ? (
            <button 
              className="p-2 bg-white rounded-full flex justify-center items-center shadow-md hover:bg-gray-100 transition-all duration-300 ease-in-out"
              onClick={incrementCount}
            >
              <Plus className="h-4 w-4"/>
            </button>
          ) : (
            <div className="p-1 bg-white rounded-full flex justify-center items-center shadow-md transition-all duration-300 ease-in-out">
              <button onClick={decrementCount} className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Minus className="h-4 w-4 text-[--nonVeg]"/>
              </button>
              <p className="mx-2 font-semibold">{count}</p>
              <button onClick={incrementCount} className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Plus className="h-4 w-4 text-[--veg]"/>
              </button>
            </div>
          )}
        </div>
        <h1 className="text-[--nonVeg] font-bold">{dish}</h1>
        <p className="text-xs font-[manrope]">{desc}</p>
        <div className="flex justify-between mt-1">
          <p className="text-[--meta]">${price.toFixed(2)}</p>
          <p className="text-[--meta]">{('★'.repeat(stars)).padEnd(5, '☆')}</p>
        </div>
      </div>
      
    </div>
  );
}

export default SearchCard;