import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import TaskCard from "./TaskCard.js";
import { fetchTasks, deleteAllTasks } from "../../redux/actions";

class TasksList extends Component {
  state = {
    toDoTasksArray: this.props.tasks.filter(task => task.status === false),
    doneTasksArray: this.props.tasks.filter(task => task.status === true)
  };
  componentDidUpdate(prevProps) {
    if (this.props.tasks !== prevProps.tasks) {
      // this.props.fetchTasks();
      console.log(" inside if (this.props.tasks !== prevProps.tasks) ");
      let newToDo = this.props.tasks.filter(task => task.status === false);
      let newDone = this.props.tasks.filter(task => task.status === true);

      this.setState({ toDoTasksArray: newToDo, doneTasksArray: newDone });
    }
  }

  render() {
    //Unfinished tasks
    const toDoTasks = this.state.toDoTasksArray;
    const toDoTasksRows = toDoTasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ));

    //Finished tasks

    const doneTasks = this.state.doneTasksArray;
    const doneTasksRows = doneTasks.map(task => (
      <TaskCard task={task} key={task.id} />
    ));

    return (
      <>
        <div className="card mt-5">
          <button
            className="rounded-pill btn"
            onClick={() => this.props.deleteAllTasks()}
          >
            <h2 style={{ paddingTop: 50, fontFamily: "Futura", color: "blue" }}>
              Delete All Tasks{" "}
            </h2>
          </button>
        </div>

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
    fetchTasks: () => dispatch(fetchTasks()),
    deleteAllTasks: () => dispatch(deleteAllTasks())
  };
};

const mapStateToProps = state => {
  return {
    tasks: state.rootTasks.tasks
  };
};
// export default connect(mapStateToProps)(TasksList);

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
