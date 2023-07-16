import React, { useState } from "react";

function Home() {
  // states - hook -> useState()

  let a;

  let b = 10;

  // const [a, setA] = useState()
  // const [b, setB] = useState(10);

  // Syntax
  // const [value, setValue] = useState(initialValue)
  // const [name, setName] = useState(name)

  // setter - setTime
  const [time, setTime] = useState(11);
  const [age, setAge] = useState(11);
  const [weekday, setWeekday] = useState("monday");

  console.log("time", time);

  function updateTheTime() {
    console.log("updateTheTime button called");
    setTime(12);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <button onClick={updateTheTime}>Update time</button>
    </div>
  );
}

export default Home;
