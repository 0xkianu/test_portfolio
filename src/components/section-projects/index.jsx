import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  imageWrapper: 'w-150 max-w-150',
  image: 'transform transition-all duration-150 hover:scale-105',
  list: 'mt-6 uppercase tracking-wider',
};

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <div>
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          github={project.github}
          githubBack={project.githubBack}
        />
        <ul className={classes.list}>
          <li><a href={project.screen1}><img className={classes.image} src={project.screen1} /></a></li>
          <li><a href={project.screen2}><img className={classes.image} src={project.screen2} /></a></li>
          <li><a href={project.screen3}><img className={classes.image} src={project.screen3} /></a></li>
        </ul>
        </div>
      ))}
    </Section>
  );
};

export default SectionProjects;
