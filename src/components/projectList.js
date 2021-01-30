import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ProjectCard from "../components/projectCard";

const ProjectList = () => {
  const { images, data } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { dir: { regex: "//projects/" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        data: allDataYaml {
          edges {
            node {
              projects {
                projectTitle
                imageFilePath
                imageAlt
                technologies
                description
                liveUrl
                sourceUrl
                website
                wip
              }
            }
          }
        }
      }
    `
  );

  const populatedData = data.edges[0].node.projects.map((project) => {
    const imageEdge = images.edges.find(
      (edge) => edge.node.relativePath === project.imageFilePath
    );

    if (imageEdge) {
      return { ...project, imageFluid: imageEdge.node.childImageSharp.fluid };
    } else {
      throw new Error("Project image missing");
    }
  });

  return (
    <section id="projects" className="section is-medium has-text-centered">
      <div className="container">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
          Projects
        </h1>
        <div className="columns is-centered is-multiline">
          {populatedData.map((project, index) => (
            <div className="column is-two-fifths" key={index}>
              <ProjectCard
                projectTitle={project.projectTitle}
                imageFluid={project.imageFluid}
                imageAlt={project.imageAlt}
                technologies={project.technologies}
                description={project.description}
                liveUrl={project.liveUrl}
                sourceUrl={project.sourceUrl}
                website={project.website}
                wip={project.wip}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
