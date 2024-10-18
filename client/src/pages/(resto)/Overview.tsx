import {
  BookText,
  Images,
  ShoppingBag,
  Star,
} from "lucide-react";
import { RestoNav } from "../../components/ui/RestoNav";
import RestoInfo from "../../components/RestoInfo";
import Cuisines from "../../components/Cuisines";
import RestoImages from "../../components/RestoImages";
import SearchCard from "../../components/SearchCard";
import { useRef } from "react";

interface bestSellers {
  dish: string;
  desc: string;
  price: number;
  stars: number;
  url: string;
  veg: boolean;
}

type ScrollFunction = (scrollOffset: number) => void;

export const Overview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll: ScrollFunction = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };
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
    {
      dish: "Tonkotsu Ramen",
      desc: "Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles.",
      price: 13.99,
      stars: 4,
      url: "/search/dishes/tonkotsu-tumbnail.png",
      veg: true,
    },
  ];
  const hotelLongDesc = `A beautiful place to stay and enjoy the beach, Feel the breeze and enjoy the view of the beach from the hotel. The hotel is located in the heart of the city and is easily accessible from all parts of the city.`;
  const links = [
    {
      title: "Overview",
      icon: <BookText className="h-full w-full text-black" />,
      href: "/resto/overview",
    },

    {
      title: "Reviews",
      icon: <Star className="h-full w-full" />,
      href: "/resto/reviews",
    },
    {
      title: "Images",
      icon: <Images className="h-full w-full text-black" />,
      href: "/resto/images",
    },
    {
      title: "Order",
      icon: <ShoppingBag />,
      href: "/resto/order",
    },
  ];
  return (
    <>
      <div>
        <div className="mt-5 flex justify-center items-center gap-5 pt-5">
          <div className="flex flex-col justify-center items-center ml-20">
            <div>
              <RestoInfo
                Name="Hotel Samudra"
                Desc="A beautiful place to stay and enjoy the beach, Feel the breeze and enjoy the view"
                Address="Beach Road, Vizag, Andhra Pradesh"
                timings="9:00 AM - 10:00 PM"
                socials={{
                  instagram: "https://www.instagram.com",
                  phone: "https://www.phone.com",
                  website: "https://www.website.com",
                }}
                owner="Sai Kumar"
              />
            </div>
            <div className=" mt-3 ">
              <Cuisines
                Cuisines={[
                  "North Indian",
                  "South Indian",
                  "Chinese",
                  "Italian",
                  "Mexican",
                  "Thai",
                ]}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <RestoImages />
          </div>
        </div>
        <div className="mt-32 flex justify-center items-center">
          <RestoNav items={links} />
        </div>
        <div className="flex flex-col justify-center items-center h-fit p-12 mb-40">
          <div className="flex flex-col justify-center items-center h-fit p-12">
            {/* About Section*/}
            <div className="h-48 p-5 w-[80%] bg-white rounded-lg flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <h1 className="font-bold text-3xl">About</h1>
              </div>
              <div className="flex justify-center text-lg mt-4 text-center font-light text-black/70">
                {hotelLongDesc}
              </div>
            </div>
          </div>
          {/* Best Sellers Section*/}
          <div className="flex flex-col justify-center w-[80%] p-10 pt-0">
            <div className="mt-5 flex justify-start">
              <h1 className="font-semibold text-2xl">Best Sellers</h1>
            </div>
            <div
              ref={scrollRef}
              className="flex mt-5 gap-2 overflow-x-scroll no-scroller"
            >
              {bestSellers.map((item, index) => {
                return (
                  <div>
                    <SearchCard key={index} {...item} />
                  </div>
                );
              })}
            </div>
            <div className="flex">
              <div>
                <button onClick={() => scroll(-200)}>
                  <img src="/left.png" className="h-7 w-7" alt="left" />
                </button>
              </div>
              <div>
                <button onClick={() => scroll(200)}>
                  <img src="/right.png" className="h-7 w-7" alt="right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
