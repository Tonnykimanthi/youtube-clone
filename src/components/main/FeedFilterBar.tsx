import { feedItems } from "../../data/feedFilterData";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

const FeedFilterBar = () => {
  return (
    <div className="overflow-hidden">
      <section className="mt-2 flex items-center relative h-fit">
        <ul className="text-white flex gap-x-4 relative overflow-x-scroll scrollbar-hide">
          {feedItems.map((item, index) => (
            <li key={index}>
              <button className="bg-white/20 whitespace-nowrap px-3 py-1 rounded-md hover:bg-white/30 transition">
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button className="flex justify-center items-center absolute top-0 left-0 bottom-0 bg-black shadow-[10px_0px_15px_15px] shadow-black/80">
          <HiOutlineChevronLeft className="w-10 h-10 p-2.5 stroke-white rounded-full hover:bg-white/20 transition" />
        </button>
        <button className="flex justify-center items-center absolute top-0 right-0 bottom-0 bg-black shadow-[-10px_0px_15px_15px] shadow-black/80">
          <HiOutlineChevronRight className="w-10 h-10 p-2.5 stroke-white rounded-full hover:bg-white/20 transition" />
        </button>
      </section>
    </div>
  );
};

export default FeedFilterBar;
