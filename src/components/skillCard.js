import React from "react";
import PropTypes from "prop-types";

/**
 * Skill Card component - used to hold <SkillItem> components
 *
 * @param {string} title - Card title
 * @param {SkillItem[]} children - <SkillItem> children
 */
const SkillCard = ({ title, children }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="columns is-multiline is-mobile">{children}</div>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SkillCard;
