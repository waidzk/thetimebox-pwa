import React, { useEffect, useState } from "react";

import BoxPage from "./pages/BoxPage";
import TimePage from "./pages/TimePage";
import Header from "./parts/Header";
import Navigation from "./parts/Navigation";

export const TabContext = React.createContext();

export default function App() {
  const [activePage, setActivePage] = useState("boxPage");

  useEffect(() => {
    const currentUrl = window.location.href
    if (!currentUrl.includes('#hash')) {
      window.history.pushState({}, null, currentUrl + '#hash')
    }
  }, []);

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
          <Header />
          {activePage === "boxPage" && <BoxPage />}
          {activePage === "timePage" && <TimePage />}
          <Navigation />
        </TabContext.Provider>
      </div>
    </>
  );
}
