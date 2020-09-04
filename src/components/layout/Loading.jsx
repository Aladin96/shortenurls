import React from "react";

const Loading = ({ backgroundColor }) => {
  return (
    <div className="load-3">
      <div className="line" style={{ backgroundColor }}></div>
      <div className="line" style={{ backgroundColor }}></div>
      <div className="line" style={{ backgroundColor }}></div>
    </div>
  );
};

export default Loading;
