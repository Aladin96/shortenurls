import * as types from "../types.js";

export const urlsReducer = (state = null, action) => {
  switch (action.type) {
    case types.ADD_URL:
      return action.url;
    case types.REDIRECT:
      return action.url;
    default:
      return state;
  }
};
