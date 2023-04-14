import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

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
        <a href="../../images/{project.screen1}"><img src="../../images/{project.screen1}" /></a>
        <a href="../../images/{project.screen2}"><img src="../../images/{project.screen2}" /></a>
        <a href="../../images/{project.screen3}"><img src="../../images/{project.screen3}" /></a>
        </div>
      ))}
    </Section>
  );
};

export default SectionProjects;
