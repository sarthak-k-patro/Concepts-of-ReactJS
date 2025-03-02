import { useEffect, useState } from "react";
export default function SideEffects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <table style={{ width: "100vw", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataVal, index) => {
            return (
              <tr key={dataVal.id} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>{dataVal.id}</td>
                <td style={{ border: "1px solid black" }}>{dataVal.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
