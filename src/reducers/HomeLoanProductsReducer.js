import { GET_HOME_LOAN_PRODUCTS } from "../actions/Types";

const initialState = {
  homeloan_products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOME_LOAN_PRODUCTS:
      return {
        ...state,
        homeloan_products: action.payload,
      };

    default:
      return state;
  }
}
