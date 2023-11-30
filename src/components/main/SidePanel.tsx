import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { GoDownload } from "react-icons/go";

const SidePanel = () => {
  return (
    <ul className="px-2 text-gray-200">
      <li>
        <a href="#" className="w-16 h-20 flex flex-col justify-center items-center rounded-xl hover:bg-white/20 transition">
          <IoMdHome className="fill-white w-7 h-7"/>
          <span className="text-xs tracking-tighter mt-0.5">Home</span>
        </a>
      </li>
      <li>
        <a href="#" className="w-16 h-20 flex flex-col justify-center items-center rounded-xl hover:bg-white/20 transition">
          <SiYoutubeshorts className="w-6 h-6"/>
          <span className="text-xs tracking-tighter mt-1.5">Shorts</span>
        </a>
      </li>
      <li>
        <a href="#" className="w-16 h-20 flex flex-col justify-center items-center rounded-xl hover:bg-white/20 transition">
          <MdSubscriptions className="w-6 h-6"/>
          <span className="text-xs tracking-tighter mt-1.5">Subscriptions</span>
        </a>
      </li>
      <li>
        <a href="#" className="w-16 h-20 flex flex-col justify-center items-center rounded-xl hover:bg-white/20 transition">
          <PiVideo className="w-7 h-7"/>
          <span className="text-xs tracking-tighter mt-1.5">You</span>
        </a>
      </li>
      <li>
        <a href="#" className="w-16 h-20 flex flex-col justify-center items-center rounded-xl hover:bg-white/20 transition">
          <GoDownload className="w-6 h-6"/>
          <span className="text-xs tracking-tighter mt-1.5">Downloads</span>
        </a>
      </li>
    </ul>
  );
};

export default SidePanel;
