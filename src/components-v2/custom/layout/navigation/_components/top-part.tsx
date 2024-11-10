import CockpitLogo from "@/components-v2/custom/unsorted/logo";
// import UzinLogo from "@/components-v2/custom/unsorted/uzin/logo";
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
      <Link to={"/"} className="w-full">
        <CockpitLogo className="size-10" />
        {/* <UzinLogo className="size-7 ml-1" /> */}
      </Link>
      <div
        className={cn(
          "hover:bg-accent p-2 rounded-lg border-2 border-transparent cursor-pointer",
          !isOpen && "hidden"
        )}
        onClick={() => setIsOpen((state) => !state)}
      >
        <Sidebar className="size-6 shrink-0" />
      </div>
    </div>
  );
}

export default TopPart;
