import { Description } from "@mui/icons-material";
import { Avatar } from "@mui/material";

interface ReviewCardProps{
    avatar?: string;
    user: string;
    stars: string;
    Description: string;
}
export default function ReviewCard({stars, Description, user}: ReviewCardProps){
    return(
        <>
            <div className="flex flex-col p-5 bg-white rounded-lg min-w-full">
                <div className="flex justify-start items-center gap-2">
                    <div>
                        <Avatar/>
                    </div>
                    <div>
                        <h1 className="text-xl">{user}</h1>
                    </div>
                </div>
                <div className="flex text-lg font-bold mt-2 gap-2">
                    <span className="text-xl">Rated</span> 
                    <span>
                    <span className="text-[--primary]">★ </span>
                    <span>{stars}</span>
                    </span>
                </div>
                <div className="flex justify-start flex-wrap w-[95%] mt-2">
                    {Description}
                </div>
            </div>
        </>
    )
}