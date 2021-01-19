import React from "react";
import Image from "gatsby-image";

/**
 * Project Card Component - Displays an individual project
 *
 * @param {string} projectTitle - project title
 * @param {GatsbyImageSharpFluid} imageFluid - project header image
 * @param {string} imageAlt - header image alt text
 * @param {string} technologies - list of technologies
 * @param {string} description - description of the project
 * @param {string?} liveUrl - url for the live version (nullable)
 * @param {string?} sourceUrl - url for the source (nullable)
 * @param {boolean} wip - work in progress
 */
const ProjectCard = ({
  projectTitle,
  imageFluid,
  imageAlt,
  technologies,
  description,
  liveUrl,
  sourceUrl,
  wip,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Image fluid={imageFluid} alt={imageAlt ?? "Project image"} />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="title is-4">{projectTitle}</h4>
        <h4 className="subtitle is-6 project-technologies">{technologies}</h4>

        <p>{description}</p>
      </div>
      <footer className="card-footer">
        {wip && (
          <span className="card-footer-item icon-text">
            <span className="icon">
              <i className="fas fa-cogs fa-lg"></i>
            </span>
            <span>WIP</span>
          </span>
        )}

        {liveUrl && (
          <a
            className="card-footer-item"
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-text">
              <span className="icon">
                <i className="far fa-eye fa-lg"></i>
              </span>
              <span>Preview</span>
            </span>
          </a>
        )}

        {sourceUrl ? (
          <a
            className="card-footer-item"
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-code-branch fa-lg"></i>
              </span>
              <span>Source</span>
            </span>
          </a>
        ) : (
          <span className="card-footer-item icon-text">
            <span className="icon">
              <i className="fas fa-code-branch fa-lg"></i>
            </span>
            <span>Source private</span>
          </span>
        )}
      </footer>
    </div>
  );
};

export default ProjectCard;
