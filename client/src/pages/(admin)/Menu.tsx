import {
  ChartPie,
  Filter,
  Images,
  LayoutDashboard,
  Pencil,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { AdminNav } from "../../components/ui/AdminNav";
import { Link } from "react-router-dom";
import SearchBar from "../../components/resto/SearchBar";
import { useState } from "react";

interface NavLink {
  title: string;
  icon: React.ReactNode;
  href: string;
}

function Menu() {
  const [isEditable, setIsEditable] = useState(false);
  const [veg, setVeg] = useState(true);

  const links: NavLink[] = [
    {
      title: "DashBoard",
      icon: <LayoutDashboard className="h-full w-full text-black" />,
      href: "/admin/hotel/dashboard",
    },
    {
      title: "Menu",
      icon: <ShoppingBag className="h-full w-full" />,
      href: "/admin/hotel/menu",
    },
    {
      title: "Images",
      icon: <Images className="h-full w-full text-black" />,
      href: "/admin/hotel/images",
    },
    {
      title: "Analytics",
      icon: <ChartPie />,
      href: "/admin/hotel/analytics",
    },
  ];

  const handleSave = () => {
    console.log('Saved')
  }

  return (
    <div className="w-full flex justify-center relative">
      <div className="w-[1400px] h-[calc(100vh-50px)] py-10 ">
        <div className="fixed top-1/2 translate-y-[-50%] ">
          <AdminNav items={links} />
        </div>
        <div className="flex">
          <div className="w-1/2 px-20 flex flex-col gap-5">
            <h1 className="w-full">
              <Link to="/admin">Aaryan Narayni</Link> /{" "}
              <Link to="/resto">Hotel Name</Link>
            </h1>
            <div className="w-full pl-28 pt-5 flex flex-col gap-4">
              <SearchBar />
              <Filter />
              <div className="flex flec-col"></div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col px-20 gap-3">
            <div className="flex justify-end">
              <span
                className={`${
                  isEditable ? "bg-[--primary]" : "bg-white"
                } hover:bg-[--primary-50] p-3 rounded-full`}
                onClick={() => {
                  setIsEditable(!isEditable);
                }}
              >
                <Pencil className="h-4 w-4" />
              </span>
            </div>
            <div className="relative flex justify-center text-white">
              <img
                src="/search/dishes/tonkotsu-tumbnail.png"
                alt=""
                className="h-40 w-full rounded-xl object-cover absolute l-0 t-0 brightness-75 contrast-100 saturate-100"
              />
              <div className="h-40 flex items-center  gap-20">
                <div className="z-1 relative flex flex-col items-center">
                  <Pencil />
                  <p>Upload Image</p>
                </div>

                <div className="z-1 relative flex flex-col items-center">
                  <Trash2 />
                  <p>Delete Image</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input type="text" className="p-3 focus:outline-none caret-[--primary] rounded-xl" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Description</label>
              <input type="text" className="p-3 focus:outline-none caret-[--primary] rounded-xl" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Price</label>
              <input type="text" className="p-3 w-1/3 focus:outline-none caret-[--primary] rounded-xl" />
            </div>

            <div className="flex gap-10">
              <div className="flex items-center gap-2" onClick={()=>{setVeg(true)}}>
                <button className={`h-5 w-5 rounded-md ${!veg ? 'bg-white' : 'bg-[--primary]' }`}></button>
                <label htmlFor="">Veg</label>
              </div>

              <div className="flex gap-2 items-center" onClick={()=>{setVeg(false)}}>
                <button className={`h-5 w-5 rounded-md ${veg ? 'bg-white' : 'bg-[--primary]' }`}></button>
                <label htmlFor="">Non-Veg</label>
              </div>
            </div>
              <div className="flex justify-end">
                <button className="bg-[--true] py-2 px-4 rounded-full" onClick={handleSave}>Save</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
