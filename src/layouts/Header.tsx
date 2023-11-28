import YoutubeLogo from "../components/header/YoutubeLogo";
import MenuBtn from "../components/header/MenuBtn";
import Search from "../components/header/Search";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center gap-x-4">
        <MenuBtn />
        <YoutubeLogo />
      </div>
      <Search />
      <aside className="flex items-center">
        <button className="p-2 hover:bg-white/20 rounded-full">
          <BiVideoPlus className="w-7 h-7 fill-white"/>
        </button>
        <button className="p-2 hover:bg-white/20 rounded-full">
          <IoIosNotificationsOutline className="w-7 h-7 fill-white"/>
        </button>
        <button className="w-9 h-9 rounded-full overflow-hidden">
            <img className="object-cover" src="https://images.unsplash.com/photo-1701083266435-a56ea052fb60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="Unsplash" />
        </button>
      </aside>
    </header>
  );
};

export default Header;
