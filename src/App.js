// import styles from "./";
import React from "react";
import AllAboutuseState from "./AllAboutuseState";
import { AllAboutuseEffect } from "./AllAboutuseEffect";
import { AllAboutuseRef } from "./AllAboutUseRefHook";
function App() {
  return (
    <div>
      {/* <div>
        <AllAboutuseEffect />
      </div>
      <div>
        <AllAboutuseState />
      </div> */}
      <div>
        <AllAboutuseRef />
      </div>
    </div>
  );
}

export default App;
