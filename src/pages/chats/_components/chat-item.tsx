import { Button } from "@/components/ui/button";
import { ChatType } from "@/config/chat/types";
import { getLastMessage } from "@/lib/formatters";
import { Trash } from "lucide-react";
import { Link } from "react-router-dom";

function ChatItem({ _id, title, updatedAt }: Partial<ChatType>) {
  const delta = getLastMessage(updatedAt);

  return (
    <Link
      to={`/chat/${_id}`}
      className="w-full border rounded-md p-4 flex justify-between items-center hover:bg-accent group"
    >
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">
          Letzte Nachricht {delta}
        </p>
      </div>

      <Button
        size={"icon"}
        variant={"outline"}
        className="opacity-0 group-hover:opacity-100"
      >
        <Trash className="size-4" />
      </Button>
    </Link>
  );
}

export default ChatItem;
