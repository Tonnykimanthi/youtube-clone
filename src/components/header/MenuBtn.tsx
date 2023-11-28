import { FiMenu } from "react-icons/fi";

const MenuBtn = () => {
  return (
    <button className="p-2 rounded-full hover:bg-slate-800 active:bg-slate-700 transition">
      <FiMenu className="w-7 h-7 stroke-white"/>
    </button>
  );
};

export default MenuBtn;
