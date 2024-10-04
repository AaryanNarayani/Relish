import { useState } from 'react'
import { Search } from "lucide-react";

function SearchBar() {

const [isSelected, setIsSelected] = useState<string>('dish');

    
  const handleSearch = () => {
    console.log('Biryani khayega bsdk');
  };

  return (
    <div className="w-[30rem] bg-white h-10 rounded-full flex items-center pr-4">
          <div className="flex gap-4 text-[--secondary] border-r border-[--secondary] py-4 w-1/3 relative items-center h-full">
            <button 
              className={`absolute left-0 h-full px-4 first-letter:${isSelected === 'dish' ? 'font-bold bg-[--primary] rounded-full' : ''}`} 
              onClick={() => setIsSelected('dish')}
            >
              Dish
            </button>
            <button 
              className={`absolute right-3 h-full px-4 ${isSelected === 'resto' ? 'font-bold bg-[--primary] rounded-full' : ''}` } 
              onClick={() => setIsSelected('resto')}
            >
              Resto
            </button>
          </div>
          <div className="flex justify-between w-3/4 pl-4">
            <input 
              type="text" 
              className="w-full focus:outline-none border-0 pl-2" 
              placeholder={`Search using ${isSelected === 'dish' ? 'Dish' : 'Restaurant'}`}
            />
            <button onClick={handleSearch}>
              <Search className="text-[--primary]"/>
            </button>
          </div>
        </div>
  )
}

export default SearchBar