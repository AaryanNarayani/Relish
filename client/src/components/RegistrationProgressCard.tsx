import { MapPinned, SquareMenu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function RegistrationProgressCard() {
  type navData = {
    id: string;
    icon: React.FC;
    name: string;
    desc: string;
    url: string;
    loc: string;
  };

  const [activePage, setActivePage] = useState("info");
  const location = useLocation();

  const data: navData[] = [
    {
      loc: "/resto/registration/info",
      id: "info",
      icon: MapPinned,
      name: "Resto Information",
      desc: "Name Location and Contact Number",
      url: "info",
    },
    {
      loc: "/resto/registration/menu",
      id: "menu",
      icon: SquareMenu,
      name: "Menu and Operational",
      desc: "Menu Items and othr details",
      url: "menu",
    },
  ];

  return (
    <div className="bg-white h-full w-[68vh] ml-[60px] rounded-md p-[30px]">
      <h1 className="text-[--secondary] text-[33px] pt-[10px]">
        Registration Progress
      </h1>
      <div className="p-[10px] pt-[25px] h-[85%] w-full flex flex-col gap-[10px]">
        {data.map((val) => {
          return (
            <>
              <NavLink
                key={val.id}
                to={`/resto/registration/${val.url}`}
                className={"h-24 w-full flex items-center gap-5"}
              >
                <button
                  className={`rounded-full p-4 border-[5px] ${
                    location.pathname === val.loc
                      ? "border-[--primary] scale-[1.2] "
                      : ""
                  }`}
                >
                  <val.icon />
                </button>
                <div className="flex flex-col relative w-full ">
                  <p className="text-[22px] ml-5 text-[--secondary] w-full">
                    {val.name}
                  </p>
                  <p className="text-[12px] ml-7 text-[#9f9f9f] absolute top-[26px] w-full">
                    {val.desc}
                  </p>
                </div>
              </NavLink>
            </>
          );
        })}
      </div>
    </div>
  );
}
