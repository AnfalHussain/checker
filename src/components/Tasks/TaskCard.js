import React from "react";
import { connect } from "react-redux";

// Actions
import { deleteTask, changeStateTask } from "../../redux/actions";

import "icheck/skins/all.css"; // or single skin css

import { Checkbox, Radio } from "react-icheck";

function TaskCard(props) {
  const task = props.task;

  //we need component did update
  const myFunction = () => {
    const newState = !task.status;
    console.log(`old state ${task.status}  new state  ${newState}`);
    props.changeStateTask(task.id, newState);
  };

  return (
    <tr className="row">
      <td>
        <Checkbox
          checkboxClass="icheckbox_square-blue"
          increaseArea="20%"
          ifToggled={() => props.changeStateTask(task.id, !task.status)}
        />
        <button className="rounded-pill btn" onClick={() => myFunction()}>
          Change Status
        </button>
      </td>
      <td>{task.name}</td>

      {/* <td onClick={() => props.watchMovie(movie)}>
        <button className="rounded-pill btn-primary">Watched</button>
      </td> */}

      {/* onClick={() => props.deleteTask(task.id)} */}
      <td className=" pl-5">
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
    changeStateTask: (id, newState) => dispatch(changeStateTask(id, newState))
  };
};

export default connect(null, mapDispatchToProps)(TaskCard);
// export default TaskCard;
