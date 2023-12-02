import YoutubeLogo from "../header/YoutubeLogo";
import MenuBtn from "../header/MenuBtn";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
// You section
import { IoChevronForward } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { HiOutlineClock } from "react-icons/hi2";
import { GoDownload } from "react-icons/go";
// Subscription List
import { subscriptionList } from "../../data/subscriptionList";

interface menuProps{
    menuIsActive: boolean;
    setMenuIsActive: any;
  }

const MainSidePanel = ({menuIsActive, setMenuIsActive}: menuProps) => {
  return (
    <div className={`px-4 py-2 w-60 fixed top-0 left-0 bottom-0 bg-slate-900 z-10 transition duration-300 ${menuIsActive? "translate-x-0" : "-translate-x-64"}`}>
      <header className="flex items-center gap-x-4">
        <MenuBtn menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
        <YoutubeLogo />
      </header>
      <main className="scrollbar-hidden overflow-y-scroll pr-4 absolute top-12 left-4 right-0 bottom-0">
        <ul className="py-3 text-gray-200 border-b border-slate-600">
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <IoMdHome className="fill-white w-7 h-7" />
              <span className="tracking-tighter">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <SiYoutubeshorts className="w-6 h-6" />
              <span className="tracking-tighter">Shorts</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <MdSubscriptions className="w-6 h-6" />
              <span className="tracking-tighter">Subscriptions</span>
            </a>
          </li>
        </ul>

        <ul className="py-3 text-gray-200 border-b border-slate-600">
          <a
            href="#"
            className="flex items-center gap-x-2 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition cursor-pointer"
          >
            <span className="font-medium text-lg">You</span>
            <IoChevronForward />
          </a>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <CgProfile className="w-6 h-6" />
              <span className="tracking-tighter">You channel</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <GoHistory className="w-6 h-6" />
              <span className="tracking-tighter">History</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <GoVideo className="w-6 h-6" />
              <span className="tracking-tighter">Your videos</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <HiOutlineClock className="w-6 h-6" />
              <span className="tracking-tighter">Watch later</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
            >
              <GoDownload className="w-6 h-6" />
              <span className="tracking-tighter">Downloads</span>
            </a>
          </li>
        </ul>
        <section className="py-3 text-slate-200">
          <h3 className="font-medium text-lg">Subscriptions</h3>
          <ul className="mt-2">
            {subscriptionList.map((item) => (
              <li className="flex items-center gap-x-5 pl-2 h-10 rounded-xl cursor-pointer hover:bg-white/20 transition">
                <img
                  className="w-7 h-7 object-cover rounded-full"
                  src={item.img}
                  alt="User"
                />
                <span className="font-medium text-sm tracking-tight">
                  {item.channelName}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MainSidePanel;
