import React from 'react';
import PropTypes from 'prop-types';

import './Section.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className="feedback__title">{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
