import React from "react";

/**
 * Social Icons component
 */
const Social = (props) => {
  const { id } = props;

  return (
    <div id={id ? id : null} className="container social-icons">
      <a
        href="https://www.linkedin.com/in/thierry-wanless/"
        rel="noreferrer"
        target="_blank"
        className="button is-medium is-circle is-outlined"
      >
        <span className="icon">
          <i className="fab fa-linkedin-in fa-lg"></i>
        </span>
      </a>
      <a
        href="https://github.com/thierrywanless"
        rel="noreferrer"
        target="_blank"
        className="button is-medium is-circle is-outlined"
      >
        <span className="icon">
          <i className="fab fa-github fa-lg"></i>
        </span>
      </a>
      <a
        href="mailto:thierrywanless@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="button is-medium is-circle is-outlined"
      >
        <span className="icon">
          <i className="far fa-envelope fa-lg"></i>
        </span>
      </a>
    </div>
  );
};

export default Social;
