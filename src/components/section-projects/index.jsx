import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const classes = {
  rowWrapper: 'flex flex-row mb-8',
  imageWrapper: 'w-150 max-w-150 mr-2',
  image: 'transform transition-all duration-150 hover:scale-105 border border-slate-300 hover:border-slate-400',
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
            technologies={project.technologies}
            demo={project.demo}
          />
          <div className={classes.rowWrapper}>
            <div className={classes.imageWrapper}>
              <a href={project.screen1} target="_blank"><img className={classes.image} src={project.screen1} /></a>
            </div>
            <div className={classes.imageWrapper}>
              <a href={project.screen2} target="_blank"><img className={classes.image} src={project.screen2} /></a>
            </div>
            <div className={classes.imageWrapper}>
              <a href={project.screen3} target="_blank"><img className={classes.image} src={project.screen3} /></a>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default SectionProjects;
