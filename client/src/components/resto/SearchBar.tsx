import { SearchIcon } from "lucide-react";
import { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log(searchText);
  };

  return (
    <div className="flex items-center rounded-full bg-white justify-between w-full p-3">
      <input
        type="text"
        className="bg-inherit w-full focus:outline-none pl-4"
        placeholder="Enter the dish or cuisine"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      <button className="mr-3">
        <SearchIcon className="text-[--primary]" onClick={handleSearch} />
      </button>
    </div>
  );
}

export default SearchBar;
