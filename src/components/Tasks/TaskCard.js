import React from "react";
import { connect } from "react-redux";

// Actions

import { deleteTask, changeStateTask } from "../../redux/actions";

function TaskCard(props) {
  const task = props.task;
  //we need component did update

  return (
    <tr className="row">
      <td>
        <button
          className="rounded-pill btn"
          onClick={() => props.changeStateTask(task.id)}
        >
          Change Status
        </button>
      </td>
      <td>{task.name}</td>

      {/* <td onClick={() => props.watchMovie(movie)}>
        <button className="rounded-pill btn-primary">Watched</button>
      </td> */}

      {/* onClick={() => props.deleteTask(task.id)} */}
      <td>
        <button
          className="rounded-pill btn-danger"
          onClick={() => props.deleteTask(task.id)}
        >
          ✕
        </button>
      </td>
      <hr />
    </tr>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTask(id)),
    changeStateTask: id => dispatch(changeStateTask(id))
  };
};

export default connect(null, mapDispatchToProps)(TaskCard);
// export default TaskCard;
