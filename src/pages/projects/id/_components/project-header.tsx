import { getIcon } from "@/config-v2/icons/icon-map";
import { ProjectDetailType } from "@/types/db/project";

function ProjectHeader({
  name,
  description,
  icon,
  color
}: Pick<ProjectDetailType, "name" | "icon" | "color" | "description">) {

  return (
    <div className="flex px-6 items-center space-x-3 border-b mb-8 py-4">
      <div className="p-3 rounded-lg" style={{background:color}}>{getIcon({iconName:icon})}</div>
      <div>
        <p className="font-semibold mb-1 text-2xl">{name}</p>
        <p className="text-muted-foreground text-md">{description}</p>
      </div>
    </div>
  );
}

export default ProjectHeader;
