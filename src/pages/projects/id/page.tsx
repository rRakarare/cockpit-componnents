import { dummyProjects, ProjectType } from "@/config-v2/project/project-type";
import { useParams } from "react-router-dom";
import ProjectHeader from "./_components/project-header";
import ProjectDetails from "./_components/project-details";
import ProjectBreadcrumb from "./_components/project-breadcrumb";

function Page() {
  const { id } = useParams<{ id: string }>();

  const {name, description, icon, chats, context, sources, currentSize, users} = dummyProjects.find((p) => p.id === id) as ProjectType;


return  <div className="">
    <ProjectBreadcrumb />
    <ProjectHeader name={name} description={description} icon={icon} />
    <ProjectDetails chats={chats} context={context} sources={sources} currentSize={currentSize} users={users} />
  </div>;
}

export default Page;
