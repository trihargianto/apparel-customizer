import { combineReducers } from "redux";
import AppReducer from "../reducers/AppReducer";
import FormChangeProductReducer from "../reducers/FormChangeProductReducer";
import ProductDisplayReducer from "../reducers/ProductDisplayReducer";

const reducers = combineReducers({
  app: AppReducer,
  productChanger: FormChangeProductReducer,
  productDisplay: ProductDisplayReducer
});

export default reducers;
