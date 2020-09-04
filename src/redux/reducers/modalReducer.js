import * as types from "../types.js";
const init = {
  showLogin: false,
  showSingUp: false,
};
export const modalReducer = (state = init, action) => {
  switch (action.type) {
    case types.SHOW_LOGIN:
      return action.payload;
    case types.SHOW_SING_UP:
      return action.payload;
    default:
      return state;
  }
};
