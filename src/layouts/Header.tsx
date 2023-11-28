import YoutubeLogo from "../components/header/YoutubeLogo";
import MenuBtn from "../components/header/MenuBtn";
import Search from "../components/header/Search";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="py-2 px-5 flex justify-between items-center">
      <div className="flex items-center gap-x-4">
        <MenuBtn />
        <YoutubeLogo />
      </div>
      <Search />
      <aside className="flex items-center gap-x-4">
        <button className="p-2 hover:bg-white/20 rounded-full group relative">
          <BiVideoPlus className="w-8 h-8 fill-white"/>
          <small className="text-white absolute -bottom-12 left-2/4 -translate-x-2/4 whitespace-nowrap px-4 py-1.5 bg-white/30 rounded scale-0 group-hover:scale-100 transition-all">Create</small>
        </button>
        <button className="p-2 hover:bg-white/20 rounded-full group relative">
          <IoIosNotificationsOutline className="w-8 h-8 fill-white"/>
          <small className="text-white absolute -bottom-12 left-2/4 -translate-x-2/4 whitespace-nowrap px-4 py-1.5 bg-white/30 rounded scale-0 group-hover:scale-100 transition-all">Notifications</small>
          <span className="w-5 h-5 text-white text-xs font-medium grid place-items-center absolute top-1 right-1 rounded-full bg-red-500">6</span>
        </button>
        <button className="w-10 h-10 rounded-full active:border border-green-500 overflow-hidden">
            <img className="object-cover" src="https://images.unsplash.com/photo-1701083266435-a56ea052fb60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="Unsplash" />
        </button>
      </aside>
    </header>
  );
};

export default Header;
