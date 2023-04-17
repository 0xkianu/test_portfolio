import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  wrapper: 'mb-6',
  listWrapper: 'flex',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-sm text-gray-600 font-light mb-6',
  image: 'w-10 max-w-10 transform transition-all duration-150 hover:scale-105',
  listItem: 'mr-6 flex items-start'
};

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Skills" className={classes.wrapper}>
      <h3 className={classes.name}>Languages & Frameworks</h3>
      <p className={classes.description}>
        <ul className={classes.listWrapper} >
          <li className={classes.listItem}>
            <div className='flex flex-col items-start'>
              <img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />JavaScript
            </div>
          </li>
          <li className={classes.listItem}>
            <div className='flex flex-col items-start'>
              <img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />Node.js
            </div>
          </li>
          <li className={classes.listItem}>
            <div className='flex flex-col items-start'>
              <img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />Express.js
            </div>
          </li>
        </ul>
      </p>
      <p className='text-sm text-gray-600 font-light mb-6'>
        <ul className={classes.listWrapper} >
          <li className={classes.listItem}>
            <div className='flex flex-col items-start text-sm'>
              <img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />React
            </div>
          </li>
          <li className={classes.listItem}>
            <div className='flex flex-col items-start text-sm'>
              <img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />HTML5
            </div>
          </li>
          <li className={classes.listItem}>
            <div className='flex flex-col items-start text-sm'>
              <img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />CSS3
            </div>
          </li>
        </ul>
      </p>
      <p className='text-sm text-gray-600 font-light mb-6'>
        <ul className={classes.listWrapper} >
          <li className={classes.listItem}>
            <div className='flex flex-col items-start text-sm'>
              <img className={classes.image} src="https://static.thenounproject.com/png/4484334-200.png" />SQL
            </div>
          </li>
          <li className={classes.listItem}>
            <div className='flex flex-col items-start text-sm'>
              <img className={classes.image} src="https://www.oracle.com/a/ocom/img/pl-sql.svg" />PL/SQL
            </div>
          </li>
          <li className={classes.listItem}>
            <div className='flex flex-col items-start text-sm'>
              <img className={classes.image} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />Sequelize
            </div>
          </li>
        </ul>
      </p>
    </Section>
  );
};

export default SectionSkills;
