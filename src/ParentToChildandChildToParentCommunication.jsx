import { useState } from "react";
function Child(props) {
  console.log("props:", props);
  props.funcTion("newest message");
  return (
    <>
      <h1>I am child, message received from parent: {props.message}</h1>
    </>
  );
}

export default function Parent() {
  const [msg, setMsg] = useState("Initial Msg");
  return (
    <>
      <h1>I am parent</h1>
      <h2>
        Child component called in parent:{msg}
        <Child message={msg} funcTion={setMsg} />
      </h2>
    </>
  );
}
