import { cn } from "@/lib/utils";
import { Cog } from "lucide-react";
import { Navitems } from "./nav-links";
import CockpitLogo from "../../logo";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
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

function Sidebar({ isOpen }: Props) {
  return (
    <aside
      className={cn(
        "h-full bg-background border shadow-lg rounded-lg w-full flex flex-col"
      )}
    >
      <div
        id="top"
        className={cn(
          "flex flex-col items-center justify-center py-2 border-b"
        )}
      >
        <div className="flex items-center px-2 w-full cursor-pointer">
          <CockpitLogo className="size-9 shrink-0" />
          <span
            className={cn(
              "opacity-100 duration-300 ml-2 font-semibold whitespace-nowrap",
              !isOpen && "w-0 opacity-0 ml-0"
            )}
          >
            KI-Cockpit
          </span>
        </div>
      </div>
      <div id="main" className="overscroll-y-auto overflow-x-hidden flex-grow">
        <nav
          className={cn(
            "flex flex-col  justify-start space-y-2 p-2 border-0",
            isOpen && "border-b"
          )}
        >
          <SectionHeading title="KI Cockpit" isOpen={isOpen} />
          <Navitems isOpen={isOpen} />
        </nav>
        <div className="flex flex-col  justify-start space-y-2 p-2">
          <SectionHeading title="Kürzliche Chats" isOpen={isOpen} />
        </div>
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
