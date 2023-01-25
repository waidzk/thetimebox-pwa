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

import React, { useEffect, useState } from "react";

export default function Example() {
  const [data, setData] = useState([
    {
      id: 1,
      value: "wkwk",
    },
    {
      id: 2,
      value: "pupu",
    },
  ]);

  const updateData = (index) => (e) => {
    setData(
      data.map((item) =>
        item.id === index ? { ...item, value: e.target.value } : item
      )
    );
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {data.map((dt) => (
        <input
          key={dt.id}
          id={dt.id}
          value={dt.value}
          onChange={updateData(dt.id)}
        />
      ))}
    </div>
  );
}
