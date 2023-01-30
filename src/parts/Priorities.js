import React, { useEffect, useRef, useState } from "react";

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

  let element = useRef();
  useEffect(() => {
    let screenHeight = window.innerHeight;
    
  }, [])
  

  useEffect(() => {
    localStorage.setItem("priorities", JSON.stringify(priorities));
  }, [priorities]);

  return (
    <div ref={element}>
      <h1 className="mb-2 text-lg text-[#004643]">Top Priorities</h1>
      <div className="flex justify-center items-center w-full h-10 bg-[#004643] mb-1 rounded-3xl p-5">
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Priority"
          value={priorities.priority1}
          onChange={(e) => updatePriorities(e)}
          name="priority1"
        />
      </div>
      <div className="flex justify-center items-center w-full h-10 bg-[#004643] mb-1 rounded-3xl p-5">
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Priority"
          value={priorities.priority2}
          onChange={(e) => updatePriorities(e)}
          name="priority2"
        />
      </div>
      <div className="flex justify-center items-center w-full h-10 bg-[#004643] mb-1 rounded-3xl p-5">
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Priority"
          value={priorities.priority3}
          onChange={(e) => updatePriorities(e)}
          name="priority3"
        />
      </div>
    </div>
  );
}
