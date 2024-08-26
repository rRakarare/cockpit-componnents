import { cn } from "@/lib/utils";
import { Cog, PanelLeft } from "lucide-react";
import { Navitems } from "./nav-links";
import CockpitLogo from "../../logo";
import ChatHistory from "./chat-history";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  isFixed?: boolean;
  setIsFixed?: any;
}

const SectionHeading = ({
  title,
  isOpen,
}: {
  title: string;
  isOpen: boolean;
}) => {
  return (
    <div
      className={cn(
        "font-semibold text-accent-foreground text-sm h-0 transition-all duration-300 opacity-0 -translate-y-3 whitespace-nowrap !m-0",
        isOpen && "h-5 opacity-100 translate-y-0 !mb-1"
      )}
    >
      {title}
    </div>
  );
};

const TopSidebarContent = ({isOpen, setIsFixed}:Props) => {
  return (

      <div className="flex items-center p-2 pl-3 w-full border-b">
        <CockpitLogo className="size-9 shrink-0" />
        <span
          className={cn(
            "opacity-100 duration-300 ml-2 font-semibold whitespace-nowrap",
            !isOpen && "w-0 opacity-0 ml-0"
          )}
        >
          KI-Cockpit
        </span>
        <PanelLeft
          onClick={()=>setIsFixed((state:boolean)=>!state)}
          className={cn(
            "size-7 ml-auto transition-all opacity-0 p-1 cursor-pointer",
            isOpen && "opacity-100 hover:bg-accent"
          )}
        />
      </div>

  );
};

function Sidebar({ isOpen, setIsOpen, isFixed, setIsFixed }: Props) {
  return (
    <aside
      className={cn(
        "h-full bg-accent border-r shadow-lg w-full flex flex-col"
      )}
    >
      <TopSidebarContent isOpen={isOpen} setIsOpen={setIsOpen} setIsFixed={setIsFixed} />
      <div id="main" className="overscroll-y-auto overflow-x-hidden flex-grow">
        <nav
          className={cn(
            "flex flex-col  justify-start space-y-2 p-2 border-b"
          )}
        >
          <SectionHeading title="KI Cockpit" isOpen={isOpen} />
          <Navitems isOpen={isOpen} />
        </nav>
        <div className="flex flex-col  justify-start space-y-2 p-2">
          <SectionHeading title="Kürzliche Chats" isOpen={isOpen} />
        </div>
        <ChatHistory isOpen={isOpen} />
      </div>
      <div
        id="bottom"
        className={cn(
          "flex flex-col items-center justify-center py-2 border-t"
        )}
      >
        <Cog className="size-6" />
      </div>
    </aside>
  );
}

export default Sidebar;
