import { FiMoreVertical } from "react-icons/fi";
import { feedsToWatch } from "../../data/feedsToWatch";

const Feeds = () => {
  

  return (
    <ul className="mt-5 px-4 grid grid-cols-3 gap-x-2">
      {/* Feed */}

      {feedsToWatch.map((feed) => (
        <li className="cursor-pointer">
          {/* Video / Thumbnail */}
          <div className="h-52 rounded-xl relative overflow-hidden hover:rounded-none transition-all group">
            <video
              className="w-full h-full object-cover"
              src={feed.video}
              autoPlay
              muted
            ></video>
            <img
              className="object-cover w-full h-full absolute top-0 left-0 bottom-0 right-0 group-hover:opacity-0"
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
