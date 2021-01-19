import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import SkillCard from "../components/skillCard";
import SkillItem from "../components/skillItem";

const Skills = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { dir: { regex: "//images/technologies/" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const images = data.allFile.edges;

  return (
    <section id="skills" className="section has-text-centered">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
              Technical Skills
            </h1>
            <p className="subtitle is-size-6-desktop">
              I've worked with a wide variety of programming languages and
              frameworks. Whether it be mobile, web, backend or AI, flexibility
              is key.
            </p>
          </div>
        </div>
        <div className="container is-narrow">
          <div className="columns is-centered">
            <div className="column">
              <div className="container">
                <SkillCard title="JavaScript">
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "es6")}
                    skillName="ES6"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "angular")}
                    skillName="Angular"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "typescript")}
                    skillName="TypeScript"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "node")}
                    skillName="Node"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "react")}
                    skillName="React"
                  />
                </SkillCard>

                <SkillCard title="HTML">
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "html5")}
                    skillName="HTML5"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "jsx")}
                    skillName="JSX"
                  />
                </SkillCard>

                <SkillCard title="CSS">
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "css3")}
                    skillName="CSS3"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "bootstrap")}
                    skillName="Bootstrap"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "sass")}
                    skillName="Sass"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "bulma")}
                    skillName="Bulma"
                  />
                </SkillCard>

                <SkillCard title="Android">
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "java")}
                    skillName="Java"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "kotlin")}
                    skillName="Kotlin"
                  />
                </SkillCard>

                <SkillCard title="Backend">
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "php")}
                    skillName="PHP"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "laravel")}
                    skillName="Laravel"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "netCore")}
                    skillName=".Net Core"
                  />
                </SkillCard>

                <SkillCard title="Data">
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "mysql")}
                    skillName="MySQL"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "json")}
                    skillName="JSON"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "mongodb")}
                    skillName="MongoDB"
                  />
                </SkillCard>

                <SkillCard title="Tools">
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "github")}
                    skillName="Github"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "bitbucket")}
                    skillName="Bitbucket"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "aws")}
                    skillName="AWS"
                  />
                  <SkillItem
                    skillImageFluid={getImageFluid(images, "heroku")}
                    skillName="Heroku"
                  />
                </SkillCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gets fluid image from a list of image nodes
function getImageFluid(imageList, name) {
  const image = imageList.find((image) => image.node.name === name);

  return image.node.childImageSharp.fluid;
}

export default Skills;
