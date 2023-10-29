import { React, Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
    };
  }
  render() {
    return (
      <>
        <h1>This is my class based Home component</h1>
        <p>Hello, {this.props.name}</p>
        <hr />
        {this.state.flag === true ? (
          <h2>Hide & Show - Toggle Practice with class-based Comp.</h2>
        ) : null}
        <button
          onClick={() => {
            this.setState({
              flag: !this.state.flag,
            });
          }}
        >
          {" "}
          <h4>Toggle me</h4>{" "}
        </button>
      </>
    );
  }
}

Home.defaultProps = {
  name: "John_2",
};
