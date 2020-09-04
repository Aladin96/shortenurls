import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

// Redux Actions
import * as urlsAction from "../../redux/actions/urlsAction";
import * as loadingUIAction from "../../redux/actions/loadingUIAction";

// Utils
import { validURL } from "../../utils/validation";

//Layout
import Loading from "../layout/Loading";
import Logout from "../layout/Logout";

const SignedIn = ({ url, loading, onLoad, addUrl }) => {
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(null);

  const handleError = (shortUrl) => {
    if (validURL(shortUrl)) {
      setError(null);
      return null;
    }

    setError("Enter a valid Url and must be start with http://");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Check URL valdiation
    const errors = handleError(shortUrl);
    if (errors) return;

    onLoad(true);
    addUrl(shortUrl);
  };
  return (
    <div className="signed-in">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your Url here"
          onChange={(e) => setShortUrl(e.target.value)}
          value={shortUrl}
        />
        <div className="submit-url">
          <button>Shorten</button>
        </div>
      </form>

      {loading && <Loading backgroundColor="#fff" />}

      {url && !error && !loading && (
        <motion.div
          className="url"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span>Your url is ready: </span>
          <a href={`/${url}`} target="_blank">
            {`${window.location.host}/${url}`}
          </a>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="url url-error"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span>{error}</span>
        </motion.div>
      )}
      <Logout />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    url: state.url,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUrl: (url) => dispatch(urlsAction.addUrl(url)),
    onLoad: (status) => dispatch(loadingUIAction.onLoad(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
