import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex gap-x-5 w-2/4">
      <div className="w-full h-10 grid grid-cols-7">
        <article className="col-span-6">
          <input
            name="search"
            type="search"
            placeholder="Search"
            className="bg-transparent text-white pl-4 w-full h-full rounded-l-full outline-none border border-white/20 focus:border-teal-700"
          />
        </article>
        <button className="h-full grid place-items-center rounded-r-full bg-white/20 hover:bg-white/30 transition">
          <IoIosSearch className="fill-white w-6 h-6" />
        </button>
      </div>
      <button className="p-3 grid place-items-center bg-white/20 rounded-full hover:bg-white/30 transition relative group">
        <FaMicrophone className="fill-white w-5 h-5" />
        <small className="text-white absolute -bottom-12 whitespace-nowrap px-4 py-1.5 bg-slate-500 rounded scale-0 group-hover:scale-100 transition-all z-10">
          Search with your voice
        </small>
      </button>
    </div>
  );
};

export default Search;
