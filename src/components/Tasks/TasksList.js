import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import TaskCard from "./TaskCard.js";

import { fetchTasks } from "../../redux/actions";

class TasksList extends Component {
  render() {
    const tasksRows = this.props.tasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ));

    return (
      <>
        <table className="table">{tasksRows}</table>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  };
};

const mapStateToProps = state => {
  return {
    tasks: state.rootTasks.tasks
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
