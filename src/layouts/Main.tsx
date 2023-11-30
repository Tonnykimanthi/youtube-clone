import SidePanel from "../components/main/SidePanel"
import FeedFilterBar from "../components/main/FeedFilterBar"

const Main = () => {
  return (
    <main className="flex overflow-x-hidden">
        <SidePanel />
        <FeedFilterBar />
    </main>
  )
}

export default Main