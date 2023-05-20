import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const project = projects.map((projectObj) =>{
    return <ProjectItem key={projectObj.id} name={projectObj.name} about={projectObj.anout} technologies={projectObj.technologies} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {project}
      </div>
    </div>
  );
}

export default ProjectList;
