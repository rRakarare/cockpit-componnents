import { Button } from "@/components-v2/ui/button";
import { ProjectType } from "@/config-v2/project/project-type"
import { getLastMessage } from "@/lib-v2/formatters";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom"

function ProjectItem({id, icon, name, updatedAt, chats}: Pick<ProjectType, 'id' | 'icon' | 'name' | 'updatedAt'| 'chats'>) {

    const delta = getLastMessage(updatedAt);

  return (
    <Link
    to={`/projects/${id}`}
    className="chat-history-item group"
  >
    <div className="flex items-center space-x-3">
      <div>
      {icon}
      </div>
      <div>
        <p className="font-semibold mb-1">{name}</p>
        <p className="text-sm text-muted-foreground">{chats.length} Chats</p>
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