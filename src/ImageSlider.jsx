import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [users, setUsers] = useState(null);
  const [color, setColor] = useState("red");

  const insideSetUsers = (data) => {
    console.log("setting Users using setUser");
    setUsers(data);
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
      setColor((prevColor) => (prevColor === "red" ? "orange" : "red"));
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []); // Empty dependency array to run only once on mount

  const h1Style = {
    backgroundColor: color,
  };

  return (
    <>
      {users &&
        users.map((user) => (
          <h1 style={h1Style} key={user.id}>{`${user.title} + ${user.id}`}</h1>
        ))}
    </>
  );
};

export default ImageSlider;
