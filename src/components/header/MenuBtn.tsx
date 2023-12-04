import { FiMenu } from "react-icons/fi";

interface menuProps {
  menuIsActive: boolean;
  setMenuIsActive: any;
}

const MenuBtn = ({ menuIsActive, setMenuIsActive }: menuProps) => {
  return (
    <button
      className="p-2 rounded-full hover:bg-slate-800 active:bg-slate-700 transition"
      onClick={(e) => {
        e.stopPropagation();
        setMenuIsActive(!menuIsActive);
      }}
    >
      <FiMenu className="w-7 h-7 stroke-white" />
    </button>
  );
};

export default MenuBtn;
