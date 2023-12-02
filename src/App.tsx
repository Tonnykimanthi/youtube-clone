import Header from "./layouts/Header";
import Main from "./layouts/Main";
import MainSidePanel from "./components/common/MainSidePanel";

function App() {
  return (
    <div>
      <MainSidePanel />
      <Header />
      <Main />
    </div>
  );
}

export default App;
