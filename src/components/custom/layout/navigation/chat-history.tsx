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

const ChatItem = ({ title }: { title: string }) => {
  return <div className="whitespace-nowrap text-ellipsis overflow-hidden text-sm hover:bg-accent-deep p-1 rounded-lg cursor-pointer">{title}</div>;
};

function ChatHistory({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={cn("flex flex-col px-2 pb-4 ", isOpen && "border-b")}>
      <div className={cn("grid grid-rows-[0fr] transition-all", isOpen && "grid-rows-[1fr]")}>
      <div className={cn("flex flex-col overflow-hidden")}>
      {reventChats.map((chat, index) => (
        <ChatItem key={index} title={chat.title} />
      ))}
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
