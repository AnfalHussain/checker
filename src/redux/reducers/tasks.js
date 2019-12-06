import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  FINISHED_TASK,
  UNFINISH_TASK
} from "../actions/actionTypes";

const initialState = {
  tasks: [],
  task: null,
  loading: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TASKS:
      const tasks = payload;
      return {
        ...state,
        tasks: tasks,
        loading: false
      };
    case ADD_TASK:
      const newTask = payload;
      return {
        ...state,
        tasks: state.tasks.concat(newTask)
      };
    default:
      return state;
  }
};
export default reducer;
