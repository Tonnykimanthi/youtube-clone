import { FiMoreVertical } from "react-icons/fi";
import { feedsToWatch } from "../../data/feedsToWatch";
import { useEffect, useRef, useState } from "react";

const Feeds = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const feedElements = feedsToWatch.map(() => useRef<HTMLLIElement>(null));
  const videoElements = feedsToWatch.map(() => useRef<HTMLVideoElement>(null));

  useEffect(() => {
    const handleMouseEnter = (index: number) => {
      const videoEl = videoElements[index].current;
      if (videoEl === null) return;
      setMouseHover(true);

      setTimeout(() => {
        videoEl.play().catch((error) => {
          console.log(error);
        });
      }, 500);
    };

    const handleMouseLeave = (index: number) => {
      const videoEl = videoElements[index].current;
      if (videoEl === null) return;
      setMouseHover(false);
      videoEl.pause();
    };

    feedElements.forEach((el, index) => {
      const feed = el.current;
      if (feed === null) return;

      feed.addEventListener("mouseenter", () => handleMouseEnter(index));
      feed.addEventListener("mouseleave", () => handleMouseLeave(index));

      return () => {
        feed.removeEventListener("mouseenter", () => handleMouseEnter(index));
        feed.removeEventListener("mouseleave", () => handleMouseLeave(index));
      };
    });
  }, [feedElements]);

  return (
    <ul className="mt-5 px-4 grid grid-cols-3 gap-x-4">
      {/* Feed */}

      {feedsToWatch.map((feed, index) => (
        <li className="cursor-pointer" ref={feedElements[index]} key={index}>
          {/* Video / Thumbnail */}
          <div className="h-52 rounded-xl relative overflow-hidden hover:rounded-none transition-all duration-300 group">
            <video
              className="w-full h-full object-cover"
              src={feed.video}
              ref={videoElements[index]}
              muted
            ></video>
            <img
              className={`object-cover w-full h-full absolute top-0 left-0 bottom-0 right-0 delay-500 ${
                mouseHover ? "group-hover:opacity-0" : ""
              }`}
              src={feed.thumbnail}
              alt="Video thumbnail"
            />
          </div>

          {/* Description */}
          <div className="mt-2 flex items-start justify-between gap-x-2">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={feed.channelIcon}
              alt="Channel icon"
            />

            <div>
              <h3 className="text-white font-medium leading-tight">
                {feed.videoTitle}
              </h3>
              <h4 className="text-gray-400 mt-1">
                <span>{feed.channelName}</span>
              </h4>
              <p className="text-gray-400 leading-tight">
                {feed.videoViews} • {feed.created}
              </p>
            </div>

            <button>
              <FiMoreVertical className="stroke-white w-5 h-5" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Feeds;
