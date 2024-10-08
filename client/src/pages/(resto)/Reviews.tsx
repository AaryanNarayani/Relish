import {  BookText, Images,ShoppingBag, Star} from "lucide-react";
import { RestoNav } from "../../components/ui/RestoNav";
import RestoInfo from "../../components/RestoInfo";
import Cuisines from "../../components/Cuisines";
import RestoImages from "../../components/RestoImages";
import ReviewCard from "../../components/ReviewCard";

export default function Reviews () {
  const links = [
    {
      title: "Overview",
      icon: (
        <BookText className="h-full w-full text-black" />
      ),
      href: "/resto/overview",
    },

    {
      title: "Reviews",
      icon: <Star className="h-full w-full" />,
      href: "/resto/reviews",
    },
    {
      title: "Images",
      icon: (
        <Images className="h-full w-full text-black" />
      ),
      href: "/resto/images",
    },
    {
      title: "Order",
      icon: <ShoppingBag/>,
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
                <div className="ml-2 mt-3">
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
        <div className="flex flex-col gap-4 justify-center items-center h-fit p-28">
            <ReviewCard 
            user="Nischit Ekbote" 
            Description="Visited this place for a sunday dinner and was so amused by their ambience and food quality. The staff was very friendly and the food was delicious. Would definitely recommend this place to my friends and family. The best part was the view from the restaurant. It was so beautiful and peaceful. Loved it. Will visit again soon."
            stars={'5.0'}
            />
            <ReviewCard 
            user="Aaryan Narayani" 
            Description="Visited this place for a sunday dinner and was so amused by their ambience and food quality. The staff was very friendly and the food was delicious. Would definitely recommend this place to my friends and family. The best part was the view from the restaurant. It was so beautiful and peaceful. Loved it. Will visit again soon. Also the Service was very good they have a very good staff who are very friendly and helpful this is the best place to visit with family and friends. One more thing the food was very tasty and delicious and i enjoyed their A/C section so much that i visited this place again and again. I would recommend this place to everyone."
            stars={'4.6'}
            />
            <ReviewCard 
            user="Mallikarjun Sawakar" 
            Description="There was no samudra to be seen in this hotel"
            stars={'1.0'}
            />
        </div>
      </div>
    </>
  );
};
