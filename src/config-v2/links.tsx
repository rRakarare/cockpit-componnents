import { ReactElement } from "react";
import {
  Book,
  Code,
  History,
  Layers,
  MessageSquare,
  NotepadText,
  Play,
} from "lucide-react";

export type link_type = {
  href: string;
  text: string;
  icon: ReactElement;
};

export const directLinks: link_type[] = [
  {
    href: "/chat",
    text: "Chat",
    icon: <MessageSquare className="size-6" />,
  },
  {
    href: "/data-chat",
    text: "Data-Chat",
    icon: <Layers className="size-6" />,
  },
  {
    href: "/projects",
    text: "Projekte",
    icon: <NotepadText className="size-6" />,
  },
  {
    href: "/library",
    text: "Bibliothek",
    icon: <Book className="size-6" />,
  },
  {
    href: "/media",
    text: "Studio",
    icon: <Play className="size-6" />,
  },
  {
    href: "/assistants",
    text: "Assistenten",
    icon: <Code className="size-6" />,
  },
];

export const subLinks: link_type[] = [
  {
    href: "/chats",
    text: "Alle Chats",
    icon: <History className="size-6" />,
  },
];

export const allLinks: link_type[] = [...directLinks, ...subLinks];
