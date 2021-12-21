// import {
//   DELETE_USER,
//   EDIT_USER,
//   SUBMIT_USER,
//   GET_KEYWORD
// } from "./../contants";
import * as ActionType from "./../contants";

const actDeleteUser = (user) => {
  return {
    type: ActionType.DELETE_USER,
    payload: user,
  };
};

const actEditUser = (user) => {
  return {
    type: ActionType.EDIT_USER,
    payload: user,
  };
};

const actOnSubmit = (user) => {
  return {
    type: ActionType.SUBMIT_USER,
    payload: user,
  };
};

const actGetKeyword = (key) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload: key,
  };
};

export { actDeleteUser, actEditUser, actOnSubmit, actGetKeyword };
