import React, { useEffect } from "react";

import Navigation from "./navigation";
import Footer from "./footer";
import "../styles/style.scss";

/**
 * Shared site layout
 */
const Layout = (props) => {
  // Add class to body class list
  useEffect(() => {
    document.body.classList.add("has-navbar-fixed-top");
    return () => {
      document.body.classList.remove("has-navbar-fixed-top");
    };
  });

  return (
    <div id="home">
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
