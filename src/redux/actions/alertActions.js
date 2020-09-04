import * as types from "../types.js";

export const alertSuccess = (message, type) => {
  return {
    type: types.ALERT_SUCCCES,
    payload: { message, type },
  };
};

export const clearAlert = () => {
  return { type: types.CLEAR_ALERT };
};
