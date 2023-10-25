import React from "react";
import PropTypes from "prop-types";

export default function Home(props) {
  return (
    <>
      <h1>This is My function based Home Component</h1>
      <p>Hello, {props.name}</p>
    </>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
