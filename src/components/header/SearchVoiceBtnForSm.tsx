import { IoIosSearch } from "react-icons/io";
import VoiceSearch from "./VoiceSearch";

const SearchVoiceBtnForSm = () => {
  return (
    <div className="items-center hidden max-sm:flex">
      <button className="p-2 grid place-items-center rounded-full hover:bg-white/20 transition">
        <IoIosSearch className="w-6 h-6 fill-white" />
      </button>
      <VoiceSearch />
    </div>
  );
};

export default SearchVoiceBtnForSm;
