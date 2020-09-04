import * as types from "../types.js";

export const loadingUIReducer = (state = false, action) => {
  switch (action.type) {
    case types.LOADING:
      return action.status;
    default:
      return state;
  }
};
