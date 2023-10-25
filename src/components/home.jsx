import { React, Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>This is my class based Home component</h1>
        <p>Hello, {this.props.name}</p>
      </>
    );
  }
}

Home.defaultProps = {
  name: "John_2",
};
