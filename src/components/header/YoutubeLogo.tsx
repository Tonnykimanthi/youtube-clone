import { FaYoutube } from "react-icons/fa6";

const YoutubeLogo = () => {
  return (
    <button className="text-white flex items-center relative">
      <FaYoutube className="w-8 h-8 fill-red-600" />
      <span className="text-xl font-bold">YouTube</span>
      <small className="absolute -top-1.5 -right-2.5 text-slate-300 font-medium">
        KE
      </small>
    </button>
  );
};

export default YoutubeLogo;
