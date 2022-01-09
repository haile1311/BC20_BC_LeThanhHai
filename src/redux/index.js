import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import BaiTapOanTuXiReducer from "../BtOanTuXi-reducer/oantuxi-reducer";
import BaiTapDatVeReducer from "../BtDatVePhimReducer/datvephim-reducer";
import BaiTapBauCuaReducer from "./reducers/BaiTapBauCuaReducer";

const rootReducer = combineReducers({
  //combine các child reducer
  //key: value
  userReducer, //userReducer: userReducer
  BaiTapOanTuXiReducer,
  BaiTapDatVeReducer,
  BaiTapBauCuaReducer,
});

export default rootReducer;
