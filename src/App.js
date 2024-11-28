// import styles from "./";
import AllAboutuseState from "./AllAboutuseState";
import { AllAboutuseEffect } from "./AllAboutuseEffect";
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <div>
        <AllAboutuseEffect />
      </div>
      <div>
        <AllAboutuseState />
      </div>
    </React.StrictMode>
  );
}

export default App;
