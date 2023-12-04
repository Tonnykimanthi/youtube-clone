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
import { LuChevronDown } from "react-icons/lu";
import { PiPlaylistBold } from "react-icons/pi";
// Subscription List
import { subscriptionList } from "../../data/subscriptionList";
import { playLists } from "../../data/playLists";
// Explore
import { SiTrendmicro } from "react-icons/si";
import { FiMusic } from "react-icons/fi";
import { SiYoutubegaming } from "react-icons/si";
import { CiTrophy } from "react-icons/ci";
import { MdOutlinePodcasts } from "react-icons/md";

import { useEffect, useRef, useState } from "react";

interface menuProps {
  menuIsActive: boolean;
  setMenuIsActive: any;
}

const MainSidePanel = ({ menuIsActive, setMenuIsActive }: menuProps) => {
  const [showPlaylists, setShowPlaylists] = useState(false);
  const menuContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCloseMenu = (e: Event) => {
      if (menuContainer.current === null) return;

      if (!menuContainer.current.contains(e.target as HTMLBodyElement)) {
        setMenuIsActive(false);
      }
    };
    document.body.addEventListener("click", handleCloseMenu);

    return () => {
      document.body.removeEventListener("click", handleCloseMenu);
    };
  });

  return (
    <div
      ref={menuContainer}
      className={`px-4 py-2 w-60 fixed top-0 left-0 bottom-0 bg-slate-900 z-10 transition duration-300 ${
        menuIsActive ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <header className="flex items-center gap-x-4">
        <MenuBtn
          menuIsActive={menuIsActive}
          setMenuIsActive={setMenuIsActive}
        />
        <YoutubeLogo />
      </header>
      <main className="pb-4 scrollbar-hidden overflow-y-scroll pr-4 absolute top-16 left-4 right-0 bottom-0">
        <ul className="text-gray-200">
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

        <hr className="my-3 border-slate-600" />
        {/* You */}
        <ul className="text-gray-200">
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
        {/* All playlists */}
        {showPlaylists && (
          <ul className="text-gray-200">
            {playLists.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
                >
                  <PiPlaylistBold className="w-6 h-6" />
                  <span className="tracking-tight">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setShowPlaylists(!showPlaylists)}
          className="w-full h-10 pl-2 text-white flex items-center gap-x-4 rounded-xl hover:bg-white/20 transition"
        >
          <LuChevronDown
            style={{ transform: showPlaylists ? "rotate(180deg)" : "" }}
            className="w-5 h-5"
          />
          <span>{showPlaylists ? "Show less" : "Show more"}</span>
        </button>

        <hr className="my-3 border-slate-600" />
        {/* Subscriptions */}
        <section className="text-slate-200">
          <h3 className="font-medium text-lg">Subscriptions</h3>
          <ul className="mt-2">
            {subscriptionList.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-x-5 pl-2 h-10 rounded-xl cursor-pointer hover:bg-white/20 transition"
              >
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

          <hr className="my-3 border-slate-600" />
          {/* Explore */}
          <ul className="text-gray-200">
            <li>
              <a
                href="#"
                className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
              >
                <SiTrendmicro className="fill-white w-6 h-6" />
                <span className="tracking-tighter">Trending</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
              >
                <FiMusic className="w-6 h-6" />
                <span className="tracking-tighter">Music</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
              >
                <SiYoutubegaming className="w-6 h-6" />
                <span className="tracking-tighter">Gaming</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
              >
                <CiTrophy className="w-6 h-6" />
                <span className="tracking-tighter">Sports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-5 pl-2 w-full h-10 rounded-xl hover:bg-white/20 transition"
              >
                <MdOutlinePodcasts className="w-6 h-6" />
                <span className="tracking-tighter">Podcasts</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MainSidePanel;
