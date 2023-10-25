import React from "react";

export default function Home(props) {
  return (
    <>
      <h1>This is My function based Home Component</h1>
      <p>Hello, {props.name}</p>
    </>
  );
}
