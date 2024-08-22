
import { cn } from "@/lib/utils";
import Sidebar from "./navigation/sidebar";
import { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div id="container" className="flex">
        <div
          className={cn(
            "h-screen w-[72px] shrink-0 sticky top-0 p-2 duration-300",
            isOpen && "w-[220px]"
          )}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div
          className={cn(
            "duration-300",
            isOpen && "bg-foreground/40 md:bg-background"
          )}
        >
          <main className="m-4">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
