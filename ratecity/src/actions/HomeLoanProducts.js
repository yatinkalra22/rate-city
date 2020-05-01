import { GET_HOME_LOAN_PRODUCTS } from "./Types";
import axios from "axios";
const url = "https://blaze.ratecity.com.au/api/search/home-loans?page=";

export const getHomeLoanProducts = (pageNumber) => (dispatch) => {
  return axios
    .get(url + pageNumber)
    .then((res) => {
      dispatch({
        type: GET_HOME_LOAN_PRODUCTS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
