import FeedsFilterBar from "./FeedsFilterBar"
import Feeds from "./Feeds"

const FeedsContainer = () => {
  return (
    <div className="mt-1 h-fit overflow-auto">
      <FeedsFilterBar />
      <Feeds />
    </div>
  )
}

export default FeedsContainer