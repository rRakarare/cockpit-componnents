import { Button } from "@/components-v2/ui/button";
import { getIcon } from "@/config-v2/icons/icon-map";
import { hrefMap } from "@/config-v2/links";
import { getLastMessage } from "@/lib-v2/formatters";
import { PromptSimpleType } from "@/types/db/prompt";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom"

function PromptItem({chatCount, prompt_uuid, color, icon, name, updated_at}: PromptSimpleType) {

    const delta = getLastMessage(updated_at);

  return (
    <Link
    to={`${hrefMap.prompt.href}/${prompt_uuid}`}
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

export default PromptItem