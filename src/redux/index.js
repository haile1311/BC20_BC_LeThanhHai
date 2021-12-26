import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import BaiTapOanTuXiReducer from "../BtOanTuXi-reducer/oantuxi-reducer";
import BaiTapDatVeReducer from "../BtDatVePhimReducer/datvephim-reducer";

const rootReducer = combineReducers({
  //combine các child reducer
  //key: value
  userReducer, //userReducer: userReducer
  BaiTapOanTuXiReducer,
  BaiTapDatVeReducer,
});

export default rootReducer;
