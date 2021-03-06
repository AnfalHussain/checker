import { combineReducers } from "redux";
import tasksReducer from "./tasks";

const rootReducer = combineReducers({
  rootTasks: tasksReducer
});

export default rootReducer;
