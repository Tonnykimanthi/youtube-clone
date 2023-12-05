import YoutubeLogo from "../components/header/YoutubeLogo";
import MenuBtn from "../components/header/MenuBtn";
import Search from "../components/header/Search";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import SearchVoiceBtnForSm from "../components/header/SearchVoiceBtnForSm";
import SearchInputSm from "../components/header/SearchInputSm";

import { createContext, useState } from "react";

interface menuProps {
  menuIsActive: boolean;
  setMenuIsActive: any;
  handleAccMenu: () => void;
}

export const headerContext = createContext<{
  searchIsVisible: boolean;
  handleDisplaySearch: () => void;
} | null>(null);

const Header = ({ menuIsActive, setMenuIsActive, handleAccMenu }: menuProps) => {
  const [searchIsVisible, setSearchIsVisible] = useState(false);

  const handleDisplaySearch = () => {
    setSearchIsVisible(!searchIsVisible);
  };


  return (
    <headerContext.Provider value={{searchIsVisible, handleDisplaySearch}}>
      <header className="my-2 px-5 max-sm:pl-2 flex justify-between items-center gap-x-8 relative">
        <div className="flex items-center gap-x-4 max-sm:gap-x-2">
          <MenuBtn
            menuIsActive={menuIsActive}
            setMenuIsActive={setMenuIsActive}
          />
          <YoutubeLogo />
        </div>
        <Search />
        <aside className="flex items-center gap-x-2 max-md:gap-x-0">
          <SearchVoiceBtnForSm />
          <button className="p-2 hover:bg-white/20 rounded-full group relative">
            <BiVideoPlus className="w-7 h-7 fill-white" />
            <small className="text-white absolute -bottom-12 left-2/4 -translate-x-2/4 whitespace-nowrap px-4 py-1.5 bg-slate-500 rounded scale-0 group-hover:scale-100 transition-all z-10">
              Create
            </small>
          </button>
          <button className="p-2 hover:bg-white/20 rounded-full group relative max-[460px]:hidden">
            <IoIosNotificationsOutline className="w-7 h-7 fill-white" />
            <small className="text-white absolute -bottom-12 left-2/4 -translate-x-2/4 whitespace-nowrap px-4 py-1.5 bg-slate-500 rounded scale-0 group-hover:scale-100 transition-all z-10">
              Notifications
            </small>
            <span className="w-5 h-5 text-white text-xs font-medium grid place-items-center absolute top-1 right-1 rounded-full bg-red-500">
              6
            </span>
          </button>
          <button className="ml-2 w-10 h-10 rounded-full active:border border-green-500 overflow-hidden" onClick={(e)=>{
            e.stopPropagation()
            handleAccMenu()

          }}>
            <img
              className="object-cover"
              src="https://images.unsplash.com/photo-1701083266435-a56ea052fb60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
              alt="Unsplash"
            />
          </button>
        </aside>
        <SearchInputSm />
      </header>
    </headerContext.Provider>
  );
};

export default Header;
