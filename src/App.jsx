import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import OverlayMenu  from "./components/overlay-menu/overlayMenu";

function App() {
  const [overlay, setOverlay] = useState(false);
  
  const toggleOverlay = () => {
    setOverlay((prevState) => !prevState)
  };

  return (
    <>
      <header>
        <Header toggleOverlay = {toggleOverlay} overlay = {overlay}/>
      </header>
      <div className="content-body">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </div>
      </div>
      {overlay ? <OverlayMenu/> : null}
    </>
  );
}

export default App;
