import Header from "./layouts/Header";
import Main from "./layouts/Main";
import MainSidePanel from "./components/common/MainSidePanel";
import AccountSidePanel from "./components/common/AccountSidePanel";
import { useState } from "react";

function App() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [accMenuIsActive, setAccMenuIsActive] = useState(false);

  const handleAccMenu = () => {
    setAccMenuIsActive(!accMenuIsActive)
  };

  return (
    <div>
      <AccountSidePanel accMenuIsActive={accMenuIsActive} setAccMenuIsActive={setAccMenuIsActive}/>
      <MainSidePanel
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      />
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} handleAccMenu={handleAccMenu}/>
      <Main />
    </div>
  );
}

export default App;
