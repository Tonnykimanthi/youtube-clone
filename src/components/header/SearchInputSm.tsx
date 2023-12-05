import { IoIosSearch } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import VoiceSearch from "./VoiceSearch";
import { useContext } from "react";
import { headerContext } from "../../layouts/Header";

const SearchInputSm = () => {
  const { searchIsVisible, handleDisplaySearch } = useContext(
    headerContext
  ) as { searchIsVisible: boolean; handleDisplaySearch: () => void };

  return (
    <div
      className={`text-white px-4 w-full flex justify-between absolute top-0 left-0 bg-black z-20 transition origin-left duration-200 ${
        searchIsVisible ? "scale-100" : "scale-0"
      }`}
    >
      <button
        onClick={handleDisplaySearch}
        className="p-2 rounded-full hover:bg-white/20 transition"
      >
        <IoArrowBackOutline className="w-6 h-6" />
      </button>
      <article className="flex w-2/3">
        <input
          name="search"
          type="search"
          placeholder="Search"
          autoComplete="off"
          className="bg-transparent text-white w-full h-full pl-4 rounded-l-full outline-none border border-white/20 focus:border-teal-700"
        />
        <button className="min-w-[4em] h-full grid place-items-center rounded-r-full bg-white/20 hover:bg-white/30 transition">
          <IoIosSearch className="fill-white w-6 h-6" />
        </button>
      </article>
      <VoiceSearch />
    </div>
  );
};

export default SearchInputSm;
