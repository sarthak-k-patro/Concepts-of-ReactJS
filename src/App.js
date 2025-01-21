// import styles from "./";
import React from "react";
import AllAboutuseState from "./AllAboutuseState";
import { AllAboutuseEffect } from "./AllAboutuseEffect";
import { AllAboutuseRef } from "./AllAboutUseRefHook";
import CustomHookComponent from "./AllaboutCustomHook";
function App() {
  return (
    <div>
      {/* <div>
        <AllAboutuseEffect />
      </div>
      <div>
        <AllAboutuseState />
      </div>
      <div>
        <AllAboutuseRef /> */}
      {/* </div> */}
      <div>
        <CustomHookComponent />
      </div>
    </div>
  );
}

export default App;
