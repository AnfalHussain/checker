import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { addTask } from "../../redux/actions";

class AddTask extends Component {
  state = {
    input: ""
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleAdd = () => {
    const task = {
      name: this.state.input,
      status: false
    };

    this.props.addTask(task);

    this.setState({
      input: ""
    });
  };

  handleKeyDown = async event => {
    if (["Enter"].includes(event.key)) {
      this.handleAdd();
    }
  };

  // add text field
  render() {
    return (
      <div>
        <input
          className="mx-auto rounded-pill text-center"
          style={{ borderColor: "#3f9ff2" }}
          placeholder="Add a Task .."
          name="input"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          type="text"
          value={this.state.input}
        />

        <button
          className="rounded"
          style={{ backgroundColor: "#3f9ff2", color: "white" }}
          onClick={() => {
            this.handleAdd();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task))
  };
};

// export default AddTask;

export default connect(null, mapDispatchToProps)(AddTask);
