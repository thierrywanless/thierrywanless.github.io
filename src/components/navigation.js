import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

/**
 * Navigation component
 */
const Navigation = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <AnchorLink to="/#home" className="navbar-item" title="home">
            Thierry Wanless
          </AnchorLink>
          <a
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="#navMenu"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navMenu"
          // className={navStyles.navbarMenu}
          className={`navbar-menu testing  ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <AnchorLink to="/#about" className="navbar-item" title="about">
              about
            </AnchorLink>

            <AnchorLink to="/#skills" className="navbar-item" title="skills">
              skills
            </AnchorLink>

            <AnchorLink
              to="/#projects"
              className="navbar-item"
              title="projects"
            >
              projects
            </AnchorLink>

            <AnchorLink to="/#contact" className="navbar-item" title="contact">
              contact
            </AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
