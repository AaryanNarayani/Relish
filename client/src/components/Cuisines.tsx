interface CuisinesProps {
    Cuisines: string[];
}
export default function Cuisines({Cuisines}: CuisinesProps) {
    return (
        <>
            <div className="flex flex-wrap w-[500px]">
                {Cuisines.map((cuisine, id) => {
                    return (
                        <div
                            key={id}
                            className="p-2 m-2 bg-white rounded-lg items-center text-md font-[relative] w-fit h-fit"
                        >
                            {cuisine}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
