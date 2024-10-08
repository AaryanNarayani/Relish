import { X } from "lucide-react";
import { useState } from "react";

const accordianList = [
  {
    title: "Popular Cuisines",
    desc: "Bakery near meBeverages near meBiryani near meBurger near meChinese near meDesserts near meIce Cream near meKebab near meMaharashtrian near meMomos near meMughlai near meNorth Indian near mePasta near mePizza near meRolls near meSandwich near meSeafood near meShake near meSouth Indian near meStreet near me",
  },
  {
    title: "Popular Restaurant Types",
    desc: "Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meKiosks near mePaan Shop near meQuick Bites near meSweet Shops near me",
  },
  {
    title: "Top Restaurant Chains",
    desc: "KFCMcDonald'sPizza Hut",
  },
  {
    title: "Top Cities",
    desc: "Belagavi",
  },
];

function HomeAccordion() {
  
  return (
    <div className="w-[1150px] flex flex-col gap-3 justify-center my-10 select-none cursor-pointer">
        <h1 className="text-2xl">Explore options near me</h1>
     {accordianList.map((item, key ) => (
        <div key={key}>
             <AccordianItem item={item}/>
        </div>
     ))}
    </div>
  );
}

export default HomeAccordion;

const AccordianItem = ({ item } : any) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`w-full bg-white ${isOpen ? "" : "h-16"} rounded-xl p-5`}>
        <div
          className="flex justify-between items-center mb-5"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <h1 className="text-xl">{item.title}</h1>
          <button>
            <X />
          </button>
        </div>
        <div
          className={`${isOpen ? "" : "hidden"}  select-none cursor-default font-[manrope]`}
        >{item.desc}
        </div>
      </div>
    )
}
