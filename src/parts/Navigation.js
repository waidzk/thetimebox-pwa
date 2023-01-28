import React, { useContext } from "react";
import { TabContext } from "../App";

function Navigation() {
  const { activePage, changePage } = useContext(TabContext);

  return (
    <div id="nav" className="fixed flex bottom-0 w-full">
      <a
        href="#hash"
        onClick={() => changePage('boxPage')}
        id="hash"
        className={
          activePage === "boxPage"
              ? "fas fa-hashtag text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-white flex-[2.5] duration-100 no-underline text-blue-100 z-10 ml-[10px] mr-[10px]"
              : "fas fa-hashtag text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-white flex-1 duration-100 no-underline text-slate-300 z-10 "
        }
      ></a>
      <a
        href="#box"
        onClick={() => changePage('timePage')}
        id="box"
        className={
          activePage === "timePage"
              ? "fas fa-cube text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-white flex-[2.5] duration-100 no-underline text-blue-100 z-10 ml-[10px] mr-[10px]"
              : "fas fa-cube text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-white flex-1 duration-100 no-underline text-slate-300 z-10 "
        }
      ></a>
      <div className="background m-0 duration-100 w-full h-[75px] absolute z-0 bg-blue-100 focus:outline-none"></div>
    </div>
  );
}

export default Navigation;
