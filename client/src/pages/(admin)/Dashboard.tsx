import React, { useState } from "react";
import {
  BookText,
  Images,
  Pencil,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";
import { AdminNav } from "../../components/ui/AdminNav";
import { Link } from "react-router-dom";

type CuisineType = string;
type OrderStatus = "all" | "active" | "rejected";

interface EditCuisineProps {
  editCuisine: boolean;
  setEditCuisine: React.Dispatch<React.SetStateAction<boolean>>;
  cuisineList: CuisineType[];
  setCuisineList: React.Dispatch<React.SetStateAction<CuisineType[]>>;
}

interface NavLink {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const EditCuisine: React.FC<EditCuisineProps> = ({
  editCuisine,
  setEditCuisine,
  cuisineList,
  setCuisineList,
}) => {
  const [cuisine, setCuisine] = useState('');

  const handleAdd = () => {
    if (cuisine.trim() !== '') {
      setCuisineList(prevList => [...prevList, cuisine.trim()]);
      setCuisine('');
    }
  }

  const handleRemove = (index: number) => {
    setCuisineList(prevList => prevList.filter((_, i) => i !== index));
  }

  return (
    <div className="pl-24 flex flex-col gap-5">
      <div className=" flex items-center gap-5">
        <h1 className="text-3xl pl-4">Cuisine</h1>
        <div
          onClick={() => setEditCuisine(!editCuisine)}
          className="bg-white h-10 w-10 p-3 rounded-full flex justify-center items-center hover:bg-[--primary-50] cursor-pointer"
        >
          <Pencil />
        </div>
        {editCuisine && (
                <button
                  type="submit"
                  className="bg-[--veg] px-5 py-2 rounded-full select-none"
                  onClick={()=>{}}
                >
                  Save
                </button>
              )}
      </div>
      {editCuisine && (
        <div className="flex gap-2 pl-4 ">
          <input
            type="text"
            className="px-3 py-1 rounded-md focus:outline-none"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
          <button
            className="bg-[--primary] px-5 py-1 rounded-md"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      )}
      <div className="flex gap-2 flex-wrap pl-2">
        {cuisineList.map((item, index) => (
          <div
            key={index}
            className={`flex items-center bg-white ${
              editCuisine ? "pl-4 py-1 pr-1 " : "px-4 py-3"
            } rounded-full gap-2`}
          >
            <p>{item}</p>
            {editCuisine && (
              <button
                className="h-10 w-10 p-3 rounded-full flex justify-center items-center hover:bg-[--primary-50]"
                onClick={() => handleRemove(index)}
              >
                <X className="text-[--nonVeg]" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [active, setActive] = useState<OrderStatus>("all");
  const [editHotelDetails, setEditHotelDetails] = useState<boolean>(false);
  const [editCuisine, setEditCuisine] = useState<boolean>(false);
  const [cuisineList, setCuisineList] = useState<CuisineType[]>([
    "Mexican",
    "Italian",
    "Indian",
  ]);

  const links: NavLink[] = [
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

  const handleHotelDetailsSave = () => {
    console.log("Saving hotel details...");
    setEditHotelDetails(false);
  };

  return (
    <div className="w-full flex justify-center relative px-10">
      <div className="w-[1400px] flex py-10">
        <div className="absolute top-1/2 translate-y-[-50%]">
          <AdminNav items={links} />
        </div>
        <div className="w-2/3 px-20 flex flex-col gap-5">
          <h1 className="w-full">
            <Link to="/admin">Aaryan Narayni</Link> /{" "}
            <Link to="/resto">Hotel Name</Link>
          </h1>
          <div className="w-full pl-28 pt-5 flex flex-col gap-4">
            <div className="flex items-center gap-5 justify-between">
              <div className="flex items-center gap-5">
                <h1 className="text-3xl">Hotel Details</h1>
                <div
                  onClick={() => setEditHotelDetails(!editHotelDetails)}
                  className="bg-white h-10 w-10 p-3 rounded-full flex justify-center items-center hover:bg-[--primary-50] cursor-pointer"
                >
                  <Pencil />
                </div>
              </div>
              {editHotelDetails && (
                <button
                  type="submit"
                  className="bg-[--veg] px-5 py-2 rounded-full select-none"
                  onClick={handleHotelDetailsSave}
                >
                  Save
                </button>
              )}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleHotelDetailsSave();
              }}
            >
              {["Name", "Short Description", "Location"].map((label) => (
                <div key={label} className="flex flex-col">
                  <label htmlFor={label} className="select-none">{label}</label>
                  <input
                    id={label}
                    type="text"
                    className="h-12 focus:outline-none px-4 rounded-md disabled:bg-white/90"
                    disabled={!editHotelDetails}
                  />
                </div>
              ))}
              <div className="flex flex-col">
                <label>Long Description</label>
                <textarea
                  className="h-fit resize-none focus:outline-none px-4 rounded-md disabled:bg-white/90"
                  disabled={!editHotelDetails}
                />
              </div>
            </form>
          </div>
          <EditCuisine
            editCuisine={editCuisine}
            setEditCuisine={setEditCuisine}
            cuisineList={cuisineList}
            setCuisineList={setCuisineList}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex gap-6 justify-center">
            {[
              { title: "Revenue", value: "₹10,000", bg: "bg-[--primary-50]" },
              { title: "Today's Orders", value: "20", bg: "bg-[--primary]" },
            ].map((item) => (
              <div
                key={item.title}
                className={`w-1/3 flex flex-col ${item.bg} rounded-[20px] justify-center items-center p-4`}
              >
                <h1 className="text-3xl">{item.value}</h1>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-5">
            {(["all", "active", "rejected"] as OrderStatus[]).map((status) => (
              <button
                key={status}
                className={`${
                  active === status ? "bg-[--primary]" : "bg-white"
                } px-5 py-[0.35rem] rounded-lg`}
                onClick={() => setActive(status)}
              >
                {status === "all"
                  ? "New Orders"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;