import { Button } from "@/components/ui/button";
import { ChatType } from "@/config/chat/types";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

function ChatItem({ _id, title, model, updatedAt }: Partial<ChatType>) {
  return (
    <Link
      to={`/chat/${_id}`}
      className="w-full border rounded-md p-4 flex justify-between items-center hover:bg-accent"
    >
      <div>
        <p className="font-semibold">{title}</p>
        <p>{updatedAt}</p>
      </div>

      <Button size={"icon"} variant={"outline"}>
        <EllipsisVertical className="size-6" />
      </Button>
    </Link>
  );
}

export default ChatItem;
