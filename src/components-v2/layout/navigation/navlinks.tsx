import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components-v2/ui/tooltip";
import { Link, useLocation } from "react-router-dom";
import { directLinks, link_type } from "@/config-v2/links";
import { cn } from "@/lib-v2/utils";
import { useState } from "react";



const NavLink = ({ href, text, icon, isOpenNav, state }: link_type) => {

  const [openTooltip, setOpenTooltip] = useState(false);

  const {pathname} = useLocation();

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={!isOpenNav && openTooltip} onOpenChange={!isOpenNav ? setOpenTooltip : () => {}}>
        <TooltipTrigger asChild>
            <Link to={href} state={state} className={cn("hover:bg-accent p-2 rounded-lg border-2 border-transparent flex shrink-0 space-x-4 whitespace-nowrap overflow-hidden", pathname === href && "border-foreground")}>
                {icon}
                {<span className="ml-2">{text}</span>}
            </Link>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={14} align="start" alignOffset={-2} className="bg-foreground text-background">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

function NavLinks({isOpenNav}: {isOpenNav: boolean}) {


  return directLinks.map((item,i) => <NavLink key={i} {...item} isOpenNav={isOpenNav} />);
}

export default NavLinks;
