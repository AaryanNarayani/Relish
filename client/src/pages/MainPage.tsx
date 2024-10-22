import { ArrowRight, Search, ShoppingCart } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../components/ui/Categories";
import SearchCard from "../components/SearchCard";

interface bestSellers {
  dish: string;
  desc: string;
  price: number;
  stars: number;
  url: string;
  veg: boolean;
}

export default function MainPage() {
  const [searchText, setSearchText] = useState<string>("");
  const bestSellers: bestSellers[] = [
    {
      dish: "Tonkotsu Ramen",
      desc: "Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles.",
      price: 13.99,
      stars: 4,
      url: "/search/dishes/tonkotsu-tumbnail.png",
      veg: true,
    },
    {
      dish: "Pancakes",
      desc: "Fluffy stack of pancakes served with maple syrup and butter.",
      price: 9.99,
      stars: 5,
      url: "/search/dishes/panCakes-tumbnail.png",
      veg: true,
    },
    {
      dish: "Sushi",
      desc: "Assorted fresh sushi rolls with wasabi and pickled ginger.",
      price: 15.99,
      stars: 4,
      url: "/search/dishes/sushi-tumbnail.png",
      veg: true,
    },
    {
      dish: "Waffles",
      desc: "Assorted fresh sushi rolls with wasabi and pickled ginger.",
      price: 15.99,
      stars: 3,
      url: "/search/dishes/waffles-tumbnail.png",
      veg: false,
    },
    {
      dish: "Tonkotsu Ramen",
      desc: "Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles.",
      price: 13.99,
      stars: 4,
      url: "/search/dishes/tonkotsu-tumbnail.png",
      veg: true,
    },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const user = `Nischit`;
  return (
    <div className="h-fit">
      <div className="flex justify-between items-center mb-4 p-12 pl-28 pt-4 pb-4">
        <div className="text-xl font-semibold flex justify-center">
          Hello {user}!
        </div>
        <div>
          {/* Search Bar */}
          <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden">
            <input
              type="text"
              className="focus:outline-none border-0 pl-4 py-2 w-64"
              placeholder="Let's grab you some food"
              value={searchText}
              onChange={handleSearchChange}
            />
            <Link
              to={`/find?q=${searchText}`}
              className="flex items-center justify-center bg-[--primary] text-white p-2 rounded-full transition-colors duration-200 hover:bg-[--primary-dark]"
            >
              <Search className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-28 pt-0">
        <div className="bg-[--primary] flex justify-center items-center font-bold text-4xl rounded-lg h-56 w-full">
          40% OFF on all orders above ₹500
        </div>
        <div className="mt-5">
          <Categories />
        </div>
        <div className="mt-5">
          <div className="flex justify-start text-black/75 text-lg">
            Top Recommendations
          </div>
          <div className="flex mt-5 gap-4 overflow-x-scroll no-scroller">
            {bestSellers.map((item, index) => {
              return (
                <div>
                  <SearchCard key={index} {...item} variant="white" />
                </div>
              );
            })}
            <div className="flex justify-center items-center ml-16">
              <Link
                to="/categories"
                className="flex items-center justify-center bg-white text-black/75 p-2 rounded-full transition-colors duration-200 hover:bg-[--primary]"
              >
                <ArrowRight className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-start text-black/75 text-lg">
            Previous Orders
          </div>
          <div className="flex mt-5 gap-4 overflow-x-scroll no-scroller">
            {bestSellers.map((item, index) => {
              return (
                <div>
                  <SearchCard key={index} {...item} variant="white" />
                </div>
              );
            })}
            <div className="flex justify-center items-center ml-16">
              <Link
                to="/categories"
                className="flex items-center justify-center bg-white text-black/75 p-2 rounded-full transition-colors duration-200 hover:bg-[--primary]"
              >
                <ArrowRight className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/cart'}>
      <button className="fixed bottom-10 right-10 bg-[--secondary] p-4 rounded-full text-white hover:bg-opacity-90 transition-colors duration-200">
        <ShoppingCart />
      </button>
      </Link>
    </div>
  );
}
