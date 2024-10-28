import { ArrowUpZA } from "lucide-react"
import SearchBar from "../../components/resto/SearchBar"
import { useEffect, useRef, useState } from "react";
import AddModal from "../../components/resto/AddModal";

function RestoRegistrationMenu() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const handleAdd = () => {
        setIsModalOpen(true);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div className="w-full flex justify-center">
            <div className="w-[1300px] flex relative p-4">
                <div className="w-1/2">
                    {/* Call the registration sidebar */}
                </div>

                <div className="w-1/2 flex flex-col items-center">
                    <div className="w-2/3">
                        <SearchBar />
                    </div>
                    <div className="w-2/3 justify-start p-3 flex items-center gap-5">
                        <ArrowUpZA />
                        <button 
                            onClick={handleAdd} 
                            className="rounded-full bg-[--primary] px-4 py-2 hover:bg-inherit border-2 border-[--primary]"
                        >
                            Add Items
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="absolute w-[calc(100vw-10px)] h-[calc(100vh-100px)] backdrop-blur flex justify-center items-center">
                    <div ref={ref} className="bg-white rounded-xl">
                        <AddModal  />
                    </div>
                </div>
            )}
        </div>
    )
}

export default RestoRegistrationMenu