import { Button } from "@/components-v2/ui/button";
import { getIcon } from "@/config-v2/icons/icon-map";
import { getLastMessage } from "@/lib-v2/formatters";
import { ProjectSimpleType } from "@/types/db/project";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom"

function ProjectItem({project_uuid, icon, color, name, updated_at, chatCount}: ProjectSimpleType) {

    const delta = getLastMessage(updated_at);

  return (
    <Link
    to={`/projects/${project_uuid}`}
    className="chat-history-item group"
  >
    <div className="flex items-center space-x-3">
    <div className="p-2 rounded-lg" style={{background: color}}>
      {getIcon({iconName: icon})}
      </div>
      <div>
        <p className="font-semibold mb-1">{name}</p>
        <p className="text-sm text-muted-foreground">{chatCount} Chats</p>
        <p className="text-sm text-muted-foreground">
          Letzte Nachricht {delta}
        </p>
      </div>
    </div>

    <Button
      size={"icon"}
      variant={"outline"}
      className="opacity-0 group-hover:opacity-100"
    >
      <Trash className="size-4" />
    </Button>
  </Link>
  )
}

export default ProjectItem