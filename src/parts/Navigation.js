import React, { useContext } from "react";
import { TabContext } from "../App";

function Navigation() {

  const { activePage, changePage } = useContext(TabContext);

  return (
    <div className="fixed bottom-0 w-full bg-[#E3F6F5] grid grid-cols-2 divide-x p-5">
      <span
        onClick={() => changePage('boxPage')}
        className="flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={
            activePage === "boxPage"
              ? "w-6 h-6 stroke-[#FFD803]"
              : "stroke-slate-400 w-6 h-6"
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
          />
        </svg>
      </span>
      <span
        onClick={() => changePage('timePage')}
        className="flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={
            activePage === "timePage"
              ? "w-6 h-6 stroke-[#FFD803]"
              : "stroke-slate-400 w-6 h-6"
          }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </div>
  );
}

export default Navigation;
