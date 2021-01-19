import React from "react";
import Image from "gatsby-image";
import PropTypes from "prop-types";

/**
 *  Skill Item component - used a direct child of <SkillCard>
 *
 * @param {GatsbyImageSharpFluid} skillImageFluid - Skill image fluid
 * @param {string} skillName - Skill name
 */
const SkillItem = ({ skillImageFluid, skillName }) => {
  return (
    <>
      <div className="column is-one-third-mobile is-2-tablet is-flex is-flex-direction-column">
        <Image
          fluid={skillImageFluid}
          className="skill-image"
          imgStyle={{ objectFit: "contain" }}
        />
        <p>{skillName}</p>
      </div>
    </>
  );
};

SkillItem.propTypes = {
  skillImageFluid: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillItem;
