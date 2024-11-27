import { useState } from "react";
import { useEffect } from "react";
const ImageSlider = () => {
  const [users, setUsers] = useState(null);
  const [color, setColor] = useState("red");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log("respinse   kjsnkjsnkj:  ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const h1Style = {
    backgroundColor: color,
  };
  const changeColor = () => {
    setColor((prevColor) => (prevColor === "red" ? "orange" : "red"));
  };
  // console.log("data outside fetch :", dataToShow)
  return (
    <>
      {users &&
        users.map((users) => (
          <h1
            style={h1Style}
            key={users.id}
          >{`${users.title} + ${users.id}`}</h1>
        ))}
      <button onClick={changeColor}> toggle color </button>
    </>
  );
};

export default ImageSlider;
