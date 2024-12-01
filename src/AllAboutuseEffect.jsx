import { useEffect, useState } from "react";

export const AllAboutuseEffect = () => {
  const [count, setCount] = useState(0);
  const [dependencyCount, setDependencyCount] = useState(0);
  const func = () => {
    setCount((prev) => prev + 1);
  };
  useEffect(func);

  const handleClick = () => {
    setDependencyCount((prev) => prev + 1);
    console.log("count value with dependency array: ", dependencyCount);
  };

  return (
    <>
      <h1>
        {" "}
        it will run infinitely because no dependency paramter given in useEffect
        hook : {count}
      </h1>
      <h2>
        it will Increase if you click this button : {dependencyCount}
        <br></br>
        <button onClick={handleClick}> Increase counter </button>
      </h2>
      <br></br>
      <hr></hr>
    </>
  );
};
