import FixedSidePanel from "../components/main/FixedSidePanel"
import FeedFilterBar from "../components/main/FeedFilterBar"

const Main = () => {
  return (
    <main className="grid grid-cols-[80px_1fr] pr-5">
        <FixedSidePanel />
        <FeedFilterBar />
    </main>
  )
}

export default Main