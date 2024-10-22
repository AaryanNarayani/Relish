import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <div>
        <div className="flex justify-start text-black/75 text-lg">
          Whats on your mind?
        </div>
        <div className="flex gap-7 mt-4">
          <Link to="/find/?q=burger">
            <div className="p-4 flex flex-col justify-center items-center bg-white rounded-md">
              <div>
                <img
                  src="/categories/burger.png"
                  alt="food1"
                  className="w-[75px] h-[70px] rounded-md"
                />
              </div>
              <div className="mt-1 mb-0 text-black/65">Burger</div>
            </div>
          </Link>
          <Link to="/find/?q=pizza">
            <div className="p-4 flex flex-col justify-center items-center bg-white rounded-md">
              <div>
                <img
                  src="/categories/pizza.png"
                  alt="food1"
                  className="w-[75px] h-[70px] rounded-md"
                />
              </div>
              <div className="mt-1 mb-0 text-black/65">Pizza</div>
            </div>
          </Link>
          <Link to="/find/?q=ramen">
            <div className="p-4 flex flex-col justify-center items-center bg-white rounded-md">
              <div>
                <img
                  src="/categories/ramen.png"
                  alt="food1"
                  className="w-[75px] h-[70px] rounded-md"
                />
              </div>
              <div className="mt-1 mb-0 text-black/65">Ramen</div>
            </div>
          </Link>
          <Link to="/find/?q=fish">
            <div className="p-4 flex flex-col justify-center items-center bg-white rounded-md">
              <div>
                <img
                  src="/categories/shrimp.png"
                  alt="food1"
                  className="w-[75px] h-[70px] rounded-md"
                />
              </div>
              <div className="mt-1 mb-0 text-black/65">Sea Food</div>
            </div>
          </Link>
          <Link to="/find/?q=croissant">
            <div className="p-4 flex flex-col justify-center items-center bg-white rounded-md">
              <div>
                <img
                  src="/categories/croissant.png"
                  alt="food1"
                  className="w-[75px] h-[70px] rounded-md"
                />
              </div>
              <div className="mt-1 mb-0 text-black/65">Bakery</div>
            </div>
          </Link>
          <Link to="/find/?q=chicken">
            <div className="p-4 flex flex-col justify-center items-center bg-white rounded-md">
              <div>
                <img
                  src="/categories/chicken-leg.png"
                  alt="food1"
                  className="w-[75px] h-[70px] rounded-md"
                />
              </div>
              <div className="mt-1 mb-0 text-black/65">Chicken</div>
            </div>
          </Link>
          <div className="flex justify-center items-center ml-6">
            <Link
              to="/categories"
              className="flex items-center justify-center bg-white text-black/75 p-2 rounded-full transition-colors duration-200 hover:bg-[--primary]"
            >
              <ArrowRight className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
