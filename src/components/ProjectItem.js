import React from "react";


function ProjectItem({ name, about, technologies }) {
 
//  const techList = technologies.map((technology) =>  (<span key={technology}>{technology}</span>)
//  )
//  console.log(techList)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies"><span>{technologies}</span></div>
    </div>
  );
}

export default ProjectItem;
