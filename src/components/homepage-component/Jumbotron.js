import image from '../../assets/image-removebg-preview 1.png';

const Jumbotron = () => {
  return (
    <div className="flex  ">
      <div className="bg-[#1C2333] bg-decor-jumbotron text-white flex w-full min-h-[600px]">
        <div className="align-middle ml-[100px] my-auto rounded-lg justify-center p-11 w-full max-w-[500px] bg-gray-800">
          <h1 className="text-white text-5xl font-bold my-9">
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
      <div className="bg-[#F7C59F] flex w-full basis-6/12">
        <div className="relative rounded-full m-auto bg-white w-[341px] h-[341px]">
          <img
            src={image}
            className="absolute z-10 object-center h-[600px] -top-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
