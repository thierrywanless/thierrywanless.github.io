import React from "react";
import footerStyles from "./footer.module.scss";

/**
 * Footer component
 */
const Footer = () => {
  return (
    <footer className={footerStyles.siteFooter}>
      <h3>Designed &amp; coded by Thierry Wanless</h3>
    </footer>
  );
};

export default Footer;
