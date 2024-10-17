import { Check, X } from "lucide-react";

export default function AdminNewOrderCard() {
  return (
    <div className="w-full bg-white py-4 px-5 rounded-lg relative">
        <div className="flex justify-between">
            <h1 className="text-xl">Order - #{'120'}</h1>
            <p>{ '2.89' }km</p>
        </div>
        <div className="w-3/4 px-1 h-12 overflow-hidden text-sm">
            { '1 - tonkotsu Ramen . 1 - Sushi . 3 - Waffels . 1 - tonkotsu Ramen . 1 - Sushi . 3 - Waffels ' }
        </div>
        <div className="flex absolute right-4 bottom-4 gap-2">
            <button className="bg-[--true] p-2 rounded-full"><Check className="h-4 w-4"/></button>
            <button className="bg-[--false] p-2 rounded-full"><X className="h-4 w-4"/></button>
        </div>
    </div>
  )
}

export function AdminActiveOrderCard() {
    return(
        <div className="w-full bg-white py-4 px-5 rounded-lg relative">
        <div className="flex justify-between">
            <h1 className="text-xl">Order - #{'120'}</h1>
            <p>{ '2.89' }km</p>
        </div>
        <div className="w-3/4 px-1 h-12 overflow-hidden text-sm">
            { '1 - tonkotsu Ramen . 1 - Sushi . 3 - Waffels . 1 - tonkotsu Ramen . 1 - Sushi . 3 - Waffels ' }
        </div>
        <div className="flex absolute right-4 bottom-4 gap-2">
            <button className="bg-[--true] px-3 py-1 rounded-full">Done</button>
        </div>
    </div>
    )
}

export function AdminRejectedOrderCard() {
    return(
        <div className="w-full bg-[grey] py-4 px-5 rounded-lg relative">
        <div className="flex justify-between">
            <h1 className="text-xl">Order - #{'120'}</h1>
            <p>{ '2.89' }km</p>
        </div>
        <div className="w-3/4 px-1 h-12 overflow-hidden text-sm">
            { '1 - tonkotsu Ramen . 1 - Sushi . 3 - Waffels . 1 - tonkotsu Ramen . 1 - Sushi . 3 - Waffels ' }
        </div>
        <div className="flex absolute right-4 bottom-4 gap-2">
            <button className="bg-[--veg] px-3 py-1 rounded-full">Accept</button>
        </div>
    </div>
    )
}

