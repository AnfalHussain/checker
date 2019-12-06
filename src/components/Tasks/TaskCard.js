import React from "react";
import { connect } from "react-redux";

import "./App.css";

// Actions

// import { deleteTask } from "./redux/actions";

function TaskCard(props) {
  const task = props.task;

  return (
    <tr className="row">
      <td>{task.name}</td>

      {/* <td onClick={() => props.watchMovie(movie)}>
        <button className="rounded-pill btn-primary">Watched</button>
      </td> */}

      {/* onClick={() => props.deleteMovie(movie)} */}
      <td>
        <button className="rounded-pill btn-danger">✕</button>
      </td>
      <hr />
    </tr>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     watchMovie: movie => dispatch(watchMovie(movie)),
//     deleteMovie: movie => dispatch(deleteMovie(movie))
//   };
// };

// export default connect(null, mapDispatchToProps)(TaskCard);
export default TaskCard;
