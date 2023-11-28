import { HiMenu } from "react-icons/hi";

const MenuBtn = () => {
  return (
    <button className="p-2 rounded-full hover:bg-slate-800 active:bg-slate-700 transition">
      <HiMenu className="w-7 h-7 fill-white"/>
    </button>
  );
};

export default MenuBtn;
