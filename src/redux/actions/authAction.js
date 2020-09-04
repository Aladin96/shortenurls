import * as types from "../types.js";

// Login
export const login = (creds) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(creds);
    await firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({
          type: types.ALERT_SUCCCES,
          payload: { message: "Login With success, WELCOME ", type: "success" },
        });

        // Clear Loading
        dispatch({ type: types.LOADING, status: false });

        return dispatch({ type: types.LOGIN_SUCCESS });
      })
      .catch((err) => {
        // Clear Loading
        dispatch({ type: types.LOADING, status: false });

        return dispatch({ type: types.LOGIN_ERROR, err });
      });
  };
};

// Sign Up
export const signUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password);
      firestore
        .collection("users")
        .doc(result.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        })
        .then((res) => console.log(res));
      dispatch({
        type: types.ALERT_SUCCCES,
        payload: { message: "Sign up with Success Yaay ! ", type: "success" },
      });

      // Clear Loading
      dispatch({ type: types.LOADING, status: false });

      return dispatch({ type: types.SIGNUP_SUCCESS, success: true });
    } catch (err) {
      // Clear Loading
      dispatch({ type: types.LOADING, status: false });

      return dispatch({ type: types.SIGNUP_ERROR, err });
    }
  };
};

// Logout
export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        return dispatch({ type: types.LOGOUT });
      });
  };
};

// Clear Error
export const clearError = () => {
  return { type: types.CLEAR_ERROR };
};

// Loading

export const onLoad = (loading) => {
  return { type: types.LOADING, loading };
};
