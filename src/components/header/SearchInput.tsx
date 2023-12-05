import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className="w-full h-10 grid grid-cols-7">
      <article className="col-span-6">
        <input
          name="search"
          type="search"
          placeholder="Search"
          className="bg-transparent text-white pl-4 w-full h-full rounded-l-full outline-none border border-white/20 focus:border-teal-700"
        />
      </article>
      <button className="h-full grid place-items-center min-w-[3em] rounded-r-full bg-white/20 hover:bg-white/30 transition">
        <IoIosSearch className="fill-white w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchInput;
