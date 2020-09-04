import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

// Redux Actions
import * as modalAction from "../../redux/actions/modalAction";
import * as authAction from "../../redux/actions/authAction";
import * as loadingUIAction from "../../redux/actions/loadingUIAction";

//Utils
import { modalCardVariants, buttonVariants } from "../../utils/motion";
// Layout
import Loading from "../layout/Loading";
//Common
import Emoji from "../common/Emoji";
//Css
import "../../css/modal.css";

const Login = (props) => {
  const {
    show,
    showLogin,
    login,
    authError,
    clearError,
    loading,
    onLoad,
  } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const creds = { email, password };
    onLoad(true);
    login(creds);
  };

  return (
    <div className={show ? "modal login" : " modal login hide"}>
      <div
        className="overly"
        onClick={() => {
          showLogin(false);
          clearError();
        }}
      ></div>
      <motion.div
        animate={show ? "open" : "closed"}
        variants={modalCardVariants}
        className="card"
      >
        <h2>
          Login <Emoji label="unlock" icon="🔓" />
        </h2>
        <div
          className="close"
          onClick={() => {
            showLogin(false);
            clearError();
          }}
        >
          <i className="fas fa-times"></i>
        </div>
        <form onSubmit={handleSubmit}>
          {authError && (
            <div className="error-msg">
              Email Or password incorrect ! <Emoji label="weird" icon="🤷‍♀️" />
            </div>
          )}
          <div className="group-form">
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your email"
              id="email"
              value={email}
            />
          </div>
          <div className="group-form">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your password"
              id="password"
              value={password}
            />
          </div>

          <div className="confirm">
            {loading ? (
              <Loading />
            ) : (
              <motion.button variants={buttonVariants} whileTap="tap">
                Confirm
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.showLogin,
    authError: state.auth.authError,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLogin: (show) => dispatch(modalAction.showLogin(show)),
    login: (creds) => dispatch(authAction.login(creds)),
    onLoad: (status) => dispatch(loadingUIAction.onLoad(status)),
    clearError: () => dispatch(authAction.clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
