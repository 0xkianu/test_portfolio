import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false, github = false, technologies = false, demo = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link} target="_blank">{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
      <p className={classes.description}>Technologies: {technologies}</p>
      
      {github && <a href={github} target="_blank" className='hover:underline classes.description'>Github</a>}
      {demo && <span>&emsp;<a href={demo} target="_blank" className='hover:underline classes.description'>demo video</a></span>}
      
    </div>
  );
};

export default SummaryItem;
