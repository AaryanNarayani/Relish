import { BookText, Images, ShoppingBag, Star } from "lucide-react";
import { RestoNav } from "../../components/ui/RestoNav";
import RestoInfo from "../../components/RestoInfo";
import Cuisines from "../../components/Cuisines";
import RestoImages from "../../components/RestoImages";
import Pagination from "../../components/ui/Pagination";
import { useState } from "react";

export default function RestoImagePage() {
  const [currentPage, setCurrentPage] = useState(1);

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

  const onPageChange = (page: number, pageCount: number) => {
    if (page > 0 && page <= pageCount) {
      console.log(page);
      setCurrentPage(page);
    }
  };

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
            <div className="ml-2 mt-3">
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
        <div className="flex items-center h-80 w-full my-8 flex-col">
          <div className="w-[1330px] bg-[#1E1E1E] rounded-xl h-96 "></div>
           <div className="w-[1330px] flex justify-end">
            <Pagination
            itemCount={150}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
           </div>
        </div>
      </div>
    </>
  );
}
