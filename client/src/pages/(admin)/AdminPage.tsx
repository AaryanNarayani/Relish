function AdminPage() {

  const name = 'Aryan Narayani';

  const data = [
    {
      img : '',
      name : 'Hotel Samudra',
      address : ''
    }
  
  ];
   
    
  


  return (
    <div className="w-full  items-center h-[calc(100vh-60px)]">
        <div className="w-full h-[200px]" >
          <h1 className="text-4xl text-[--primary]">WELCOME</h1>
          <h1 className="text-4xl flex justify-center">{name.toUpperCase()}</h1>
        </div>

      <div className="cardContainer w-full h-[60vh] p-[25px] ">
         
      </div>

    </div>
  )
}

export default AdminPage