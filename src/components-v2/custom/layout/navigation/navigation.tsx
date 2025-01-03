
import ChatHistory from "./_components/chat-history";
import NavLinks from "./_components/navlinks";
import Settings from "./_components/settings";
import { useState } from "react";
import { cn } from "@/lib-v2/utils";
import TopPart from "./_components/top-part";
import { AlignLeft } from "lucide-react";
import { Button } from "@/components-v2/ui/button";
import ToggleNavbar from "./_components/toggle-navbar";

function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="fixed top-3 left-3 md:hidden z-30" size={"icon"} variant={"outline"} onClick={()=>setIsOpen(true)}>
        <AlignLeft />
      </Button>
      <div className={cn("border-r h-screen top-0 left-0 w-0 overflow-hidden md:w-16 fixed md:sticky z-30 bg-background shrink-0 transition-width duration-150 ", isOpen && "w-60 md:w-64")}>
    <div className="flex flex-col h-full">
      <TopPart isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        id="mid"
        className="overflow-y-auto overflow-x-hidden flex-grow flex flex-col p-2 space-y-2 py-2 no-scrollbar"
      >
        <NavLinks isOpenNav={isOpen} />
        <ChatHistory isOpen={isOpen} />
      </div>
      <div id="bot" className={cn("py-3 flex justify-center", isOpen && "hidden")}>
        <ToggleNavbar setIsOpen={setIsOpen} />
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
