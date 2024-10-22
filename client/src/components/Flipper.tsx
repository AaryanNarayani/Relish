import { LayoutDashboard,SquareMenu,Images,ChartNoAxesCombined } from "lucide-react";
import { Link } from "react-router-dom";

export default function Flipper({data} : any){
    return(
        <div className="theCard relative min-w-[250px] max-w-[250px] h-[350px] bg-white preserve-3d rotate-y-180 transition-transform ease-in-out 
        duration-500 rounded ">
            <div className="thefront absolute w-full h-full backface-hidden rounded ">
                <img className = "rounded h-full w-full object-cover"src={data.img} alt="Front" />
            </div>
            <div className="theback absolute w-full h-full rotate-y backface-hidden flex-col items-start p-[10px] pt-[30px] overflow-y-auto no-scroller">
                <h1 className="text-[--secondary] text-[25px] font-medium " >{data.name.toUpperCase()}</h1>
                <p className="text-[--secondary] pt-[3px] text-[13px] pl-[15px] overflow-hidden">{data.address}</p>
                <div className="buttons h-fit pt-[10px]">
                    <Link className="flex items-center gap-[20px] cursor-pointer" to={'/admin/hotel/dashboard'}>
                        <button className="h-[40px] w-[40px] bg-[--primary] rounded-full m-[5px] text-[--secondary] flex items-center justify-center"><LayoutDashboard /></button>
                        <p className="text-[--secondary] ">DASHBOARD</p>
                    </Link>
                    <Link className="flex items-center gap-[20px] cursor-pointer" to={'/admin/hotel/menu'}>
                        <button className="h-[40px] w-[40px] bg-[--primary] rounded-full m-[5px] text-[--secondary] flex items-center justify-center"><SquareMenu /></button>
                        <p className="text-[--secondary] ">MENU</p>
                    </Link>
                    <Link className="flex items-center gap-[20px] cursor-pointer" to={'/admin/hotel/images'}>
                        <button className="h-[40px] w-[40px] bg-[--primary] rounded-full m-[5px] text-[--secondary] flex items-center justify-center"><Images /></button>
                        <p className="text-[--secondary] ">IMAGES</p>
                    </Link>
                    <Link className="flex items-center gap-[20px] cursor-pointer" to={'/admin/hotel/analytics'}>
                        <button className="h-[40px] w-[40px] bg-[--primary] rounded-full m-[5px] text-[--secondary] flex items-center justify-center"><ChartNoAxesCombined /></button>
                        <p className="text-[--secondary] ">ANALYTICS</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

  