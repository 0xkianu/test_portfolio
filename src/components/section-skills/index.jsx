import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  image: 'w-full max-w-150 hover:scale-105'
};

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills" className={classes.wrapper}>
      <h3 className={classes.name}>Languages & Frameworks</h3>
      <p className={classes.description}>
        <ul>
          <li><img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
JavaScript (ES6+)</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>PL/SQL</li>
          <li>Sequelize</li>
        </ul>
      </p>
    </Section>
  );
};

export default SectionSkills;
