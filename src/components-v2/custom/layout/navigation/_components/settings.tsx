import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components-v2/ui/popover";
import { Settings2 } from "lucide-react";
import Logout from "./logout";
import { ModeToggle } from "./mode-toggle";

function Settings() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="hover:bg-accent rounded-lg p-2">
          <Settings2 className="size-6 " />
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        alignOffset={60}
        avoidCollisions={false}
        sideOffset={13}
        className="max-w-fit flex flex-col space-y-2 px-2 py-0 pb-2"
      >
        <div className="border-b px-2 py-1 -mx-2">settings</div>
        <ModeToggle />
        <Logout />
      </PopoverContent>
    </Popover>
  );
}

export default Settings;
