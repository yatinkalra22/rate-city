import * as action from "../HomeLoanProducts";
import { GET_HOME_LOAN_PRODUCTS } from ".././Types";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const url = "https://blaze.ratecity.com.au/api/search/home-loans?page=";

describe("HomeLoanProducts action testing", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  //  [Yatin] 02/05/2020 CREATED - [Positive 200 OK]Calling the url with action type as GET_HOME_LOAN_PRODUCTS
  //   and expecting 200 OK from the server
  it("[GET_HOME_LOAN_PRODUCTS] [200 OK] should call an action with type GET_HOME_LOAN_PRODUCTS and the payload should be same as the API response when the response is 20*", () => {
    const responseOfApi = [{}];
    const pageNumber = 1;
    moxios.stubRequest(url + pageNumber, {
      status: 200,
      response: { data: responseOfApi },
    });
    const store = mockStore({});
    const expectedResponse = [
      {
        type: GET_HOME_LOAN_PRODUCTS,
        payload: responseOfApi,
      },
    ];
    return store.dispatch(action.getHomeLoanProducts(pageNumber)).then(() => {
      expect(store.getActions()).toEqual(expectedResponse);
    });
  });

  //   //  [Yatin] 02/05/2020 CREATED - [Negative 400 BAD REQUEST] Calling the incorrect url with action type as GET_HOME_LOAN_PRODUCTS
  //   //   and expecting 400 BAD REQUEST from the server
  //   it("[GET_HOME_LOAN_PRODUCTS] [400 BAD REQUEST] should create an action with type GET_HOME_LOAN_PRODUCTS and the payload should be null when the response is 40*", () => {
  //     const responseOfApi = [];
  //     moxios.stubRequest(url, {
  //       status: 400,
  //       response: { data: responseOfApi },
  //     });
  //     const store = mockStore({});
  //     const expectedResponse = [];
  //     return store.dispatch(action.getHomeLoanProducts()).then(() => {
  //       expect(store.getActions()).toEqual(expectedResponse);
  //     });
  //   });

  // //  [Yatin] 02/05/2020 CREATED - [Negative 500 INTERNAL SERVER] Calling the url with action type as GET_HOME_LOAN_PRODUCTS
  // //   and expecting 500 INTERNAL SERVER from the server
  // it("[GET_HOME_LOAN_PRODUCTS] [500 INTERNAL SERVER] should create an action with type GET_HOME_LOAN_PRODUCTS and the payload should be same as the API response when the response is 50*", () => {
  //   const responseOfApi = "";
  //   const pageNumber = 1;
  //   moxios.stubRequest(url + pageNumber, {
  //     status: 500,
  //     response: { data: responseOfApi }
  //   });
  //   const store = mockStore({});
  //   const expectedResponse = [];
  //   return store.dispatch(action.getHomeLoanProducts(pageNumber)).then(() => {
  //     expect(store.getActions()).toEqual(expectedResponse);
  //   });
  // });
});
