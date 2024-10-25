import { dummyProjects } from "@/config-v2/project/project-type";
import ProjectItem from "./project-item";

function ProjectList() {
  const projects = dummyProjects;

  return (
    <div className="container grid grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <ProjectItem key={i} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
