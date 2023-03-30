import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false, github = false, githubBack = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
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
      {github && <p className={classes.description}><a href={github} target="_blank" className='hover:underline'>front-end github</a></p>}
      {githubBack && <p className={classes.description}><a href={githubBack} target="_blank" className='hover:underline'>back-end github</a></p>}
    </div>
  );
};

export default SummaryItem;
