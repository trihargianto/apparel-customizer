import { combineReducers } from "redux";
import AppReducer from "../reducers/AppReducer";
import FormChangeProductReducer from "../reducers/FormChangeProductReducer";

const reducers = combineReducers({
  app: AppReducer,
  productChanger: FormChangeProductReducer
});

export default reducers;
