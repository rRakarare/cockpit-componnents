import { ProjectType } from "@/config-v2/project/project-type";

function ProjectHeader({
  name,
  description,
  icon,
}: Pick<ProjectType, "name" | "icon" | "description">) {

  return (
    <div className="flex px-6 items-center space-x-3 border-b mb-8 py-4">
      <div className="bg-accent p-3 rounded-lg">{icon}</div>
      <div>
        <p className="font-semibold mb-1 text-2xl">{name}</p>
        <p className="text-muted-foreground text-md">{description}</p>
      </div>
    </div>
  );
}

export default ProjectHeader;
