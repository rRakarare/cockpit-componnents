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
import { EllipsisVertical, History } from "lucide-react";
import { Link } from "react-router-dom";

const history = [
  {
    id: 1,
    title: "Chat with John Doe",
  },
  {
    id: 2,
    title: "Meeting with Team asdasd asddasda asdasd",
  },
  {
    id: 3,
    title: "Discussion on Project",
  },
  {
    id: 4,
    title: "Planning for Launch",
  },
  {
    id: 5,
    title: "Brainstorming Session",
  },
];

const ChatMessage = ({ title }) => {
  return (
    <div className="hover:bg-accent p-1 px-2 rounded-lg flex items-center space-x-2">
      <p className="w-48 whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </p>
      <Popover>
        <PopoverTrigger>
            <EllipsisVertical className="size-4" />
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
};

function ChatHistory() {
  return (
    <Popover>
      <PopoverTrigger>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="hover:bg-accent p-3 rounded-lg">
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
        {history.map((item) => (
          <ChatMessage key={item.id} {...item} />
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
