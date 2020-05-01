import { GET_HOME_LOAN_PRODUCTS } from "../../actions/Types";
import HomeLoanProductsReducer from "../HomeLoanProductsReducer";

//  [Yatin] 02/05/2020 CREATED - Testing the GET_HOME_LOAN_PRODUCTS
describe("HomeLoanProductsReducer testing", () => {
  describe("[GET_HOME_LOAN_PRODUCTS] Testing", () => {
    //  [Yatin] 02/05/2020 CREATED - GET_HOME_LOAN_PRODUCTS initially null
    it("[GET_HOME_LOAN_PRODUCTS] [initial-null] should return state object with producsList Details array equal to the payload in the action when the action type is GET_HOME_LOAN_PRODUCTS(when the state is initial state)", () => {
      const action = {
        type: GET_HOME_LOAN_PRODUCTS,
        payload: [],
        homeloan_products: [],
      };
      const returnedState = HomeLoanProductsReducer(undefined, action);
      expect(returnedState).toEqual({
        homeloan_products: action.homeloan_products,
      });
    });

    //  [Yatin] 02/05/2020 CREATED - GET_HOME_LOAN_PRODUCTS initially has some values
    it("[GET_HOME_LOAN_PRODUCTS] [initial-Some Values] should return state object with producsList Details array equal to the payload in the action when the action type is GET_HOME_LOAN_PRODUCTS(when the state state is not initial state)", () => {
      const initialState = {
        homeloan_products: [{}],
      };
      const action = {
        type: GET_HOME_LOAN_PRODUCTS,
        payload: [{}, {}, {}],
      };
      const returnedState = HomeLoanProductsReducer(initialState, action);
      expect(returnedState).toEqual({
        homeloan_products: action.payload,
      });
    });

    //  [Yatin] 02/05/2020 CREATED - When SOME TYPE is used rather then GET_HOME_LOAN_PRODUCTS having initially null
    it("[GET_HOME_LOAN_PRODUCTS - SOME TYPE] [initial-null] should return state object with producsList Details array equal to the payload in the action when the action type is SOME TYPE(when the state is initial state)", () => {
      const action = {
        type: "SOME_TYPE",
        payload: [],
      };
      const returnedState = HomeLoanProductsReducer(undefined, action);
      expect(returnedState).toEqual({
        homeloan_products: action.payload,
      });
    });

    //  [Yatin] 02/05/2020 CREATED - When SOME TYPE is used rather then GET_HOME_LOAN_PRODUCTS having initially some values
    it("[GET_HOME_LOAN_PRODUCTS -SOME TYPE] [initial-Some Values] should return state object with producsList Details array equal to the payload in the action when the action type is SOME TYPE(when the state state is not initial state)", () => {
      const initialState = {
        homeloan_products: [{}],
      };
      const action = {
        type: "SOME TYPE",
        payload: [{}],
      };
      const returnedState = HomeLoanProductsReducer(initialState, action);
      expect(returnedState).toEqual({
        homeloan_products: action.payload,
      });
    });
  });
});
