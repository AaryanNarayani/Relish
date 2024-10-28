import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { Search } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

function SearchBar() {
  const [isSelected, setIsSelected] = useState<string>('dish');
  const [searchText, setSearchText] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim()) {
      console.log(`Searching for ${searchText} in ${isSelected}`);
      navigate(`/find?q=${encodeURIComponent(searchText.trim())}&type=${isSelected}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };

    const currentRef = searchRef.current;
    currentRef?.addEventListener("keydown", handleKeyDown);

    return () => {
      currentRef?.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchText]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const type = urlParams.get('type') || 'dish';
    setIsSelected(type);
    if (query) {
      setSearchText(decodeURIComponent(query));
    }
  }, []);

  return (
    <div className="w-[35rem] bg-white h-12 rounded-full flex items-center pr-4">
      <div className="flex gap-4 text-[--secondary] py-4 w-1/3 relative items-center h-full">
        <button 
          className={`absolute left-0 h-full px-5 transition-all duration-300 ${
            isSelected === 'dish' ? 'font-bold bg-[--primary] rounded-full' : ''
          }`} 
          onClick={() => setIsSelected('dish')}
        >
          DISH
        </button>
        <button 
          className={`absolute right-1 h-full px-5 transition-all duration-300 ${
            isSelected === 'resto' ? 'font-bold bg-[--primary] rounded-full' : ''
          }`} 
          onClick={() => setIsSelected('resto')}
        >
          RESTO
        </button>
      </div>
      <div className="flex justify-between w-3/4 pl-4 border-l border-[--secondary]">
        <input 
          type="text" 
          className="w-full focus:outline-none border-0 pl-2" 
          placeholder={`Search using ${isSelected === 'dish' ? 'Dish' : 'Restaurant'}`}
          value={searchText}
          onChange={handleSearchChange}
          ref={searchRef}
        />
        <button 
          onClick={handleSearch} 
          className="hover:bg-gray-100 p-1 rounded-full transition-colors duration-200"
        >
          <Link to={`/find?q=${searchText}&type=${isSelected}`}><Search className="text-[--primary]"/></Link>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;