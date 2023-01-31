import React, { useEffect, useRef, useState } from "react";

import BoxPage from "./pages/BoxPage";
import TimePage from "./pages/TimePage";
import Header from "./parts/Header";
import Navigation from "./parts/Navigation";

export const TabContext = React.createContext();

export default function App() {
  const [activePage, setActivePage] = useState("boxPage");
  const [headerHeight, setHeaderHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const [boxHeight, setBoxHeight] = useState(null);

  const boxRef = useRef(null);

  useEffect(() => {
    const currentUrl = window.location.href;
    if (!currentUrl.includes("#hash")) {
      window.history.pushState({}, null, currentUrl + "#hash");
    }
  }, []);

  useEffect(() => {
    const boxHeightRef = boxRef.current.offsetHeight;
    const newBoxHeight = boxHeightRef - navHeight - headerHeight;
    setBoxHeight(newBoxHeight);
  }, [navHeight, headerHeight]);

  const changePage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="hidden md:flex flex-col justify-center items-center h-screen">
        <p>Sorry, the desktop mode is under development</p>
        <p>You can use this app with your smartphone</p>
      </div>
      <div className="md:hidden block">
        <TabContext.Provider value={{ activePage, changePage }}>
          <Header setHeaderHeight={setHeaderHeight} />
          <div
            ref={boxRef}
            style={{ height: `${boxHeight}px` }}
            className="box w-full h-screen bg-white absolute z-0 top-20 bottom-0 overflow-scroll rounded-t-3xl p-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] text-[#abd1c6]"
          >
            {activePage === "boxPage" && <BoxPage />}
            {activePage === "timePage" && <TimePage />}
          </div>
          <Navigation setNavHeight={setNavHeight} />
        </TabContext.Provider>
      </div>
    </>
  );
}
