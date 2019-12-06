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
      ipnut: event.target.value
    });
  };

  // add text field
  render() {
    return (
      <div>
        <input
          className="mx-auto rounded-pill text-center"
          style={{ borderColor: "#3f9ff2" }}
          placeholder="Add a Task .."
          onChange={this.handleChange}
          type="text"
        />

        <button
          className="rounded"
          style={{ backgroundColor: "#3f9ff2", color: "white" }}
          onClick={() => this.props.addTask(this.state.ipnut)}
        >
          {console.log(this.state.ipnut)}+
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
