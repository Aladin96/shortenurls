import React from "react";
// Common
import Emoji from "../common/Emoji";
//CSS
import "../../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        Developed With
        <Emoji label="heart" icon="💗" />
        by{" "}
        <a href="https://www.facebook.com/elmagnifico.dz" target="_blank">
          Alaaeddine
        </a>
      </p>
    </footer>
  );
};

export default Footer;
