import basket from '../assets/shopping-basket.png';

const Navbar = () => {
  return (
    <>
      <nav className="flex p-3 justify-between bg-[#FAFAFA]">
        <div className="ml-12 font-bold text-3xl mt-1 text-cente text-bottom align-bottom">
          Laura’s Closet
        </div>
        <form>
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm text-white bg-[#FAFAFA] border-b-2 pl-10 focus:outline-none  focus:text-gray-900"
              placeholder="Search for an Item..."
              autocomplete="off"
            />
          </div>
        </form>

        <div className="mr-12">
          <ul className="flex p-3">
            <li>
              <a
                href="#sdfasdjfl;"
                className="border-b-2 border-[#FAFAFA]
bg-[#FAFAFA] hover:border-b-2 hover:border-gray-800 p-3"
              >
                Store
              </a>
            </li>
            <li>
              <a
                href="#sdfasdjfl;"
                className="border-b-2 border-[#FAFAFA]
bg-[#FAFAFA] hover:border-b-2 hover:border-gray-800 p-3"
              >
                Account
              </a>
            </li>
            <li>
              <a
                href="#sdfasdjfl;"
                className="border-b-2 border-[#FAFAFA]
bg-[#FAFAFA] hover:border-b-2 hover:border-gray-800 p-3"
              >
                Wish List
              </a>
            </li>
            <li>
              <a
                href="#sdfasdjfl;"
                className="border-b-2 border-[#FAFAFA]
bg-[#FAFAFA] hover:border-b-2 hover:border-gray-800 p-3 font-bold"
              >
                Basket
                <img src={basket} className="inline" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
