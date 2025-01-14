import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
 const projectElements = projects.map((project) => (
  <ProjectItem 
    key={project.id}
    name={project.name}
    about={project.about}
    technologies={project.technologies}
    />
 ));
 console.log(projectElements)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {/* {pList} */}
       {projectElements}
     
      {/* <ProjectItem  key={projects[0].id} name={projects[0].name} about={projects[0].about} technologies={projects[0].technologies}/>
      <ProjectItem  key={projects[1].id} name={projects[1].name} about={projects[1].about} technologies={projects[1].technologies}/>
      <ProjectItem  key={projects[2].id} name={projects[2].name} about={projects[2].about} technologies={projects[2].technologies}/>
       */}
       {/* <ProjectItem /> */}
      </div>
    </div>
  );
}

export default ProjectList;
