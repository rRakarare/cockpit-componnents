
import ChatHistory from "./chat-history";
import NavLinks from "./navlinks";
import Settings from "./settings";
import { useState } from "react";
import { cn } from "@/lib-v2/utils";
import TopPart from "./top-part";
import { AlignLeft } from "lucide-react";
import { Button } from "@/components-v2/ui/button";

function Navigation() {

  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="fixed top-3 left-3 md:hidden z-30" size={"icon"} variant={"outline"} onClick={()=>setIsOpen(true)}>
        <AlignLeft />
      </Button>
      <div className={cn("border-r h-screen top-0 left-0 w-0 overflow-hidden md:w-16 fixed md:sticky z-30 bg-background shrink-0 transition-width duration-150 ", isOpen && "w-60 md:w-64")} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
    <div className="flex flex-col h-full">
      <TopPart isHover={isHover} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        id="mid"
        className="overflow-y-auto overflow-x-hidden flex-grow flex flex-col p-2 space-y-2 py-2 no-scrollbar"
      >
        <NavLinks isOpenNav={isOpen} />
        <ChatHistory isOpen={isOpen} />
      </div>
      <div id="bot" className="py-3 flex justify-center border-t">
        <Settings />
      </div>
    </div>
    </div>
    </>
  );
}

export default Navigation;
