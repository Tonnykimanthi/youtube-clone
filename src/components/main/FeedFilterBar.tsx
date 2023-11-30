import { useState } from "react";

const FeedFilterBar = () => {
  const [items, setItems] = useState([
    "All",
    "Music",
    "Mixes",
    "CS50",
    "African Music",
    "Javascript",
    "Highlight films",
    "Gaming",
    "Computers",
    "Live",
    "News",
    "Presentations",
    "Watched"
  ]);

  return (
    <>
      <ul className="mt-2 h-fit w-11/12 text-white flex gap-x-4 overflow-x-auto scrollbar-hide">
        {items.map((item, index) => (
          <li key={index}>
            <button className="bg-white/20 whitespace-nowrap px-3 py-1 rounded-md hover:bg-white/30 transition">{item}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedFilterBar;
