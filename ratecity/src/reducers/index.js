import { combineReducers } from "redux";
import homeLoanProducts from "./HomeLoanProductsReducer";

export default combineReducers({
  homeLoanProductsReduer: homeLoanProducts,
});
