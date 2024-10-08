import { Avatar } from "@mui/material";
import { Instagram, LinkIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface RestoInfoProps {
  Name: string;
  Desc: string;
  Address: string;
  timings: string;
  socials?: {
    instagram?: string;
    phone?: string;
    website?: string;
  };
  owner: string;
  profile?: string;
}
export default function RestoInfo({
  Name,
  Desc,
  Address,
  timings,
  socials,
  owner,
  profile,
}: RestoInfoProps) {
  return (
    <>
      <div className="w-[525px] h-fit bg-white rounded-2xl p-14 pb-7 flex flex-col font-[--relative] text-[--secondary]">
        <div className="font-[--relative] flex gap-4 items-center">
          <h1 className="text-5xl">{Name}</h1>
          <div className="text-xl ml-4">
            <span className="text-[--primary] text-xl">★</span>
            <span> 5.0</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" opacity-90 text-md mt-5">
            {Desc}
          </div>
          <div className="w-full mt-5">
            <hr className="w-full border border-[--primary] opacity-40" />
          </div>
          <div className="mt-2 flex gap-40">
            <div className="w-48 text-[--secondary] opacity-90">{Address}</div>
            <div className="flex text-[--secondary] opacity-90">2.0 km</div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="flex text-[--veg] text-xl">Open Now</div>
            <div className="text-[--secondary] opacity-90 ml-2 mr-2">/</div>
            <div className="text-[--secondary] opacity-90">{timings}</div>
          </div>
          <div className="flex gap-4 mt-2">
            <div>
              <Link to={`${socials?.phone}`}>
                <Phone></Phone>
              </Link>
            </div>
            <div>
              <Link to={`${socials?.instagram}`}>
                <Instagram></Instagram>
              </Link>
            </div>
            <div>
              <Link to={`${socials?.website}`}>
                <LinkIcon></LinkIcon>
              </Link>
            </div>
          </div>
          <div className="w-full mt-5">
            <hr className="w-full border border-[--primary] opacity-40" />
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <div>
                <Avatar src={profile}/>
            </div>
            <div className="flex flex-col">
                <div className="text-xl">
                    {owner}
                </div>
                <div className="text-sm text-[--secondary] opacity-90">
                    OWNER
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
