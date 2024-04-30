import { useState } from "react";
export default function Test() {
  //   var stepVal = 3;
  let [stepVal, setStep] = useState(0);
  //   let [day, setDay] = useState("Today is Mon Jun 21 2027");
  let [count, setCount] = useState(0);
  function minusValue() {
    // stepVal = stepVal = -1;
    setStep((stepVal) => stepVal - 1);
  }
  function plusVal() {
    setStep((stepVal) => stepVal + 1);
  }
  function plusDate() {
    setCount((count) => (count += stepVal));
  }
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Test of State</h1>
      {/* upper buttons */}
      <div style={{ display: "flex" }}>
        <button style={{ marginRight: "12px" }} onClick={minusValue}>
          {" "}
          -{" "}
        </button>
        step: {stepVal}
        <button style={{ marginLeft: "12px" }} onClick={plusVal}>
          {" "}
          +{" "}
        </button>
      </div>
      {/* lower buttons */}
      <div style={{ display: "flex", marginTop: "30px" }}>
        <button
          style={{ marginRight: "12px" }}
          onClick={() => setCount((count) => count - stepVal)}
        >
          {" "}
          -{" "}
        </button>
        count: {count}
        <br />
        <button
          style={{ marginLeft: "12px" }}
          //   onClick={() => setCount((count) => count + stepVal)}
          onClick={plusDate}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div style={{ marginTop: "32px" }}>
        {/* {new Date().toDateString()} */}
        {count === 0
          ? `Today is ${new Date().toDateString()}`
          : count > 0
          ? `${count} day from today is ${date.toDateString()}  `
          : `${count} ago from today is ${date.toDateString()}`}
      </div>
    </div>
  );
}

// https://www.youtube.com/watch?v=XbS6Qnz-3tE
// https://www.youtube.com/watch?v=O1pVk8muR_A
