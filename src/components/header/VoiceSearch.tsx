import { FaMicrophone } from "react-icons/fa";
import { useContext } from "react";
import { headerContext } from "../../layouts/Header";

const VoiceSearch = () => {
  const { searchIsVisible, } = useContext(
    headerContext
  ) as { searchIsVisible: boolean };

  return (
    <button className="p-3 grid place-items-center sm:bg-white/20 rounded-full hover:bg-white/20 sm:hover:bg-white/30 transition relative group max-[460px]:hidden">
      <FaMicrophone className="fill-white w-5 h-5" />
      <small
        className={`text-white absolute -bottom-12 whitespace-nowrap px-4 py-1.5 bg-slate-500 rounded scale-0 group-hover:scale-100 transition-all z-10  ${
          searchIsVisible ? "hidden" : ""
        }`}
      >
        Search with your voice
      </small>
    </button>
  );
};

export default VoiceSearch;
