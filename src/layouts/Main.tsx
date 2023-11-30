import SidePanel from "../components/main/SidePanel"
import FeedFilterBar from "../components/main/FeedFilterBar"

const Main = () => {
  return (
    <main className="grid grid-cols-[80px_1fr]">
        <SidePanel />
        <FeedFilterBar />
    </main>
  )
}

export default Main