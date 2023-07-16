import React, { useState } from "react";
import UseStateChild from "./UseStateChild";

function UseState() {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <p>Value: {inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <UseStateChild name={name} />
      <button>Submit</button>
    </div>
  );
}

export default UseState;
