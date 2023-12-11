import { FiMoreVertical } from "react-icons/fi";
import { feedsToWatch } from "../../data/feedsToWatch";
import { useEffect, useRef, useState } from "react";

const Feeds = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [hasMoreLines, setHasMoreLines] = useState(false);
  const [videoDurations, setVideoDurations] = useState<string[]>([]);
  const [videoCurrTime, setVideoCurrTime] = useState<string[]>(
    feedsToWatch.map(() => "0:00")
  );
  const feedElements = feedsToWatch.map(() => useRef<HTMLLIElement>(null));
  const videoElements = feedsToWatch.map(() => useRef<HTMLVideoElement>(null));
  const titleElements = feedsToWatch.map(() => useRef<HTMLParagraphElement>(null));

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
      const videoEl = videoElements[index].current;
      if (feed === null || videoEl === null) return;

      feed.addEventListener("mouseenter", () => handleMouseEnter(index));
      feed.addEventListener("mouseleave", () => handleMouseLeave(index));

      // Add event listener for loadedmetadata
      videoEl.addEventListener("loadedmetadata", () => {
        const duration = videoDuration(index);
        setVideoDurations((prevDurations) => {
          const newDurations: any = [...prevDurations];
          newDurations[index] = duration;
          return newDurations;
        });
      });

      // Add event listener for video video current time
      videoEl.addEventListener("timeupdate", () => {
        const currTime = currentTime(index);

        setVideoCurrTime((prevVideos) => {
          const newCurrTime: any = [...prevVideos];
          newCurrTime[index] = currTime;

          return newCurrTime;
        });
      });


      return () => {
        feed.removeEventListener("mouseenter", () => handleMouseEnter(index));
        feed.removeEventListener("mouseleave", () => handleMouseLeave(index));
      };
    });

    // Uncomplete
    const handleLines = (index: number)=>{
        const title = titleElements[index].current
        if(title === null) return;
        const lines = (title.innerText.match(/\n/g) || '').length + 1
        console.log(lines)
      }
      handleLines(0)
  }, []);

  const videoDuration = (index: number) => {
    const videoEl = videoElements[index].current;
    if (videoEl === null) return;
    const mins = Math.floor(videoEl.duration / 60);
    let secs: number | string = Math.floor(videoEl.duration - mins * 60);
    secs = secs.toString().padStart(2, "0");

    return mins + ":" + secs;
  };

  const currentTime = (index: number) => {
    const videoEl = videoElements[index].current;
    if (videoEl === null) return;
    const mins = Math.floor(videoEl.currentTime / 60);
    let secs: number | string = Math.floor(videoEl.currentTime - mins * 60);
    secs = secs.toString().padStart(2, "0");

    return mins + ":" + secs;
  };

  const progress = (index: number) => {
    const currTime = videoElements[index].current?.currentTime;
    const videoDuration = videoElements[index].current?.duration;

    if (currTime === undefined || videoDuration === undefined) return;
    return (currTime / videoDuration) * 100;
  };


  return (
    <ul className="mt-5 px-4 grid grid-cols-3 gap-4 max-lg:grid-cols-2">
      {/* Feed */}

      {feedsToWatch.map((feed, index) => (
        <li
          className="cursor-pointer group"
          ref={feedElements[index]}
          key={index}
        >
          {/* Video / Thumbnail */}
          <div className="rounded-xl relative overflow-hidden group-hover:rounded-none transition-all duration-300">
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
            {/* video duration */}
            <div className="bg-black text-white text-sm px-1 rounded absolute bottom-1 right-2 group-hover:opacity-0 transition duration-200">
              {videoDurations[index]}
            </div>

            {/* video curr time / duration */}
            <div className="text-sm text-white absolute bottom-1 left-2 opacity-0 group-hover:opacity-100 transition duration-200">{`${videoCurrTime[index]} / ${videoDurations[index]}`}</div>

            {/* Progress */}
            <div className="h-1 bg-white/20 absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition duration-200">
              {videoDurations[index] && (
                <span
                  className="block h-full bg-red-600"
                  style={{ width: `${progress(index)}%` }}
                ></span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mt-2 flex items-start justify-between gap-x-2">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={feed.channelIcon}
              alt="Channel icon"
            />

            <div>
              <h3
                ref={titleElements[index]}
                className="text-white font-medium leading-tight"
              >
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
