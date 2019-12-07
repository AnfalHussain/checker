import { createStore, applyMiddleware } from "redux";
import { fetchTasks } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import rootReducer from "./reducers";
const middlewares = [thunk];

const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancer);
store.dispatch(fetchTasks());

export default store;
