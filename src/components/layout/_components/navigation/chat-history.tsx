import { ChatIcon } from "@/components/custom/chat/chat-icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { chats } from "@/config/chat/base-chat/example-data";
import { ChatType } from "@/config/chat/base-chat/types";
import { dataChats } from "@/config/chat/data-chat/example-data";
import { DataChatType } from "@/config/chat/data-chat/types";
import { getChatHref } from "@/config/chat/get-chat-href";
import { imageChats } from "@/config/chat/image-chat/example-data";
import { ImageChatType } from "@/config/chat/image-chat/types";
import { cn } from "@/lib/utils";
import { History } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


const ChatMessage = ({
  _id,
  title,
  type
}: Partial<ChatType | DataChatType | ImageChatType>) => {

  const href = getChatHref({ type, _id });

  return (
    <Link to={href} className="hover:bg-accent p-1 px-2 rounded-lg flex items-center justify-center space-x-2">
      <ChatIcon type={type} />
      <p className="w-48 whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </p>
    </Link>
  );
};

function ChatHistory() {

  const {pathname} = useLocation();

  const allChatItems = [...chats, ...dataChats, ...imageChats]
  const sortedChatItems = [...allChatItems]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <Popover>
      <PopoverTrigger>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={cn("hover:bg-accent p-2 rounded-lg border-2 border-transparent", pathname === "/chats" && "border-foreground")}>
                <History className="size-6 " />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              sideOffset={14}
              align="center"
              className="bg-foreground text-background"
            >
              <p>History</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        align="start"
        avoidCollisions={false}
        sideOffset={13}
        className="max-w-fit flex flex-col space-y-2 px-2 py-0 pb-2"
      >
        <div className="border-b px-4 py-3 -mx-2 font-bold">Chatverlauf</div>
        {sortedChatItems.map((item) => (
          <ChatMessage key={item._id} {...item} />
        ))}
        <div className="border-t -mx-2">
            <Link to="/chats" className="hover:bg-accent p-1 px-2 mx-2 mt-2 rounded-lg flex">
                Alle Chats
            </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ChatHistory;
