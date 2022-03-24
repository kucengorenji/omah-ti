const Popular = () => {
  return (
    <>
      <section className="mt-16 text-center relative">
        <div>
          <h1 className="inline  text-3xl pb-3 font-bold ">
            POPULAR THIS WEEK
          </h1>
          <div className="border-b-4 border-gray-800 w-24 mx-auto rounded-full mt-3"></div>
        </div>
        <div className="mt-16 ">
          <h1 className="inline  text-3xl pb-3 font-bold ">BRAND FOR YOU</h1>
          <div className="border-b-4 border-gray-800 w-24 mx-auto rounded-full mt-3"></div>
        </div>
        <div className="my-16 flex bg-bottom-image bg-no-repeat bg-center min-h-[400px]	bg-cover  w-full">
          <div className="p-11 my-auto flex flex-col">
            <h1 className="text-blue-900 text-5xl font-bold">
              SUMMER <span className="text-red-600">COLLECTION</span>
            </h1>
            <button className="border font-bold p-3 mt-12 bg-white text-red-600 w-1/2">
              <a>PLACE YOUR ORDER</a>
            </button>
          </div>
          <div class="grid grid-flow-col gap-5 text-center auto-cols-max absolute bottom-0 m-6 ml-11 text-white">
            <div class="flex flex-col">
              <span class="font-mono text-3xl">
                <span>07</span>
              </span>
              days
            </div>
            <span class="font-mono text-3xl">:</span>
            <div class="flex flex-col">
              <span class="font-mono text-3xl">
                <span>08</span>
              </span>
              hours
            </div>
            <span class="font-mono text-3xl">:</span>
            <div class="flex flex-col">
              <span class="font-mono text-3xl">
                <span>04</span>
              </span>
              min
            </div>
            <span class="font-mono text-3xl">:</span>
            <div class="flex flex-col">
              <span class="font-mono text-3xl">
                <span>05 </span>
              </span>
              sec
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
