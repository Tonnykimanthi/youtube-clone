import Header from "./layouts/Header";
import Main from "./layouts/Main";
import MainSidePanel from "./components/common/MainSidePanel";
import AccountSidePanel from "./components/common/AccountSidePanel";
import {useState} from "react";

function App() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <div>
      <AccountSidePanel />
      <MainSidePanel menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
      <Main />
    </div>
  );
}

export default App;
