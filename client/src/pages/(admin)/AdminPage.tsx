import { useRef } from "react";
import Flipper from "../../components/Flipper";
import { ChevronRight, ChevronLeft } from "lucide-react";


function AdminPage() {

  const name = 'Aryan Narayani';

  type cardData = {
    img : string;
    name : string;
    address : string;
  }

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = ()=>{
        if(scrollRef.current){
          scrollRef.current.scrollBy({ left: -250 , behavior: "smooth"});
        }
  }

  const scrollRight = ()=>{
    if(scrollRef.current){
      scrollRef.current.scrollBy({ left: 250 , behavior: "smooth"});
    }
}

  const data:cardData[] = [
    {
      img : '/search/hotels/samudra.png',
      name : 'Hotel Samudra',
      address : 'Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India'
    },
    {
      img : '/search/hotels/samudra.png',
      name : 'Hotel Samudra',
      address : 'Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India'
    },
    {
      img : '/search/hotels/samudra.png',
      name : 'Hotel Samudra',
      address : 'Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India'
    },
    {
      img : '/search/hotels/samudra.png',
      name : 'Hotel Samudra',
      address : 'Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India'
    },
    {
      img : '/search/hotels/samudra.png',
      name : 'Hotel Samudra',
      address : 'Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India'
    },
    {
      img : '/search/hotels/samudra.png',
      name : 'Hotel Samudra',
      address : 'Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India'
    },
    {
      img : '/search/hotels/samudra.png',
      name : 'Hotel Samudra',
      address : 'Samudra Hotel 123 Ocean View Lane,Mallappuram City, 67890Kerala, India'
    },
  ];
   
    


  return (
    <div className="w-full  items-center h-[calc(100vh-60px)]">
        <div className="w-full h-[180px]" >
          <h1 className="text-4xl text-[--primary]">WELCOME</h1>
          <h1 className="text-4xl flex justify-center">{name.toUpperCase()}</h1>
        </div>

      <div className="cardContainer w-full h-[60vh] p-[20px] flex-col ">
          <p className="pb-[10px] pl-[10px] text-[--secondary] text-[20px]">Resto Owned,</p>
          <div className="RestoList ml-[40px] flex gap-[60px] overflow-x-scroll no-scroller " ref={scrollRef}>
            {data.map((val):any => {return <Flipper data={val}/>})}
          </div>
          <div className="flex gap-[5px] ml-[10px]">
            <button onClick={scrollLeft}><ChevronLeft/></button>
            <button onClick={scrollRight}><ChevronRight /></button>
          </div>
      </div>

    </div>
  )
}

export default AdminPage