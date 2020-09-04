import React from "react";
import { connect } from "react-redux";

//Redux Actions
import * as authAction from "../../redux/actions/authAction";
import * as modalAction from "../../redux/actions/modalAction";

const Logout = (props) => {
  return (
    <div
      className="logout"
      onClick={() => {
        props.logout();
        props.showLogin(false);
        props.showSignUp(false);
      }}
    >
      <span>logout </span>
      <i className="fas fa-sign-out-alt"></i>
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

export default connect(null, mapToDispatch)(Logout);
