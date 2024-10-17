function AdminPage() {

  const name = 'Aryan Narayani'
  
  return (
    <div className="w-full flex justify-center">
        <div className="w-[1330px]">
          <h1 className="text-4xl text-[--primary]">WELCOME</h1>
          <h1 className="text-4xl flex justify-center">{name.toUpperCase()}</h1>
        </div>
    </div>
  )
}

export default AdminPage