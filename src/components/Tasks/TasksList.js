import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import TaskCard from "./TaskCard.js";
import { fetchTasks } from "../../redux/actions";

class TasksList extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.tasks !== prevProps.tasks) {
      this.props.fetchTasks();
    }
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
        <div className="card mt-5">
          <h2 style={{ paddingTop: 50, fontFamily: "Futura" }}>To Do:</h2>
        </div>
        <div style={{ paddingLeft: 500 }}>
          <table className="table">{toDoTasksRows}</table>
        </div>

        <div className="card">
          <h2 style={{ paddingTop: 50, fontFamily: "Futura" }}>Done:</h2>

          <div style={{ paddingLeft: 500 }}>
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
// export default connect(mapStateToProps)(TasksList);

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
