const OutfitBar = () => {
  return (
    <>
      <ul className="flex space-x-8 w-full bg-[#FFFFFF] ml-4 overflow-x-auto">
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800 ml-11">
          <button>
            <a>New Arrivals </a>
          </button>
          <span className="bg-red-500 p-1 text-white rounded ml-2">#Fresh</span>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Dresses</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Tops</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Jackets</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Lingerie & Lounge Wear</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Beach Wear</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Blouse</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Denim</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Vintage</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Shoes</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Sandals</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Bags</a>
          </button>
        </li>
        <li className="whitespace-nowrap mr-2 p-2 my-1 border-b-2 border-white hover:border-b-2 hover:border-gray-800">
          <button>
            <a>Jewelries</a>
          </button>
        </li>
      </ul>
    </>
  );
};

export default OutfitBar;
