import { useParams } from "react-router-dom";
import ProjectHeader from "./_components/project-header";
import ProjectDetails from "./_components/project-details";
import ProjectBreadcrumbDetail from "./_components/project-breadcrumb-detail";
import { projectDetailsDummyData } from "@/types/example-data/project";
import { ProjectDetailType } from "@/types/db/project";

function Page() {
  const { id } = useParams<{ id: string }>();

  const {
    name,
    description,
    icon,
    color,
    chats,
    current_knowledge_usage,
    custom_instruction,
    contents,


    users,
  } = projectDetailsDummyData.find((p) => p.project_uuid === id) as ProjectDetailType;

  return (
    <div>
      <ProjectBreadcrumbDetail name={name} />
      <ProjectHeader name={name} description={description} icon={icon} color={color} />
      <ProjectDetails
        chats={chats}
        custom_instruction={custom_instruction}
        contents={contents}
        current_knowledge_usage={current_knowledge_usage}
        users={users}
      />
    </div>
  );
}

export default Page;
