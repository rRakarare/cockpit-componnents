import { ClockArrowUp } from "lucide-react";
import { SimpleNavItem } from "./nav-links";
import { cn } from "@/lib/utils";

const reventChats = [
  {
    title: "Businessplan erstellen",
  },
  {
    title: "Recherche Datenschutz",
  },
  {
    title: "Sprint Planning nächste Woche",
  },
  {
    title: "Brainstorming für neue Werbung",
  },
  {
    title: "Unterschied zwischen Produkt asd qwe qwe qw eqw eqw ew e",
  },
];

const ChatItem = ({ title, isOpen }: { title: string; isOpen: boolean, index?:number }) => {


  return (
    <div
      className={cn(
        "whitespace-nowrap text-ellipsis overflow-hidden text-sm hover:bg-accent-deep p-2 rounded-lg cursor-pointer opacity-0 transition-transform -translate-x-28 duration-500",
        isOpen && "opacity-100 translate-x-0 ",
      )}
    >
      {title}
    </div>
  );
};

function ChatHistory({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={cn("flex flex-col px-2 pb-4 ", isOpen && "border-b")}>
      <div
        className={cn(
          "grid grid-rows-[0fr] transition-all duration-300 relative",
          isOpen && "grid-rows-[1fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className={cn(" flex flex-col ")}>
            {reventChats.map((chat, index) => (
              <ChatItem key={index} index={index} title={chat.title} isOpen={isOpen} />
            ))}
          </div>
        </div>
      </div>
      <SimpleNavItem
        isOpen={isOpen}
        navItem={{
          icon: <ClockArrowUp className="size-5 shrink-0" />,
          link: "/allChats",
          title: "Alle chats",
        }}
      />
    </div>
  );
}

export default ChatHistory;
