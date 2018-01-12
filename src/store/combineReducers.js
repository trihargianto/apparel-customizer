import { combineReducers } from "redux";
import AppReducer from "../reducers/AppReducer";

const reducers = combineReducers({
  app: AppReducer
});

export default reducers;
