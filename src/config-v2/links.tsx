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
};

export const directLinks: link_type[] = [
  {
    href: "/chat",
    text: "Chat",
    icon: <ChatIcon className="size-6" type="chat" />,
  },
  {
    href: "/data-chat",
    text: "Data-Chat",
    icon: <ChatIcon className="size-6" type="data-chat" />,
  },
  {
    href: "/media",
    text: "Studio",
    icon: <ChatIcon className="size-6" type="image-chat" />,
  },
  // {
  //   href: "/projects",
  //   text: "Projekte",
  //   icon: <NotepadText className="size-6" />,
  // },
  {
    href: "/prompt",
    text: "Prompt Bibliothek",
    icon: <Book className="size-6" />,
  },

  // {
  //   href: "/assistants",
  //   text: "Assistenten",
  //   icon: <Code className="size-6" />,
  // },
];

export const subLinks: link_type[] = [
  {
    href: "/chats",
    text: "Alle Chats",
    icon: <History className="size-6" />,
  },
];

export const allLinks: link_type[] = [...directLinks, ...subLinks];
