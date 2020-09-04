import * as types from "../types.js";
const init = { authError: null, loading: false };
export const authReducer = (state = init, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return { authError: false, loading: false };

    case types.SIGNUP_SUCCESS:
      return { authError: false, loading: false };

    case types.LOGIN_ERROR:
    case types.SIGNUP_ERROR:
      return { authError: true, loading: false };

    case types.LOGOUT:
      return state;

    case types.CLEAR_ERROR:
      return { authError: false, loading: action.loading };

    case types.LOADING:
      console.log(action);
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};
