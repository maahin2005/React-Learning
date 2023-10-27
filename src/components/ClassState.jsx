import { React, Component } from "react";

class LearnStateWithClass extends Component {
  constructor() {
    super();
    this.state = {
      data: "click and update",
      num: 0,
    };
  }

  updateData() {
    alert("update");
    this.setState({
      data: "Data Updated By Class component",
      num: this.state.num + 1,
    });
  }

  render() {
    return (
      <>
        <h1>Practice State With Class</h1>
        <h2>
          {this.state.data} and number is : {this.state.num}
        </h2>
        <button
          onClick={() => {
            this.updateData();
          }}
        >
          Update Data
        </button>
      </>
    );
  }
}

export default LearnStateWithClass;
