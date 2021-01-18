import React from "react";

import Social from "./social";

/**
 * Footer component
 */
const Footer = () => {
  return (
    <footer className="footer has-text-centered">
      <Social id="contact" />

      <h3>Designed &amp; coded by Thierry Wanless</h3>
    </footer>
  );
};

export default Footer;
