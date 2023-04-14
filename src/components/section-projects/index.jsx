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
        <a href="https://sendpulse.com/blog/wp-content/uploads/2020/10/taking-screenshots-fb.png"><img src="https://sendpulse.com/blog/wp-content/uploads/2020/10/taking-screenshots-fb.png" /></a>
        <a href={project.screen2}><img src={project.screen2} /></a>
        <a href={project.screen3}><img src={project.screen3} /></a>
        </div>
      ))}
    </Section>
  );
};

export default SectionProjects;
