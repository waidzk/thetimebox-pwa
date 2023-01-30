import React, { useContext, useEffect, useRef } from "react";
import { TabContext } from "../App";

function Navigation({setNavHeight}) {
  const { activePage, changePage } = useContext(TabContext);
  const navRef = useRef(null);

  useEffect(() => {
    setNavHeight(navRef.current.offsetHeight);
  }, [])
  

  return (
    <div ref={navRef} id="nav" className="w-full flex fixed bottom-0 z-10 bg-white">
      <a
        href="#hash"
        onClick={() => changePage('boxPage')}
        id="hash"
        className={
          activePage === "boxPage"
              ? "fas fa-hashtag text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-[#F9BC60] flex-[2.5] duration-100 no-underline text-[#004643] z-10 ml-[10px] mr-[10px]"
              : "fas fa-hashtag text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-[#F7F7FA] flex-1 duration-100 no-underline text-[#ABD1C6] z-10 "
        }
      ></a>
      <a
        href="#box"
        onClick={() => changePage('timePage')}
        id="box"
        className={
          activePage === "timePage"
              ? "fas fa-cube text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-[#F9BC60] flex-[2.5] duration-100 no-underline text-[#004643] z-10 ml-[10px] mr-[10px]"
              : "fas fa-cube text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-[#F7F7FA] flex-1 duration-100 no-underline text-[#ABD1C6] z-10 "
        }
      ></a>
      <div className="m-0 duration-100 w-full h-[75px] absolute z-0 bg-white rounded-t-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"></div>
    </div>
  );
}

export default Navigation;
