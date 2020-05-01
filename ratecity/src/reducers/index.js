import { combineReducers } from "redux";
import defaultReducer from "./DefaultReducer";
import homeLoanProducts from "./HomeLoanProductsReducer";

export default combineReducers({
  defaultReducer: defaultReducer,
  homeLoanProductsReduer: homeLoanProducts,
});
