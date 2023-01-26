import React, { useEffect, useState } from "react";

export default function Priorities() {
  const [priorities, setPriorities] = useState(
    localStorage.getItem("priorities")
      ? JSON.parse(localStorage.getItem("priorities"))
      : {
          priority1: "",
          priority2: "",
          priority3: "",
        }
  );

  const updatePriorities = (e) => {
    if (e.target.name === "priority1") {
      setPriorities((prev) => ({
        ...prev,
        priority1: e.target.value,
      }));
    } else if (e.target.name === "priority2") {
      setPriorities((prev) => ({
        ...prev,
        priority2: e.target.value,
      }));
    } else if (e.target.name === "priority3") {
      setPriorities((prev) => ({
        ...prev,
        priority3: e.target.value,
      }));
    }

  };

  useEffect(() => {
    localStorage.setItem("priorities", JSON.stringify(priorities));
  }, [priorities]);

  return (
    <>
      <h1 className="text-sm text-[#272343] pl-5">Top Priorities</h1>
      <div className="box border-y border-[#272343] bg-[#BAE8E8] h-10 flex items-center px-5">
        <span className="mr-1">#1</span>
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Priority"
          value={priorities.priority1}
          onChange={() => updatePriorities}
          name="priority1"
        />
      </div>
      <div className="box bg-[#BAE8E8] h-10 flex items-center px-5">
        <span className="mr-1">#2</span>
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Priority"
          value={priorities.priority2}
          onChange={() => updatePriorities}
          name="priority2"
        />
      </div>
      <div className="box border-y border-[#272343] bg-[#BAE8E8] h-10 flex items-center px-5">
        <span className="mr-1">#3</span>
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Priority"
          value={priorities.priority3}
          onChange={() => updatePriorities}
          name="priority3"
        />
      </div>
    </>
  );
}
