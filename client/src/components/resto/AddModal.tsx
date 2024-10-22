import { useState } from "react"
import HeroPencil from "../ui/icons/HeroPencil"
import HeroTrash from "../ui/icons/HeroTrash"

function AddModal({}) {

  const [isVeg, setIsVeg] =useState(true);
   const [isHover, setIsHover] = useState(false);

  return (
        <div className="w-[500px] bg-[white] rounded-xl py-5 px-10 flex flex-col gap-4">
            <h1 className="text-xl">Add Menu Items</h1>
             <div className="relative flex justify-center text-white" onMouseOver={()=>{setIsHover(true)}} onMouseOut={()=>{setIsHover(false)}}>
              <img
                src="/search/dishes/tonkotsu-tumbnail.png"
                alt=""
                className="h-40 w-full rounded-xl object-cover"
              />
              {
                isHover && 
                <div className="h-40 flex items-center  gap-20 absolute bg-[black]/50 w-full justify-center rounded-xl transition-colors">
                <div className="z-1 relative flex flex-col items-center cursor-pointer">
                  <HeroPencil />
                  <p>Upload Image</p>
                </div>

                <div className="z-1 relative flex flex-col items-center cursor-pointer">
                  <HeroTrash/>
                  <p>Delete Image</p>
                </div>
              </div>
              }
            </div>

            <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" className="p-2 border border-[--line] outline-none rounded"/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="desc">Description</label>
                <textarea  className="h-32 border border-[--line] outline-none rounded"/>
            </div>

            <div className="flex flex-col">
              <label htmlFor="price">Price</label>
              <input type="text"  className="w-1/2 p-2 border border-[--line] outline-none rounded"/>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-3" onClick={()=>{setIsVeg(true)}}>
                <label htmlFor="veg">Veg</label>
                <button className={`${ isVeg ? 'bg-[--primary]' : 'bg-[--primary-50]'} h-5 w-5 rounded`}></button>
              </div>

              <div className="flex items-center gap-3" onClick={()=>{setIsVeg(false)}}>
                <label htmlFor="veg">Non-Veg</label>
                <button className={`${ !isVeg ? 'bg-[--primary]' : 'bg-[--primary-50]'} h-5 w-5 rounded`}></button>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-[--true] px-4 py-2 rounded-full">Save</button>
            </div>
            
            
        </div>

  )
}

export default AddModal