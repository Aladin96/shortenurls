import * as types from "../types.js";

export const addUrl = (url) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    try {
      await firestore
        .collection("urls")
        .add({ url })
        .then((docRef) => dispatch({ type: types.ADD_URL, url: docRef.id }));
    } catch (err) {
      dispatch({ type: types.ADD_URL_ERROR, err });
    }
    // Clear Loading
    return dispatch({ type: types.LOADING, status: false });
  };
};

export const redirect = (urlID) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    const urlRef = await firestore.collection("urls").doc(urlID);
    urlRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          console.log(data.url);

          return dispatch({
            type: types.REDIRECT,
            url: data.url,
          });
        } else {
          // doc.data() will be undefined in this case
          window.location = "/";
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };
};
