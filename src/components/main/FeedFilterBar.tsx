import { useState, useRef, useEffect } from "react";
import { feedItems } from "../../data/feedFilterData";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

const TRANSLATE_VALUE = 100;
const FeedFilterBar = () => {
  const [isSelected, setIsSelected] = useState(feedItems[0]);
  const [translateFeeds, setTranslateFeeds] = useState(0);
  const [leftBtnIsVisible, setLeftBtnIsVisible] = useState(false);
  const [rightBtnIsVisible, setRightBtnIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = containerRef.current;
      if (container == null) return;

      setLeftBtnIsVisible(translateFeeds > 0);

      setRightBtnIsVisible(
        translateFeeds + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translateFeeds]);

  return (
    <section
      ref={containerRef}
      className="mt-1 flex items-center relative h-fit overflow-auto scrollbar-hide"
    >
      <ul
        style={{ transform: `translateX(-${translateFeeds}px)` }}
        className="px-5 text-white flex gap-x-4 transition duration-300"
      >
        {feedItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setIsSelected(item);
            }}
            className={`${
              isSelected === item
                ? "bg-white text-black hover:bg-white/90"
                : "bg-white/20 text-white hover:bg-white/30"
            } text-sm font-medium whitespace-nowrap px-3 py-1 rounded-md transition`}
          >
            {item}
          </button>
        ))}
      </ul>

      {leftBtnIsVisible && (
        <button
          className="flex justify-center items-center absolute top-0 left-0 bottom-0 bg-black shadow-[10px_0px_15px_15px] shadow-black/80 rounded-full"
          onClick={() => {
            setTranslateFeeds((translate) => {
              const newTranslate = translate - TRANSLATE_VALUE;
              if (newTranslate <= 0) return 0;
              return newTranslate;
            });
          }}
        >
          <HiOutlineChevronLeft className="w-7 h-7 p-1.5 stroke-white rounded-full hover:bg-teal-600 transition" />
        </button>
      )}

      {rightBtnIsVisible && (
        <button className="flex justify-center items-center absolute top-0 right-0 bottom-0 bg-black shadow-[-10px_0px_15px_15px] shadow-black/80">
          <HiOutlineChevronRight
            className="w-7 h-7 p-1.5 stroke-white rounded-full hover:bg-teal-600 transition"
            onClick={() => {
              setTranslateFeeds((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + TRANSLATE_VALUE;
                const fullWidth = containerRef.current.scrollWidth;
                const visibleWidth = containerRef.current.clientWidth;

                if (newTranslate + visibleWidth >= fullWidth) {
                  return fullWidth - visibleWidth;
                }
                return newTranslate;
              });
            }}
          />
        </button>
      )}
    </section>
  );
};

export default FeedFilterBar;
