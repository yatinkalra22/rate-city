import { combineReducers } from "redux";
import homeLoanProducts from "./HomeLoanProductsReducer";
import LoadingReducer from "./LoadingReducer";

export default combineReducers({
  homeLoanProductsReduer: homeLoanProducts,
  LoadingReducer,
});
