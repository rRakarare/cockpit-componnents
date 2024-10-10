import CockpitLogo from "@/components-v2/custom/unsorted/logo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components-v2/ui/tooltip";
import { cn } from "@/lib-v2/utils";
import { Sidebar } from "lucide-react";
import { Link } from "react-router-dom";

type TopPartProps = {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function TopPart({ setIsOpen, isOpen }: TopPartProps) {
  return (
    <div
      id="top"
      className="border-b flex items-center justify-between shrink-0 px-3 w-full h-topbar relative"
    >
      <Link to={"/"} className="">
        <CockpitLogo className="size-10" />
      </Link>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>

              <div className={cn("hover:bg-accent p-2 rounded-lg border-2 border-transparent cursor-pointer", !isOpen && "opacity-0")} onClick={() => setIsOpen((state) => !state)}>
              <Sidebar className="size-6 shrink-0"  />
              </div>

   
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={18}
            align="start"
            alignOffset={2}
            className="bg-foreground text-background"
          >
            <p>Toggle Sidebar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default TopPart;
