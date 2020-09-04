import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

//Redux Actions
import * as modalAction from "../../redux/actions/modalAction";
import * as authAction from "../../redux/actions/authAction";
import * as loadingUIAction from "../../redux/actions/loadingUIAction";

//Utils
import { validateEmail, isMatching } from "../../utils/validation";
import { modalCardVariants, buttonVariants } from "../../utils/motion";
//Layout
import Loading from "../layout/Loading";
//Common
import Emoji from "../common/Emoji";
//css
import "../../css/modal.css";

const SignUp = (props) => {
  const {
    show,
    showSignUp,
    signUp,
    authError,
    clearError,
    onLoad,
    loading,
  } = props;

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const newData = e.target.id;
    const dataValue = e.target.value;

    setData({ ...data, [newData]: dataValue });
    handleError(dataValue, newData);
  };

  const handleError = (dataValue, newData) => {
    console.log(dataValue);
    if (
      dataValue.length < 6 &&
      newData !== "email" &&
      newData !== "rePassword"
    ) {
      // Check firstName, LastName and Password Length
      setError(newData + " Must be at least 6 chara");
    } else if (newData === "email" && !validateEmail(dataValue)) {
      // Check if email is correct
      setError("Type valide email !");
    } else if (
      //Check confirm password Match Password
      newData === "rePassword" &&
      !isMatching(data.password, dataValue)
    ) {
      setError("Password not Matching !");
    } else {
      // clear errors
      setError(null);
    }
  };

  const handleErrorOnSubmit = () => {
    if (
      data.firstName.length < 6 ||
      data.lastName.length < 6 ||
      data.password.length < 6
    )
      setError("FirstName, lastName and password must be at least 6 chara");
    else if (!validateEmail(data.email))
      // Check if email is correct
      setError("Type valide email !");
    else if (!isMatching(data.password, data.rePassword)) {
      //Check confirm password Match Password
      setError("Password not Matching !");
    } else {
      // clear errors
      setError(null);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check Errors
    const errors = handleErrorOnSubmit();
    if (errors) return null;
    onLoad(true);
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    onLoad(true);

    signUp(newUser);
  };
  return (
    <>
      <div className={show ? "modal signUp" : "modal signUp hide"}>
        <div
          className="overly"
          onClick={() => {
            showSignUp(false);
            clearError();
            setError(null);
          }}
        ></div>
        <motion.div
          animate={show ? "open" : "closed"}
          variants={modalCardVariants}
          className="card"
        >
          <h2>
            Sign up <Emoji label="paper" icon="📝" />
          </h2>
          <div
            className="close"
            onClick={() => {
              showSignUp(false);
              clearError();
              setError(null);
            }}
          >
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="error-msg">
                {error} <Emoji label="weird" icon="🤷‍♀️" />
              </div>
            )}
            {authError && (
              <div className="error-msg">
                The email was used by another account{" "}
                <Emoji label="weird" icon="🤷‍♀️" />
              </div>
            )}
            <div className="group-form">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                placeholder="Your first name"
                id="firstName"
                onChange={handleChange}
                value={data.firstName}
              />
            </div>
            <div className="group-form">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                placeholder="Your last name"
                id="lastName"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>

            <div className="group-form">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>

            <div className="group-form">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                value={data.password}
              />
            </div>

            <div className="group-form">
              <label htmlFor="rePassword">confrim Password:</label>
              <input
                type="password"
                placeholder="Retype your Password"
                id="rePassword"
                onChange={handleChange}
                value={data.rePassword}
              />
            </div>
            <div className="confirm">
              {loading ? (
                <Loading backgroundColor="#8BC34A" />
              ) : (
                <motion.button variants={buttonVariants} whileTap="tap">
                  Confirm
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    show: state.modal.showSignUp,
    authError: state.auth.authError,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSignUp: (show) => dispatch(modalAction.showSignUp(show)),
    signUp: (newUser) => dispatch(authAction.signUp(newUser)),
    clearError: () => dispatch(authAction.clearError()),
    onLoad: (status) => dispatch(loadingUIAction.onLoad(status)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
