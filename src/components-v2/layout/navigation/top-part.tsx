import CockpitLogo from "@/components-v2/custom/unsorted/logo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components-v2/ui/tooltip";
import { cn } from "@/lib-v2/utils";
import { Sidebar, X } from "lucide-react";

type TopPartProps = {
  isHover?: boolean;
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function TopPart({ setIsOpen, isHover, isOpen }: TopPartProps) {
  return (
    <div
      id="top"
      className="border-b flex items-center shrink-0 px-3 w-full h-topbar relative"
    >
      <div className="">
        <CockpitLogo className="size-10" />
      </div>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "absolute right-3 p-2 cursor-pointer opacity-0 rounded-lg bg-background hover:bg-accent duration-150",
                (isHover || isOpen) && "opacity-100"
              )}
              onClick={() => setIsOpen((state) => !state)}
            >
              <Sidebar className="size-6 shrink-0 hidden md:inline" />
              <X className="size-6 shrink-0 md:hidden" />
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
