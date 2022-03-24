const Jumbotron = () => {
  return (
    <div className="flex  absolute left-0 w-full ">
      <div className="bg-[#1C2333] text-white  flex w-full h-screen">
        <div className="align-middle ml-[100px] my-auto rounded-lg justify-center p-11 max-w-[500px] bg-gray-700">
          <h1 className="text-white text-5xl font-bold">
            Get Up to 30% off{' '}
            <span className="text-yellow-600">New Arrival</span>
          </h1>
          <h2 className="my-3 text-white text-xl">
            Introducing our latest collection Product
          </h2>
          <button className="border p-3 mt-5 border-white">
            <a>PLACE YOUR ORDER</a>
          </button>
        </div>
      </div>
      <div className="bg-[#F7C59F] flex w-full basis-4/6">
        <div className="rounded-full m-auto bg-white w-[341px] h-[341px]"></div>
      </div>
    </div>
  );
};

export default Jumbotron;
