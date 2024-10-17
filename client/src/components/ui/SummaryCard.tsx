import { useState } from "react";

function SummaryCard() {
  const [price, setPrice] = useState({
    subtotal: 13.99,
    delivery: 0,
    discount: 2,
  });

  const total = price.subtotal + price.delivery - price.discount;

  return (
    <div className="w-full bg-white rounded-xl min-h-[300px] px-10 py-8 flex flex-col justify-between">
      <div className="flex justify-between">
        <h1>Subtotal</h1>
        <p>${price.subtotal}</p>
      </div>
      <div className="flex justify-between">
        <h1>Delivery</h1>
        <p>${price.delivery}</p>
      </div>
      {price.discount !== 0 && (
        <div className="flex justify-between">
          <h1>Discount</h1>
          <p>-${price.discount}</p>
        </div>
      )}
      <hr className="border-[--primary]"/>
      <div className="flex justify-between">
        <h1>Total</h1>
        <p>{total}</p>
      </div>
      <hr className="border-[--primary]"/>
      <button className="w-full bg-[--primary] rounded-full p-3">Checkout</button>
    </div>
  );
}

export default SummaryCard;
