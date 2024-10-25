import { dummyProjects, ProjectType } from "@/config-v2/project/project-type";
import { useParams } from "react-router-dom";
import ProjectHeader from "./_components/project-header";
import ProjectDetails from "./_components/project-details";

function Page() {
  const { id } = useParams<{ id: string }>();

  const {name, description, icon, chats, context, sources} = dummyProjects.find((p) => p.id === id) as ProjectType;


return  <div className="my-topbar space-y-8">
    <ProjectHeader name={name} description={description} icon={icon} />
    <ProjectDetails chats={chats} context={context} sources={sources} />
  </div>;
}

export default Page;
