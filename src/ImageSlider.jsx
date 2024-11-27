import { useCallback } from "react";
import styles from "./ImageSlider.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const ImageSlider = () => {
  const [users, setUsers] = useState(null);
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

  // console.log("data outside fetch :", dataToShow)
  return <>{users && users.map((users) => <h1>{users.title}</h1>)}</>;
};

export default ImageSlider;
