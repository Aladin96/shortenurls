import * as types from "../types.js";

export const onLoad = (status) => {
  return { type: types.LOADING, status };
};
