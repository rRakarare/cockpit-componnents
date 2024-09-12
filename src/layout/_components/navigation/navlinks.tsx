import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { directLinks, link_type } from "@/config/links";
import { cn } from "@/lib/utils";



const NavLink = ({ href, text, icon }: link_type) => {

  const {pathname} = useLocation();

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
            <Link to={href} className={cn("hover:bg-accent p-2 rounded-lg border-2 border-transparent", pathname === href && "border-foreground")}>
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


  return directLinks.map((item,i) => <NavLink key={i} {...item} />);
}

export default NavLinks;
