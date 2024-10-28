import SummaryCard from "../components/ui/SummaryCard";

function CartPage() {
  return (
    <div className="w-full h-[calc(100vh-60px)] flex justify-center p-10">
      <div className="flex gap-10 w-[1000px]">
        <div className="w-2/3 flex flex-col ">
          <h1 className="text-3xl">Cart</h1>
        </div>
        <div className="w-[400px] flex flex-col gap-3">
          <h1 className="text-3xl">Summary</h1>
         <SummaryCard/>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
