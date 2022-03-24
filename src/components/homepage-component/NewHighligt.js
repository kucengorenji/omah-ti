const NewHighlight = () => {
  return (
    <>
      <section className="mt-16 text-center max-w-[]">
        <div>
          <h1 className="inline  text-3xl pb-3 font-bold ">
            THIS WEEK HIGHLIGHTS
          </h1>
          <div className="border-b-4 border-gray-800 w-24 mx-auto rounded-full mt-3"></div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-6 ">
          <div class="col-span-2 h-[400px] bg-data-1 bg-no-repeat bg-cover text-white flex-col p-24 justify-center relative">
            <h1 className="text-6xl font-semi-bold m-auto">Exclusive Shoes</h1>
            <div className="absolute text-left border m-5 p-3 backdrop-blur-2xl	w-1/2 bottom-0 left-0 max-w-[220px]">
              <p>ExclusiveShoes</p>
              <p>PRICE 20% OFF</p>
              <p>DISCOUNT CODE VATR3920</p>
            </div>
          </div>
          <div class="col-span-3 h-[400px] bg-data-2 bg-no-repeat bg-cover text-white flex-col p-24 justify-center relative">
            <h1 className="text-6xl font-semi-bold m-auto">
              Exquisite Styles & Collections
            </h1>
            <div className="absolute text-left border m-5 p-3 backdrop-blur-2xl	w-1/2 bottom-0 left-0 max-w-[220px]">
              <p>Exquisite Styles & Collections</p>
              <p>PRICE 20% OFF</p>
              <p>DISCOUNT CODE VATR3920</p>
            </div>
          </div>
          <div class="col-span-3 h-[400px] bg-data-4 bg-no-repeat bg-cover text-white flex-col p-24 justify-center relative">
            <h1 className="text-6xl font-semi-bold m-auto">New Arrivals</h1>
            <div className="absolute text-left border m-5 p-3 backdrop-blur-2xl	w-1/2 bottom-0 left-0 max-w-[220px]">
              <p>New Arrivals</p>
              <p>PRICE 20% OFF</p>
              <p>DISCOUNT CODE VATR3920</p>
            </div>
          </div>
          <div class="col-span-2 h-[400px] bg-data-3 bg-no-repeat bg-cover text-white flex-col p-24 justify-center relative">
            <h1 className="text-6xl font-semi-bold m-auto">Exclusive Items</h1>
            <div className="absolute text-left border m-5 p-3 backdrop-blur-2xl	w-1/2 bottom-0 left-0 max-w-[220px]">
              <p>Exclusive Items</p>
              <p>PRICE 20% OFF</p>
              <p>DISCOUNT CODE VATR3920</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHighlight;
