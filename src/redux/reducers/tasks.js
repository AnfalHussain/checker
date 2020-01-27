import {
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASKS,
  CHANGE_STATUS_TASK,
  DELETE_ALL_TASKS
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

    case DELETE_TASK:
      const taskID = payload;
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.id !== taskID)]
      };

    case DELETE_ALL_TASKS:
      return {
        ...state,
        tasks: []
      };

    case CHANGE_STATUS_TASK:
      // const id = payload;

      // const tempTasks = state.tasks.map(task =>  (task.id === id))
      return {
        ...state,
        tasks: state.tasks
        // tasks: [...state.tasks.map(task => task.id !== movieToSetToWatched ? movie : { ...movie, done: true })]

        // tasks: state.tasks.concat(id)
      };

    default:
      return state;
  }
};
export default reducer;
