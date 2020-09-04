import React from "react";
import { connect } from "react-redux";
// Components
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import SignUp from "../signUp/SignUp";
import Login from "../login/Login";
// Layout
import Footer from "../layout/Footer";
import Alert from "../layout/Alert";
//Common
import Emoji from "../common/Emoji";
//css
import "../../css/home.css";

const Home = (props) => {
  return (
    <>
      <Alert />

      <div className="overly-bg"></div>

      <div className="container">
        <div className="wrapper home">
          <div className="img-home">
            <img src="/images/url.png" />
          </div>
          <div className="content-home">
            <h2>
              Shorten your Urls with one click, and make your life easy
              <Emoji label="smile" icon="😁" />
            </h2>
            {props.auth.uid ? <SignedIn /> : <SignedOut />}
          </div>
        </div>
      </div>
      <Footer />
      {!props.auth.uid && <Login />}
      {!props.auth.uid && <SignUp />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Home);
