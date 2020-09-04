import React from "react";
import { connect } from "react-redux";
import * as authAction from "../../../redux/actions/authAction";
import * as modalAction from "../../../redux/actions/modalAction";
const SignedIn = (props) => {
  return (
    <div className="menu">
      <ul>
        <li>My urls</li>
        <li
          onClick={() => {
            props.logout();
            props.showLogin(false);
            props.showSignUp(false);
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

const mapToDispatch = (dispatch) => {
  return {
    showSignUp: (show) => dispatch(modalAction.showSignUp(show)),
    showLogin: (show) => dispatch(modalAction.showLogin(show)),
    logout: () => dispatch(authAction.logout()),
  };
};

export default connect(null, mapToDispatch)(SignedIn);
