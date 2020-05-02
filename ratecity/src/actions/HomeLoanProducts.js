import { GET_HOME_LOAN_PRODUCTS } from "./Types";
import axios from "axios";
import { startLoading, stopLoading } from "./Loader";
const url = "https://blaze.ratecity.com.au/api/search/home-loans?page=";

export const getHomeLoanProducts = (pageNumber) => (dispatch) => {
  dispatch(startLoading());
  return axios
    .get(url + pageNumber)
    .then((res) => {
      dispatch({
        type: GET_HOME_LOAN_PRODUCTS,
        payload: res.data,
      });
      dispatch(stopLoading());
    })
    .catch((err) => {
      dispatch(stopLoading());
      console.log(err);
    });
};
