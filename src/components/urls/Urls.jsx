import React from "react";
import { connect } from "react-redux";

// Redux Actions
import * as urlsAction from "../../redux/actions/urlsAction";

import Loading from "../layout/Loading";
const Urls = (props) => {
  const { url, redirect } = props;
  redirect(props.match.params.id);
  if (url) setTimeout(() => (window.location = url), 2000);
  return (
    <div className="redirect">
      <div>
        <p>You will be redirect to</p>
        {url && <code>{url}</code>}
        {!url && <Loading />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    url: state.url,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    redirect: (urlID) => dispatch(urlsAction.redirect(urlID)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Urls);
