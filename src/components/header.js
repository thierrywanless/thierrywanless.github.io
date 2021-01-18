import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Social from "../components/social";

/**
 * Header component
 */
const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  // In order of z index + to -
  const backgroundFluidImage = [
    `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))`,
    data.file.childImageSharp.fluid,
  ];

  return (
    <BackgroundImage
      Tag="section"
      className="hero is-fullheight-with-navbar has-text-centered hero-header"
      fluid={backgroundFluidImage}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
            Developer and Tech Enthusiast
          </h1>
          <h2 className="subtitle is-size-4-desktop">
            Love to Learn. Learn to Love
          </h2>
          <Social />
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Header;
