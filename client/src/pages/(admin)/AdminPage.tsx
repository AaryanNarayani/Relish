import { useRef } from "react";
import { ChevronRight, ChevronLeft, Plus, ShoppingBag, LayoutDashboard, Images, PieChart, Camera, Users2, Bell, Settings, HelpCircle, Clock, Activity } from "lucide-react";
import { Link } from "react-router-dom";

function AdminPage() {
  const name = 'Aryan Narayani';

  type CardData = {
    img: string;
    name: string;
    address: string;
  }

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  }

  const data: CardData[] = [
    {
      img: '/search/hotels/samudra.png',
      name: 'Hotel Samudra',
      address: 'Samudra Hotel 123 Ocean View Lane, Mallappuram City, Kerala'
    },
    {
      img: '/search/hotels/samudra.png',
      name: 'Hotel Samudra',
      address: 'Samudra Hotel 123 Ocean View Lane, Mallappuram City, Kerala'
    },
    {
      img: '/search/hotels/samudra.png',
      name: 'Hotel Samudra',
      address: 'Samudra Hotel 123 Ocean View Lane, Mallappuram City, Kerala'
    },
    {
      img: '/search/hotels/samudra.png',
      name: 'Hotel Samudra',
      address: 'Samudra Hotel 123 Ocean View Lane, Mallappuram City, Kerala'
    },
    {
      img: '/search/hotels/samudra.png',
      name: 'Hotel Samudra',
      address: 'Samudra Hotel 123 Ocean View Lane, Mallappuram City, Kerala'
    },
    {
      img: '/search/hotels/samudra.png',
      name: 'Hotel Samudra',
      address: 'Samudra Hotel 123 Ocean View Lane, Mallappuram City, Kerala'
    },
    {
      img: '/search/hotels/samudra.png',
      name: 'Hotel Samudra',
      address: 'Samudra Hotel 123 Ocean View Lane, Mallappuram City, Kerala'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[--ternary] to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[--primary] to-[--primary-50] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center space-y-8">
            {/* Profile Section */}
            <div className="relative group">
              <div className="w-24 h-24 bg-[--secondary] rounded-full flex items-center justify-center text-[--primary] text-3xl font-bold cursor-pointer hover:bg-opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105">
                {name.split(' ').map(word => word[0]).join('')}
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <label className="cursor-pointer bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-60 transition-all duration-300">
                  <Camera className="w-5 h-5" />
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>
            </div>

            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold text-[--secondary] font-['relative-faux'] tracking-wide">
                Welcome Back
              </h1>
              <p className="text-2xl text-[--secondary] font-['Manrope'] opacity-90">
                {name}
              </p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mt-10">
              {[
                { icon: <Users2 className="w-7 h-7" />, label: "Switch Account" },
                { icon: <Bell className="w-7 h-7" />, label: "Notifications", count: 3 },
                { icon: <Settings className="w-7 h-7" />, label: "Settings" },
                { icon: <HelpCircle className="w-7 h-7" />, label: "Help Center" }
              ].map((item, index) => (
                <button key={index} 
                  className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-2xl 
                  hover:bg-white/40 transition-all duration-300 group shadow-lg hover:shadow-xl
                  transform hover:-translate-y-1">
                  <div className="relative flex items-center justify-center">
                    <div className="text-[--secondary] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    {item.count && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full 
                      px-2 py-0.5 shadow-md animate-pulse">
                        {item.count}
                      </span>
                    )}
                  </div>
                  <span className="text-[--secondary] text-sm font-medium mt-3">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Quick Stats Row */}
            <div className="flex gap-8 w-full max-w-2xl justify-center mt-6">
              {[
                { icon: <Clock className="w-5 h-5" />, text: "Last Login: 2 hours ago" },
                { icon: <Activity className="w-5 h-5" />, text: "Active Orders: 24" }
              ].map((stat, index) => (
                <div key={index} 
                  className="flex items-center gap-3 bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl
                  shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white/40">
                  <span className="text-[--secondary]">{stat.icon}</span>
                  <span className="text-[--secondary] text-sm font-medium">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Restaurants Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[--secondary] font-['relative-faux']">
            Your Restaurants
          </h2>
          <Link 
            to="/admin/add-restaurant" 
            className="flex items-center gap-2 px-6 py-3 bg-[--primary] text-[--secondary] rounded-xl
            hover:bg-[--primary-60] transition-all duration-300 font-medium shadow-md hover:shadow-lg
            transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5" />
            <span>Add New</span>
          </Link>
        </div>

        <div className="relative">
          <div 
            className="flex gap-8 overflow-x-auto scroll-smooth pb-8 no-scrollbar"
            ref={scrollRef}
          >
            {data.map((restaurant, index) => (
              <div 
                key={index}
                className="min-w-[300px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[--primary-50] hover:border-[--primary]"
              >
                <img 
                  src={restaurant.img} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[--secondary]">{restaurant.name}</h3>
                  <p className="text-sm text-[--meta] mt-1 line-clamp-2">{restaurant.address}</p>
                  
                  {/* Quick Access Options */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link 
                      to={`/admin/hotel/dashboard`}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[--primary-50] hover:bg-[--primary] text-[--secondary] transition-all duration-300"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span className="text-sm font-medium">Dashboard</span>
                    </Link>
                    
                    <Link 
                      to={`/admin/hotel/menu`}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[--primary-50] hover:bg-[--primary] text-[--secondary] transition-all duration-300"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span className="text-sm font-medium">Menu</span>
                    </Link>
                    
                    <Link 
                      to={`/admin/hotel/images`}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[--primary-50] hover:bg-[--primary] text-[--secondary] transition-all duration-300"
                    >
                      <Images className="w-4 h-4" />
                      <span className="text-sm font-medium">Images</span>
                    </Link>
                    
                    <Link 
                      to={`/admin/hotel/analytics`}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[--primary-50] hover:bg-[--primary] text-[--secondary] transition-all duration-300"
                    >
                      <PieChart className="w-4 h-4" />
                      <span className="text-sm font-medium">Analytics</span>
                    </Link>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-4 pt-3 border-t border-[--primary-50] flex justify-between items-center">
                    <span className="text-sm text-[--meta]">ID: #{index + 1000}</span>
                    <Link 
                      to={`/admin/hotel/dashboard`}
                      className="text-[--primary] hover:text-[--primary-60] font-medium text-sm transition-colors duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Buttons */}
          <div className="flex justify-left mt-3 gap-3">
            <button 
              onClick={scrollLeft}
              className="p-4 rounded-full bg-white shadow-md hover:shadow-lg border-2 border-[--primary-50]
              hover:border-[--primary]"
            >
              <ChevronLeft className="w-4 h-4 text-[--secondary]" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-4 rounded-full bg-white shadow-md hover:shadow-lg border-2 border-[--primary-50]
              hover:border-[--primary]"
            >
              <ChevronRight className="w-4 h-4 text-[--secondary]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
