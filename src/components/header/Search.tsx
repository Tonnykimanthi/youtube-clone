import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex gap-x-5 w-1/3">
      <div className="w-full h-10 grid grid-cols-6 border border-white/30 rounded-full overflow-hidden">
        <article className="col-span-5">
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent text-white pl-4 w-full h-full outline-none"
          />
        </article>
        <button className="h-full px-5 bg-white/20">
          <IoIosSearch className="fill-white w-6 h-6" />
        </button>
      </div>
      <button className="p-2 grid place-items-center bg-white/20 rounded-full">
        <FaMicrophone className="fill-white w-6 h-6" />
      </button>
    </div>
  );
};

export default Search;
