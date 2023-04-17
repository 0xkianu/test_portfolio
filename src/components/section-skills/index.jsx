import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  wrapper: 'mb-6',
  listWrapper: 'block mb-6 md:flex',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  image: 'w-10 max-w-10 hover:scale-105'
};

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills" className={classes.wrapper}>
      <h3 className={classes.name}>Languages & Frameworks</h3>
      <p className={classes.description}>
        <ul className={classes.listWrapper} >
          <li><img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />JavaScript (ES6+)</li>
          <li><img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />Node.js</li>
          <li><img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />Express.js</li>
        </ul>
      </p>
      <p className={classes.description}>
        <ul className={classes.listWrapper} >
          <li>React</li>
          <li>HTML5</li>
          <li>CSS</li>
        </ul>
      </p>
    </Section>
  );
};

export default SectionSkills;
