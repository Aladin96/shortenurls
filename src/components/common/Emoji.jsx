import React from "react";

const Emoji = (props) => {
  return (
    <span role="img" aria-label={props.label}>
      {props.icon}
    </span>
  );
};

export default Emoji;
