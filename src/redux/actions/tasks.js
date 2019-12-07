import {
  ADD_TASK,
  DELETE_TASK,
  DELETE_ALL_TASKS,
  CHANGE_STATUS_TASK,
  FETCH_TASKS
} from "./actionTypes";

import instance from "./instance";

export const fetchTasks = () => async dispatch => {
  try {
    const res = await instance.get("get/");
    const tasks = res.data.reverse();
    dispatch({ type: FETCH_TASKS, payload: tasks });
  } catch (error) {
    console.error(error);
  }
};

export const addTask = task => {
  return async dispatch => {
    console.log("task!!!", task.name);
    try {
      const response = await instance.post("add/", { name: task.name });

      dispatch({ type: ADD_TASK, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTask = taskID => async dispatch => {
  try {
    const res = await instance.delete(`delete/${taskID}/`);
    const task = res.data;
    dispatch({ type: DELETE_TASK, payload: task });
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllTasks = () => async dispatch => {
  try {
    const res = await instance.delete(`deleteall/`);
    const task = res.data;
    dispatch({ type: DELETE_ALL_TASKS, payload: task });
  } catch (error) {
    console.error(error);
  }
};

export const changeStateTask = taskID => {
  return async dispatch => {
    try {
      const response = await instance.put(`status/${taskID}/`);
      dispatch({ type: CHANGE_STATUS_TASK, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};
