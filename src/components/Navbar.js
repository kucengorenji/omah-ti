const Navbar = () => {
  return (
    <>
      <nav className="flex p-3 justify-between mx-7 bg-slate-300">
        <div>
          <img src="#kjasfdklj" alt="logo" />
        </div>
        <span class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
          <i class="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
        </span>
        <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i class="fas fa-bars"></i>
        </div>{' '}
        <div>
          <ul className="flex p-3">
            <li>
              <a href="#sdfasdjfl;" className="p-3">
                Home
              </a>
            </li>
            <li>
              <a href="#sdfasdjfl;" className="p-3">
                Home
              </a>
            </li>
            <li>
              <a href="#sdfasdjfl;" className="p-3">
                Home
              </a>
            </li>
            <li>
              <a href="#sdfasdjfl;" className="p-3">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
