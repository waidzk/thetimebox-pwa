// import React, { useEffect, useState } from "react";

// export default function Example() {
//   const [data, setData] = useState(
//     localStorage.getItem("data")
//       ? JSON.parse(localStorage.getItem("data"))
//       : {
//           priority: "",
//         }
//   );

//   const updateData = (e) => {
//     setData((prev) => ({
//       ...prev,
//       priority: e.target.value,
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem("data", JSON.stringify(data));
//     console.log(data);
//   }, [data]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={data.priority}
//         onChange={updateData}
//         name="priority1"
//       />
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function Example() {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       value: "wkwk",
//     },
//     {
//       id: 2,
//       value: "pupu",
//     },
//   ]);

//   const updateData = (index) => (e) => {
//     setData(
//       data.map((item) =>
//         item.id === index ? { ...item, value: e.target.value } : item
//       )
//     );
//   };

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   return (
//     <div>
//       {data.map((dt) => (
//         <input
//           key={dt.id}
//           id={dt.id}
//           value={dt.value}
//           onChange={updateData(dt.id)}
//         />
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function Example() {
  return (
    <div id="nav" class="w-full flex fixed bottom-0">
      <a
        href="#anchor"
        id="anchor"
        class="fas fa-hashtag text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-white flex-1 duration-75 underline-none text-slate-300 z-10 first-of-type:ml-[10px] last-of-type:mr-[10px] target:flex-[2.5] target:text-blue-100 focus:outline-none"
      ></a>
      <a
        href="#fire"
        id="fire"
        class="fas fa-cube text-[25px] rounded-3xl text-center leading-[51px] my-[10px] mx-[5px] bg-white flex-1 duration-75 underline-none text-slate-300 z-10 first-of-type:ml-[10px] last-of-type:mr-[10px] target:flex-[2.5] target:text-blue-100"
      ></a>
      <div
        class="background m-0 duration-75 w-full h-[75px] absolute z-0 bg-blue-100 focus:outline-none"
      ></div>
    </div>
  );
}
