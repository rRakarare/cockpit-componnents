import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { PageLink, pages } from "@/config/links";



const NavLink = ({ href, text, icon }: PageLink) => {
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
  return pages.filter(item => item.type === "directLink").map((item,i) => <NavLink key={i} {...item} />);
}

export default NavLinks;
