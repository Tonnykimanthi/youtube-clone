import { FaMicrophone } from "react-icons/fa";

const VoiceSearch = () => {
  return (
    <button className="p-3 grid place-items-center bg-white/20 rounded-full hover:bg-white/30 transition relative group">
      <FaMicrophone className="fill-white w-5 h-5" />
      <small className="text-white absolute -bottom-12 whitespace-nowrap px-4 py-1.5 bg-slate-500 rounded scale-0 group-hover:scale-100 transition-all z-10">
        Search with your voice
      </small>
    </button>
  );
};

export default VoiceSearch;
