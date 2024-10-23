import { MapPinned,SquareMenu } from "lucide-react";


export default function RegistrationProgressCard(){
    return(
        <div className="bg-white h-full w-[68vh] ml-[60px] rounded-md p-[30px]">
        <h1 className="text-[--secondary] text-[33px] pt-[10px]">Registration Progress</h1>
        <div className="p-[10px] pt-[37px] h-[85%] w-full flex flex-col gap-[25px] items-center ">
        <div className="h-[20%] w-full flex items-center gap-[20px]">
            <button className="p-4 bg-white rounded-full border-[6px] border-[--primary]">
            <MapPinned />
            </button>
            <div className="flex flex-col relative w-full">
                <p className="text-[22px]  text-[--secondary] w-full">Resto Information </p>
                <p className="text-[12px]  text-[#9f9f9f] absolute top-[24px] w-full">Name location and contact Number</p>
            </div>
          </div>
          <div className="w-full flex items-center">
            <button className="p-4 bg-white rounded-full  border-[6px] border-[--primary] flex items-center justify-center">
            <SquareMenu/>
            </button>
            <div className="flex flex-col relative gap-2">
                <p className="text-[22px] ml-5 text-[--secondary]">Menu and Operational details</p>
                <p className="text-[12px] ml-5 text-[#9f9f9f] absolute top-[24px] w-full">Name location and contact Number</p>
            </div>
          </div>
        </div>
      </div>
    );
}
