import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";
import { useLocation } from 'react-router-dom';

interface SearchResult {
  dish: string;
  desc: string;
  price: number;
  stars: number;
  url: string;
  veg: boolean;
}

const searchResultList: SearchResult[] = [
  {
    dish: "Tonkotsu Ramen",
    desc: "Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles.",
    price: 13.99,
    stars: 4,
    url: "/search/dishes/tonkotsu-tumbnail.png",
    veg: true,
  },
  {
    dish: "Pancakes",
    desc: "Fluffy stack of pancakes served with maple syrup and butter.",
    price: 9.99,
    stars: 5,
    url: "/search/dishes/panCakes-tumbnail.png",
    veg: true,
  },
  {
    dish: "Sushi",
    desc: "Assorted fresh sushi rolls with wasabi and pickled ginger.",
    price: 15.99,
    stars: 4,
    url: "/search/dishes/sushi-tumbnail.png",
    veg: true,
  },
  {
    dish: "Waffles",
    desc: "Assorted fresh sushi rolls with wasabi and pickled ginger.",
    price: 15.99,
    stars: 3,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: false,
  },
  {
    dish: "Tonkotsu Ramen",
    desc: "Rich, creamy pork bone broth with tender chashu, soft-boiled egg, and fresh noodles.",
    price: 13.99,
    stars: 4,
    url: "/search/dishes/tonkotsu-tumbnail.png",
    veg: true,
  },
  {
    dish: "Pancakes",
    desc: "Fluffy stack of pancakes served with maple syrup and butter.",
    price: 9.99,
    stars: 5,
    url: "/search/dishes/panCakes-tumbnail.png",
    veg: true,
  },
  {
    dish: "Sushi",
    desc: "Assorted fresh sushi rolls with wasabi and pickled ginger.",
    price: 15.99,
    stars: 4,
    url: "/search/dishes/sushi-tumbnail.png",
    veg: false,
  },
  {
    dish: "Waffles",
    desc: "Assorted fresh sushi rolls with wasabi and pickled ginger.",
    price: 15.99,
    stars: 3,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: true,
  },
];

function SearchPage() {
  const [searchType, setSearchType] = useState<'dish' | 'resto'>('dish');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>(searchResultList);
  const location = useLocation();

  useEffect(()=>{
    const fetchSearchResults = async () => {
      
    }

  },[searchType]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    handleSearch(query || '');
  }, [location.search]);

  const handleSearch = (query: string) => {
    query = query.trim()
    if (query === '') {
      setFilteredResults(searchResultList);
    } else {
      const newFilteredResults = searchResultList.filter((item) =>
        item.dish.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(newFilteredResults);
    }
  };

  return (
    <div className="flex flex-col w-full items-center gap-4 p-4 ">
      <SearchBar />
      <div className="flex gap-6 flex-wrap justify-center w-4/5">
        {filteredResults.length > 0 ? (
          filteredResults.map((result, index) => (
            <SearchCard key={index} {...result} />
          ))
        ) : (
          <p>No results found. Try a different search term.</p>
        )}
      </div>
      <button className="fixed bottom-10 right-10 bg-[--primary] p-4 rounded-full text-white hover:bg-opacity-90 transition-colors duration-200">
        <ShoppingCart />
      </button>
    </div>
  );
}

export default SearchPage;