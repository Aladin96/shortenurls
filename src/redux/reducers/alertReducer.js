import * as types from "../types.js";
const init = { status: false, message: "", type: "" };
export const alertReducer = (state = init, action) => {
  switch (action.type) {
    case types.ALERT_SUCCCES:
      return {
        status: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case types.CLEAR_ALERT:
      return { status: false, message: "", type: "" };
    default:
      return state;
  }
};
