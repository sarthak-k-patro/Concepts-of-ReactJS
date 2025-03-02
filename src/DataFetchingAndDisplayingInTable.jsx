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
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataVal, index) => {
            return (
              <tr key={dataVal.id}>
                <td>{dataVal.id}</td>
                <td>{dataVal.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
