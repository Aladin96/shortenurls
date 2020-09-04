import React from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
// Redux Actions
import * as alertActions from "../../redux/actions/alertActions";
// Common
import Emoji from "../common/Emoji";

const Alert = (props) => {
  const { message, alert, clearAlert } = props;

  if (alert) setTimeout(() => clearAlert(), 3500);

  return (
    <>
      <AnimatePresence>
        {alert && (
          <motion.div
            className="alert-success"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 200 }}
            exit={{ scale: 0, transition: { type: "tween" } }}
          >
            <Emoji label="confirm" icon="✅ " />
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert.status,
    message: state.alert.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAlert: () => dispatch(alertActions.clearAlert()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Alert);
