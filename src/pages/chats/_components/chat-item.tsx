import { Button } from "@/components/ui/button";
import { ChatType } from "@/config/chat/base-chat/types";
import { DataChatType } from "@/config/chat/data-chat/types";
import { ImageChatType } from "@/config/chat/image-chat/types";
import { getLastMessage } from "@/lib/formatters";
import { Layers, MessageSquare, Play, Trash } from "lucide-react";
import { Link } from "react-router-dom";

function ChatItem({
  _id,
  title,
  updatedAt,
  type,
}: Partial<ChatType | DataChatType | ImageChatType>) {
  const delta = getLastMessage(updatedAt);

  const href = (() => {
    switch (type) {
      case "chat":
        return `/chat/${_id}`;
      case "data-chat":
        return `/data-chat/${_id}`;
      case "image-chat":
        return `/media/${_id}`;
      default:
        return "/";
    }
  })();

  return (
    <Link
      to={href}
      className="w-full border rounded-md p-4 flex justify-between items-center hover:bg-accent group"
    >
      <div className="flex items-center space-x-3">
        <ChatIcon type={type} />
        <div>
          <p className="font-semibold">{title}</p>
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
  );
}

const ChatIcon = ({ type }: { type: string | undefined }) => {
  switch (type) {
    case "chat":
      return <MessageSquare className="size-4" />;
    case "data-chat":
      return <Layers className="size-4" />;
    case "image-chat":
      return <Play className="size-4" />;
    default:
      return null;
  }
};

export default ChatItem;
