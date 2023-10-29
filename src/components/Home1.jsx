import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Home(props) {
  const [state, setState] = useState(true);
  return (
    <>
      <h1>This is My function based Home Component</h1>
      <p>Hello, {props.name}</p>
      <hr />
      {state ? (
        <h2>Hide & Show - Toggle Practice with Function-based Comp.</h2>
      ) : null}
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        {" "}
        <h4>Toggle me</h4>{" "}
      </button>
    </>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
