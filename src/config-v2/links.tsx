import { ReactElement } from "react";
import {
  Book,
  History,
} from "lucide-react";
import { ChatIcon } from "@/components-v2/custom/chat/chat-icon";


export interface linkType {
  href: string;
  text: string;
  icon?: ReactElement;
  state?: object;
}


export const hrefMap = {
  start: {
    href: "/",
    text: "Start",
  },
  login: {
    href: "/login",
    text: "Login",
  },
  chat: {
    href: "/chat",
    text: "Chat",
    icon: <ChatIcon className="size-6 shrink-0" type="chat" />,
  },
  dataSilo: {
    href: "/data-chat",
    text: "Data-Chat",
    icon: <ChatIcon className="size-6 shrink-0" type="data-chat" />,
  },
  project: {
    href: "/projects",
    text: "Projekte",
    icon: <ChatIcon className="size-6 shrink-0" type="project" />,
  },
  prompt: {
    href: "/prompt",
    text: "Bibliothek",
    icon: <Book className="size-6 shrink-0" />,
  },
  media: {
    href: "/media",
    text: "Studio",
    icon: <ChatIcon className="size-6 shrink-0" type="image-chat" />,
  },
  history: {
    href: "/history",
    text: "Verlauf",
    icon: <History className="size-6 shrink-0" />,
  },
};


export const navLinks: linkType[] = [
  hrefMap.chat,
  hrefMap.dataSilo,
  hrefMap.project,
  hrefMap.prompt,
  hrefMap.media,
  hrefMap.history,
]
