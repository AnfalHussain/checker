import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import TaskCard from "./TaskCard.js";

import { fetchTasks } from "../../redux/actions";

class TasksList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    //Unfinished tasks
    const toDoTasks = this.props.tasks.filter(task => task.status === false);
    const toDoTasksRows = toDoTasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ));

    //Finished tasks

    const doneTasks = this.props.tasks.filter(task => task.status === true);
    const doneTasksRows = doneTasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ));

    return (
      <>
        <div>
          <h1>To Do:</h1>
        </div>
        <div>
          <table className="table">{toDoTasksRows}</table>
        </div>

        <div>
          <h1>Done:</h1>

          <div>
            <table className="table">{doneTasksRows}</table>
          </div>
        </div>
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
