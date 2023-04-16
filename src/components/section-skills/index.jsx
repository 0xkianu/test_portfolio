import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills" className={classes.wrapper}>
      <h3 className={classes.name}>Languages & Frameworks</h3>
      <p className={classes.description}>JavaScript (ES6+), Node.js, Express.js, React, HTML5, CSS, SQL, PL/SQL, Sequelize</p>
    </Section>
  );
};

export default SectionSkills;
