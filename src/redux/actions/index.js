import { DELETE_USER } from "./../contants";

const actDeleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

const actEditUser = (user) => {
  return {
    type: "EDIT_USER",
    payload: user,
  };
};

export { actDeleteUser, actEditUser };
