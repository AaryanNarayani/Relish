import {
  ChartPie,
  ImagesIcon,
  LayoutDashboard,
  Pencil,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AdminNav } from "../../components/ui/AdminNav";

interface NavLink {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export default function Images() {
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
      icon: <ImagesIcon className="h-full w-full text-white" />,
      href: "/admin/hotel/images",
    },
    {
      title: "Analytics",
      icon: <ChartPie />,
      href: "/admin/hotel/analytics",
    },
  ];
  return (
    <>
      <div className="fixed top-1/2 translate-y-[-50%] ml-3 ">
        <AdminNav items={links} />
      </div>
      <div className="min-h-screen p-28 pt-8">
        <div className="flex font-medium gap-1 text-[#1A1A1A] mb-8">
          <Link to="/admin">Aaryan Narayani </Link> /{" "}
          <Link to="/resto">Hotel Name </Link> / Images
        </div>
        <div className="min-h-screen p-[120px] pt-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-medium">Images</h1>
              <button className="p-4 hover:bg-white rounded-full transition-colors">
                <Pencil className="w-4 h-4" />
              </button>
            </div>
            <button className="px-6 py-2 bg-[#e0f3d1] text-[#1A1A1A] rounded-full hover:bg-[#c7f5a7] transition-colors">
              Save
            </button>
          </div>
          {/* Images */}
          <div className="bg-[#1A1A1A] rounded-xl p-2">
            <div className="grid grid-cols-5 gap-2">
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Restaurant interior"
                  className="w-full h-10 object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Restaurant interior"
                  className="w-full h-10 object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Hotel entrance"
                  className="w-full h-10 object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Restaurant interior"
                  className="w-full h-10 object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Hotel entrance"
                  className="w-full h-10 object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>
              <div className="aspect-[5/5] bg-[#2A2A2A] rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>
              <div className="flex gap-2 justify-center items-center">
                <button className="px-6 py-2 bg-transparent border border-[--primary] text-white rounded-full hover:bg-[--primary] hover:text-black transition-colors flex items-center gap-2 h-fit w-fit">
                  Add
                </button>
                <button className="p-2 bg-[--primary] text-black rounded-full hover:cursor-pointer">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
