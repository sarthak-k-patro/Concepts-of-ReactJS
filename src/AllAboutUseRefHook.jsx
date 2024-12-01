import { useEffect, useRef, useState } from "react";

export const AllAboutuseRef = () => {
  const renderCount = useRef(0);
  const [dependencyCount, setDependencyCount] = useState(0);
  console.log("Render count oustside useeffect: ", renderCount.current);
  const func = () => {
    // console.log("Render count: ", renderCount.current);
    renderCount.current = renderCount.current + 1;
  };
  useEffect(func);

  const handleClick = (dec = "dec") => {
    dec === "dec"
      ? setDependencyCount((prev) => prev - 1)
      : setDependencyCount((prev) => prev + 1);
    console.log("count value with dependency array: ", dependencyCount);
  };
  return (
    <>
      <h2>
        Render Count (How many time the Ui has rendered) : {renderCount.current}
        <br></br>
        <hr></hr>
        <button onClick={handleClick}> Increase counter </button>
        <div>
          <h3>count : {dependencyCount}</h3>
        </div>
        <button onClick={() => handleClick("dec")}> decrease counter </button>
      </h2>
      <br></br>
      <hr></hr>
    </>
  );
};
