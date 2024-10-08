interface CuisinesProps {
    Cuisines: string[];
}
export default function Cuisines({Cuisines}: CuisinesProps) {
    return (
        <>
            <div className="flex flex-wrap w-[500px] gap-2">
                {Cuisines.map((cuisine, id) => {
                    return (
                        <div
                            key={id}
                            className="px-4 py-2 bg-white rounded-full items-center text-md font-[--relative] w-fit h-fit"
                        >
                            {cuisine}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
