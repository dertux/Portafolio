import React from 'react';
import projectsData from '../../data/proyectos.json';

import { ProjectCard } from "./ProjectCard";
import styles from './Projects.module.css'; // Asegúrate de que el archivo CSS esté correctamente importado.

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projects}>
        {projectsData.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
