import { Book, Code, Layers, MessageSquare, NotepadText, Play } from "lucide-react";
import { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

type NavLink = {
  href: string;
  text: string;
  icon: ReactElement;
};

const navLinks: NavLink[] = [
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

const NavLink = ({ href, text, icon }: NavLink) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
            <Link to={href} className="hover:bg-accent p-3 rounded-lg">
                {icon}
            </Link>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={14} align="start" alignOffset={-2} className="bg-foreground text-background">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

function NavLinks() {
  return navLinks.map((item,i) => <NavLink key={i} {...item} />);
}

export default NavLinks;
