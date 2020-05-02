import { LOADING_START, LOADING_STOP } from "../actions/Types";

const initialState = {
  isloading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
