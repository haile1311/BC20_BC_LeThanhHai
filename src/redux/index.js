import { combineReducers } from "redux";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
  //combine các child reducer
  //key: value
  userReducer, //userReducer: userReducer
});

export default rootReducer;
