import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  CHANGE_STATUS_TASK
} from "../actions/actionTypes";

const initialState = {
  tasks: [],
  task: null,
  loading: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      const newTask = payload;
      return {
        ...state,
        tasks: [newTask, ...state.tasks]
      };

    case FETCH_TASKS:
      const tasks = payload;
      return {
        ...state,
        tasks: tasks,
        loading: false
      };

    // case CHANGE_STATUS_TASK:
    //   const id = payload;
    //   const tempTasks = state.tasks.map(task => if (task.id === id))
    //   return {
    //     ...state,
    //     tasks: state.tasks.concat(id)
    //   };

    default:
      return state;
  }
};
export default reducer;
