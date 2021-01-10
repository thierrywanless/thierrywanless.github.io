import React from "react";
import { Link } from "gatsby";

import navStyles from "./Navigation.module.scss";

/**
 * Navigation component
 */
const Navigation = () => {
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navContainer}>
        <div className={navStyles.homeItem}>
          <Link to="/" className={navStyles.navItem}>
            Thierry Wanless
          </Link>
        </div>
        <ul className={navStyles.navList}>
          <Link
            to="/about"
            className={navStyles.navItem}
            activeClassName={navStyles.activeMenuItem}
          >
            about
          </Link>

          <Link
            to="/skills"
            className={navStyles.navItem}
            activeClassName={navStyles.activeMenuItem}
          >
            skills
          </Link>

          <Link
            to="/projects"
            className={navStyles.navItem}
            activeClassName={navStyles.activeMenuItem}
          >
            projects
          </Link>

          <Link
            to="/contact"
            className={navStyles.navItem}
            activeClassName={navStyles.activeMenuItem}
          >
            contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
