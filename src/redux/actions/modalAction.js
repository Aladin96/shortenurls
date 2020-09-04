import * as types from "../types.js";

export const showLogin = (showLogin) => {
  return {
    type: types.SHOW_LOGIN,
    payload: {
      showLogin,
      showSignUp: false,
    },
  };
};

export const showSignUp = (showSignUp) => {
  return {
    type: types.SHOW_SING_UP,
    payload: {
      showLogin: false,
      showSignUp,
    },
  };
};
