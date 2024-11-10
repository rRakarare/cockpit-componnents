import { ProjectSimpleType } from "@/types/db/project";
import ProjectItem from "./project-item";
import { projectDetailsDummyData } from "@/types/example-data/project";
import { useSimulatedData } from "@/types/example-data/simulateDBCall";
import { LoadingDataIcon } from "@/components-v2/custom/unsorted/loader";

function ProjectList() {
  const projects = projectDetailsDummyData as ProjectSimpleType[];

  const { data, isLoading } = useSimulatedData(projects, { delay: 400 });

  if (isLoading) {
    return <LoadingDataIcon className="mx-auto" />;
  }

  return (
    <div className="container grid grid-cols-3 gap-4">
      {data?.map((project, i) => (
        <ProjectItem key={i} {...project} />
      ))}
    </div>
  );
}

export default ProjectList;
