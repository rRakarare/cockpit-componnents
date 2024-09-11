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

export type PageLink = {
  href: string;
  text: string;
  type: 'directLink' | 'subLink';
  icon?: ReactElement;
};

export const pages: PageLink[] = [
  {
    href: "/chat",
    text: "Chat",
    type: 'directLink',
    icon: <MessageSquare className="size-6" />,
  },
  {
    href: "/data-chat",
    text: "Data-Chat",
    type: 'directLink',
    icon: <Layers className="size-6" />,
  },
  {
    href: "/projects",
    text: "Projekte",
    type: 'directLink',
    icon: <NotepadText className="size-6" />,
  },
  {
    href: "/library",
    text: "Bibliothek",
    type: 'directLink',
    icon: <Book className="size-6" />,
  },
  {
    href: "/media",
    text: "Studio",
    type: 'directLink',
    icon: <Play className="size-6" />,
  },
  {
    href: "/assistants",
    text: "Assistenten",
    type: 'directLink',
    icon: <Code className="size-6" />,
  },
  {
    href: "/chats",
    text: "Alle Chats",
    type: 'subLink',
    icon: <History className="size-6" />,
  },
];
