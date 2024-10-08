import React, { useState } from "react";
import { motion } from 'framer-motion';
import { X } from "lucide-react";

const accordionList = [
  {
    title: "Popular Cuisines",
    desc: "Bakery, Beverages, Biryani, Burger, Chinese, Desserts, Ice Cream, Kebab, Maharashtrian, Momos, Mughlai, North Indian, Pasta, Pizza, Rolls, Sandwich, Seafood, Shake, South Indian, Street Food",
  },
  {
    title: "Popular Restaurant Types",
    desc: "Bakeries, Bars, Beverage Shops, Bhojanalya, Cafés, Casual Dining, Clubs, Dessert Parlors, Dhabas, Fine Dining, Food Courts, Food Trucks, Kiosks, Paan Shop, Quick Bites, Sweet Shops",
  },
  {
    title: "Top Restaurant Chains",
    desc: "KFC, McDonald's, Pizza Hut",
  },
  {
    title: "Top Cities",
    desc: "Belagavi",
  },
];

function HomeAccordion() {
  return (
    <div className="w-full max-w-[1150px] flex flex-col gap-3 justify-center my-10 mx-auto">
      <h1 className="text-2xl">Explore options near me</h1>
      {accordionList.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}

const AccordionItem = ({ item } : any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl p-5 shadow-md">
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl">{item.title}</h2>
        { isOpen ? <motion.div
          initial={{rotate:0}}
          animate={{rotate:90}}
          exit={{rotate:0}}
        >
          <X size={24} />
          </motion.div> : 
          <motion.div
          initial={{rotate:90}}
          animate={{rotate:0}}
          exit={{rotate:90}}
        >
          <X size={24} />
          </motion.div> }
      </button>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-gray-600 font-[manrope]">{item.desc}</p>
      </motion.div>
    </div>
  );
};

export default HomeAccordion;