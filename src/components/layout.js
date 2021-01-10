import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import "../styles/style.scss";
import layoutStyles from "./layout.module.scss";

/**
 * Shared site layout
 */
const Layout = (props) => {
  return (
    <div className={layoutStyles.siteContainer}>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
