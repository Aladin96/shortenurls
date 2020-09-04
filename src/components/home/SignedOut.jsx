import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
// Redux Actions
import * as modalAction from "../../redux/actions/modalAction";
// utils
import { buttonVariants } from "../../utils/motion";
// Common
import Emoji from "../common/Emoji";

const SignedOut = (props) => {
  return (
    <>
      <div className="signed-out">
        <ul>
          <li>
            <motion.button
              className="sign-up"
              onClick={() => props.showSignUp(true)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign Up <Emoji label="paper" icon="📝" />
            </motion.button>
          </li>
          <li>
            <motion.button
              className="login"
              onClick={() => props.showLogin(true)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              I already have an account <Emoji label="strong" icon="💪" />
            </motion.button>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLogin: (show) => dispatch(modalAction.showLogin(show)),
    showSignUp: (show) => dispatch(modalAction.showSignUp(show)),
  };
};

export default connect(null, mapDispatchToProps)(SignedOut);
