
import { BookText, Images, ShoppingBag, Star } from "lucide-react";
import { RestoNav } from "../../components/ui/RestoNav";
import RestoInfo from "../../components/RestoInfo";
import Cuisines from "../../components/Cuisines";
import RestoImages from "../../components/RestoImages";
import { useState } from "react";
import RestoMenuCard from "../../components/RestoMenuCard";

const categories = [
  { name: 'Soups' },
  { name: 'Starters' },
  { name: 'Biryani' },
  { name: 'Rice' }
];

interface RestoMenuCardProps {
  dish: string;
  desc: string;
  price: number;
  stars: number;
  url: string;
  veg: boolean;
}

const restoResultList: RestoMenuCardProps[] = [
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
    desc: "Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles. Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles. Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles.",
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
    veg: false,
  },
  {
    dish: "Waffles",
    desc: "Assorted fresh sushi rolls with wasabi and pickled ginger.",
    price: 15.99,
    stars: 3,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: true,
  },
];


interface RestoOrderCategoryItemProps {
  name: string;
}

function RestoOrderCategoryItem({ name }: RestoOrderCategoryItemProps) {
  return (
    <div className="p-2 rounded-full cursor-pointer">{name}</div>
  )
}

export default function RestoOrders() {

  const [currentCategory , setCurrentCategory] = useState('');

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
      icon: <ShoppingBag className="h-full w-full" />,
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
                        website: "https://www.website.com"
                    }}
                    owner="Sai Kumar"
                />
                </div>
                <div className=" mt-3 ">
                    <Cuisines Cuisines={[
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Italian",
                        "Mexican",
                        "Thai",
                    ]}/>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <RestoImages/>
            </div>
        </div>
        <div className="mt-32 flex justify-center items-center">
            <RestoNav
            items={links}
            />
        </div>
        <div className="flex justify-center items-center w-full">
           <div className="mt-8 flex flex-col md:flex-row w-[1200px] justify-center gap-20">
        <div className="p-4 w-fit">
          <h1 className="text-4xl  mb-4">{currentCategory === '' ? 'All' : currentCategory}</h1>
              <div className="flex flex-col gap-4">
                { restoResultList.map((item : RestoMenuCardProps, key : number) => {
                return(
                  <RestoMenuCard {...item}/>
                )
              })}
              </div>
        </div>
        <div className="w-1/4 p-4 flex flex-col gap-3">
          <h2 className="text-4xl mb-2">Categories</h2>
          {categories.map((item, index) => (
            <div onClick={()=>{setCurrentCategory(item.name)}} className={`${currentCategory===item.name ? 'bg-[--primary]'  : 'bg-white'} rounded-full px-3`}>
              <RestoOrderCategoryItem key={index} name={item.name}/>
            </div>
          ))}
        </div>
      </div>
        </div>
      </div>
    </>
  );
}


