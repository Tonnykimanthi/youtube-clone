import { IoIosSearch } from "react-icons/io";
import VoiceSearch from "./VoiceSearch";
import { useContext } from "react";
import { headerContext } from "../../layouts/Header";

const SearchVoiceBtnForSm = () => {
  const { searchIsVisible, handleDisplaySearch } = useContext(headerContext) as {searchIsVisible: boolean; handleDisplaySearch: ()=>void}
  return (
    <div className="items-center hidden max-sm:flex">
      <button onClick={handleDisplaySearch} className="p-2 grid place-items-center rounded-full hover:bg-white/20 transition">
        <IoIosSearch className="w-6 h-6 fill-white" />
      </button>
      <VoiceSearch />
    </div>
  );
};

export default SearchVoiceBtnForSm;
