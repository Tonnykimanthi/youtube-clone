import FixedSidePanel from "../components/main/FixedSidePanel"
import FeedsContainer from "../components/main/FeedsContainer"

const Main = () => {
  return (
    <main className="grid grid-cols-[80px_1fr] max-sm:grid-cols-1 pr-5">
        <FixedSidePanel />
        <FeedsContainer />
    </main>
  )
}

export default Main