import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { modalReducer } from "./modalReducer";
import { authReducer } from "./authReducer";
import { alertReducer } from "./alertReducer";
import { loadingUIReducer } from "./loadingUIReducer";
import { urlsReducer } from "./urlsReducer";
const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  alert: alertReducer,
  loading: loadingUIReducer,
  url: urlsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
