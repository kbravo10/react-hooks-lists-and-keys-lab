import React from "react";

function ProjectItem({ name, about, technologies }) {
  const span = technologies.map((techs,index) =>{
    return <span key={index}>{techs }</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {span}
      </div>
    </div>
  );
}

export default ProjectItem;
