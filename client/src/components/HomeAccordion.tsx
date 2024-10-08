import { X } from "lucide-react"
import { useState } from "react";

function HomeAccordion({}) {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[1440px] flex justify-center my-10  select-none cursor-pointer" >
        <div className={`w-full bg-white ${ isOpen ? 'h-40' : 'h-20'} rounded-xl p-7`} >
            <div className="flex justify-between items-center mb-10" onClick={()=>{
                setIsOpen(!isOpen)
            }}>
                <h1>Popular Cuisines</h1>
                <button><X/></button>
            </div>
            <div className={`${isOpen  ? '' : 'hidden'}  select-none cursor-default `}>
                Bakery near meBeverages near meBiryani near meBurger near meChinese near meDesserts near meIce Cream near meKebab near meMaharashtrian near meMomos near meMughlai near meNorth Indian near mePasta near mePizza near meRolls near meSandwich near meSeafood near meShake near meSouth Indian near meStreet near me
            </div>
        </div>
    </div>
  )
}

export default HomeAccordion