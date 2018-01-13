import { combineReducers } from "redux";
import AppReducer from "../reducers/AppReducer";
import FormChangeProductReducer from "../reducers/FormChangeProductReducer";
import ProductDisplayReducer from "../reducers/ProductDisplayReducer";
import FormAddTextReducer from "../reducers/FormAddTextReducer";

const reducers = combineReducers({
  app: AppReducer,
  productChanger: FormChangeProductReducer,
  productDisplay: ProductDisplayReducer,
  textOption: FormAddTextReducer
});

export default reducers;
