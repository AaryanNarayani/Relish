import { useState, ChangeEvent, useEffect } from 'react'
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';

function SearchBar(){
  const [isSelected, setIsSelected] = useState<'dish' | 'resto'>('dish');
  const [searchText, setSearchText] = useState<string>('')

  const handleSearch = () => {
    console.log(`Searching for ${searchText} in ${isSelected}`);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
      setSearchText(query);
    }
  }, []);

  return (
    <div className="w-[30rem] bg-white h-10 rounded-full flex items-center pr-4">
      <div className="flex gap-4 text-[--secondary] border-r border-[--secondary] py-4 w-1/3 relative items-center h-full">
        <button 
          className={`absolute left-0 h-full px-4 transition-all duration-300 ${isSelected === 'dish' ? 'font-bold bg-[--primary] rounded-full' : ''}`} 
          onClick={() => setIsSelected('dish')}
        >
          Dish
        </button>
        <button 
          className={`absolute right-1 h-full px-4 transition-all duration-300 ${isSelected === 'resto' ? 'font-bold bg-[--primary] rounded-full ' : ''}`} 
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
          value={searchText}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="hover:bg-gray-100 p-1 rounded-full transition-colors duration-200">
          <Link to={`/find?q=${searchText}`}><Search className="text-[--primary]"/></Link>
        </button>
      </div>
    </div>
  )
}

export default SearchBar