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
        <div className="grid grid-cols-5 gap-4 mt-6">
          <div class="col-span-2 h-[400px] bg-red-400"></div>
          <div class="col-span-3 h-[400px] bg-red-400"></div>
          <div class="col-span-3 h-[400px] bg-red-400"></div>
          <div class="col-span-2 h-[400px] bg-red-400"></div>
        </div>
      </section>
    </>
  );
};

export default NewHighlight;
