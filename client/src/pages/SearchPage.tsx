import { useState, useEffect } from "react";
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
    veg: false,
  },
  {
    dish: "Classic Pancakes",
    desc: "Fluffy stack of pancakes served with maple syrup and butter.",
    price: 9.99,
    stars: 5,
    url: "/search/dishes/panCakes-tumbnail.png",
    veg: true,
  },
  {
    dish: "California Roll",
    desc: "Fresh avocado and cucumber sushi rolls with crab meat and sesame seeds.",
    price: 15.99,
    stars: 4,
    url: "/search/dishes/sushi-tumbnail.png",
    veg: false,
  },
  {
    dish: "Belgian Waffles",
    desc: "Crispy golden waffles topped with fresh berries and whipped cream.",
    price: 12.99,
    stars: 3,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: true,
  },
  {
    dish: "Spicy Miso Ramen",
    desc: "Spicy miso-based broth with corn, bamboo shoots, and marinated pork.",
    price: 14.99,
    stars: 5,
    url: "/search/dishes/tonkotsu-tumbnail.png",
    veg: false,
  },
  {
    dish: "Blueberry Pancakes",
    desc: "Fresh blueberry-studded pancakes with honey butter and warm syrup.",
    price: 11.99,
    stars: 4,
    url: "/search/dishes/panCakes-tumbnail.png",
    veg: true,
  },
  {
    dish: "Dragon Roll",
    desc: "Tempura shrimp and cucumber topped with avocado and eel sauce.",
    price: 17.99,
    stars: 5,
    url: "/search/dishes/sushi-tumbnail.png",
    veg: false,
  },
  {
    dish: "Chocolate Waffles",
    desc: "Rich chocolate waffles with banana slices and chocolate sauce.",
    price: 13.99,
    stars: 4,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: true,
  },
  {
    dish: "Veggie Ramen",
    desc: "Mushroom-based broth with tofu, corn, and seasonal vegetables.",
    price: 12.99,
    stars: 4,
    url: "/search/dishes/tonkotsu-tumbnail.png",
    veg: true,
  },
  {
    dish: "Banana Pancakes",
    desc: "Caramelized banana pancakes with walnuts and caramel sauce.",
    price: 10.99,
    stars: 5,
    url: "/search/dishes/panCakes-tumbnail.png",
    veg: true,
  },
  {
    dish: "Rainbow Roll",
    desc: "California roll topped with assorted fresh sashimi and avocado.",
    price: 18.99,
    stars: 5,
    url: "/search/dishes/sushi-tumbnail.png",
    veg: false,
  },
  {
    dish: "Fruit Waffles",
    desc: "Light and crispy waffles topped with seasonal fresh fruits.",
    price: 14.99,
    stars: 4,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: true,
  },
  {
    dish: "Chicken Ramen",
    desc: "Light chicken broth with grilled chicken, spinach, and green onions.",
    price: 13.99,
    stars: 4,
    url: "/search/dishes/tonkotsu-tumbnail.png",
    veg: false,
  },
  {
    dish: "Chocolate Chip Pancakes",
    desc: "Classic pancakes loaded with chocolate chips and vanilla cream.",
    price: 11.99,
    stars: 5,
    url: "/search/dishes/panCakes-tumbnail.png",
    veg: true,
  },
  {
    dish: "Spicy Tuna Roll",
    desc: "Spicy tuna with cucumber and green onions, topped with sesame seeds.",
    price: 16.99,
    stars: 4,
    url: "/search/dishes/sushi-tumbnail.png",
    veg: false,
  },
  {
    dish: "Cinnamon Waffles",
    desc: "Warm cinnamon-spiced waffles with maple butter and pecans.",
    price: 13.99,
    stars: 4,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: true,
  },
  {
    dish: "Spicy Tuna Roll deluxe",
    desc: "Spicy tuna with cucumber and green onions, topped with sesame seeds.",
    price: 16.99,
    stars: 4,
    url: "/search/dishes/sushi-tumbnail.png",
    veg: false,
  },
  {
    dish: "Large Cinnamon Waffles",
    desc: "Warm cinnamon-spiced waffles with maple butter and pecans.",
    price: 20.99,
    stars: 5,
    url: "/search/dishes/waffles-tumbnail.png",
    veg: true,
  },
  {
    dish: "Chicken Burger",
    desc: "Light chicken broth with grilled chicken, spinach, and green onions.",
    price: 14.99,
    stars: 2,
    url: "/search/dishes/tonkotsu-tumbnail.png",
    veg: false,
  },
  {
    dish: "Chocolate Pancakes",
    desc: "Fluffy stack of pancakes served with chocolate syrup.",
    price: 9.99,
    stars: 3,
    url: "/search/dishes/panCakes-tumbnail.png",
    veg: true,
  },
];

function SearchPage() {
  const [searchType, setSearchType] = useState<string>('dish');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>(searchResultList);
  const location = useLocation();

  useEffect(()=>{
    const fetchSearchResults = async () => {
      
    }

  },[searchType]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    const type = searchParams.get('type') || 'dish';
    setSearchType(type);
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
      <button className="fixed bottom-10 right-10 bg-[--secondary] p-4 rounded-full text-white hover:bg-opacity-90 transition-colors duration-200">
        <ShoppingCart />
      </button>
    </div>
  );
}

export default SearchPage;