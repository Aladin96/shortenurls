import React from "react";
import { connect } from "react-redux";

import "../../../css/navbar.css";
import SignedIn from "./SignedIn";
const Navbar = (props) => {
  return (
    <nav>
      <div className="brand">ShortUrl</div>
      {props.auth && <SignedIn />}
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Navbar);
