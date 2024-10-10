import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components-v2/ui/tooltip";
import { Sidebar } from "lucide-react";

function ToggleNavbar({setIsOpen}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <div className="cursor-pointer hover:bg-accent p-2 rounded-lg border-2 border-transparent" onClick={()=>setIsOpen(state=>!state)}>
          <Sidebar className="size-6 shrink-0 hidden md:inline" />

        </div>
      </TooltipTrigger>
      <TooltipContent
       side="right" sideOffset={18} align="start" alignOffset={6}
        className="bg-foreground text-background"
      >
        <p>Toggle Sidebar</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}

export default ToggleNavbar