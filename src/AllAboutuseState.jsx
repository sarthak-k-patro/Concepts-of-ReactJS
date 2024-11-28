import { useState, useEffect } from "react";

const AllAboutuseState = () => {
  const [users, setUsers] = useState(null);
  const [color, setColor] = useState("orange");
  const [obj, setObj] = useState({
    name: "SKP",
    age: 25,
    occupation: "Software Engineer",
    hobbies: ["Coding", "Reading", "Playing Guitar"],
  });

  const insideSetUsers = (data) => {
    console.log("setting Users using setUser");
    setUsers(data);
  };
  const insideSetObj = (data) => {
    console.log("setting obj using setObj");
    setObj({ ...data, college: "IIIT-BH" });
    console.log("obj after update: ", obj);
  };

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          // Only set state if mounted
          insideSetUsers(data);
          console.log("response: ", data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isMounted = false; // Cleanup function sets isMounted to false
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => (prevColor === "green" ? "orange" : "green"));
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []); // Empty dependency array to run only once on mount

  const h1Style = {
    backgroundColor: color,
  };

  return (
    <>
      {users &&
        users.map((user) => (
          <>
            <h1
              style={h1Style}
              key={user.id}
            >{`${user.title} + ${user.id}`}</h1>
            <h1>{obj.name}</h1>
            <h2>{obj.college}</h2>
            <h2>{obj.hobbies}</h2>
          </>
        ))}
      <button onClick={() => insideSetObj(obj)}>click me !!!!!</button>
    </>
  );
};

export default AllAboutuseState;
