import React, { useState } from "react";

const LearningState = () => {
  //   const [counter, setCounter] = useState(0);
  //   const [name, setName] = useState("");

  const [details, setDetails] = useState({ counter: 0, name: "" });

  const Increasing = () => {
    // setCounter(counter + 1);

    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  };

  return (
    <>
      <h1>LearningState</h1>
      <input
        type="text"
        onChange={(e) =>
          setDetails((prev) => ({
            ...prev, // Spread Operator to create a copy of the previous state
            name: e.target.value,
          }))
        }
      />
      <h2>
        Your Input : "{details.name}" & You clicked Increase counter :{" "}
        {details.counter} Times!!!
      </h2>
      <button onClick={Increasing}>Increase</button>
    </>
  );
};

export default LearningState;
