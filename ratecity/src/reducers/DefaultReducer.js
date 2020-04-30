import { DEFAULT } from "../actions/Types";

const initialstate = {
  default: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case DEFAULT:
      return { ...state, default: action.payload };

    default:
      return state;
  }
}
