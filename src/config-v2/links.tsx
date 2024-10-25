import { ReactElement } from "react";
import {
  Book,
  History,
} from "lucide-react";
import { ChatIcon } from "@/components-v2/custom/chat/chat-icon";

export type link_type = {
  href: string;
  text: string;
  icon: ReactElement;
  isOpenNav?: boolean;
  state?: object;
};

export const directLinks: link_type[] = [
  {
    href: "/chat",
    text: "Chat",
    icon: <ChatIcon className="size-6 shrink-0" type="chat" />,
    state: {reset: true}
  },
  {
    href: "/data-chat",
    text: "Data-Chat",
    icon: <ChatIcon className="size-6 shrink-0" type="data-chat" />,
  },
  {
    href: "/projects",
    text: "Projekte",
    icon: <ChatIcon className="size-6 shrink-0" type="project" />,
  },
  {
    href: "/prompt",
    text: "Prompt Bibliothek",
    icon: <Book className="size-6 shrink-0" />,
  },
  {
    href: "/media",
    text: "Studio",
    icon: <ChatIcon className="size-6 shrink-0" type="image-chat" />,
  },
  {
    href: "/chats",
    text: "Verlauf",
    icon: <History className="size-6 shrink-0" />,
  },

];

export const allLinks: link_type[] = [...directLinks];
