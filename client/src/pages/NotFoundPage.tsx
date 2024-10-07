function NotFoundPage() {
  return (
    <div className="w-full flex justify-center items-center h-[calc(100vh-60px)]">
      <div>
        <div className="flex items-center">
          <h1 className="text-[12rem]">4</h1>
          <img src="/Donut.png" alt="" className="h-52"/>
          <h1 className="text-[12rem]">4</h1>
        </div>
        <p className="text-center -translate-y-10 text-[50px]">
         Oops!
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
