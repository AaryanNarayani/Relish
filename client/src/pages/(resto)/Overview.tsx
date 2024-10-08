import {  BookText, Images,ShoppingBag, Star} from "lucide-react";
import { RestoNav } from "../../components/ui/RestoNav";
import RestoInfo from "../../components/RestoInfo";
import Cuisines from "../../components/Cuisines";
import RestoImages from "../../components/RestoImages";

export const Overview = () => {
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
        <div className="flex justify-center items-center h-80">
            // OverView Section
        </div>
      </div>
    </>
  );
};
