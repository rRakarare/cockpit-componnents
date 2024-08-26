
import { cn } from "@/lib/utils";
import Sidebar from "./navigation/sidebar";
import { useEffect, useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (isFixed) {
      setIsOpen(true);
    }
  }, [isFixed])
  

  return (

      <div id="container" className="flex">
        <div
          className={cn(
            "h-screen w-[calc(var(--nav-width)+var(--nav-l)+var(--nav-r))] py-nav-y pl-nav-l pr-nav-r  shrink-0 sticky top-0  duration-300 ",
            isOpen && "w-[300px]"
          )}
          onMouseEnter={() => !isFixed && setIsOpen(true)}
          onMouseLeave={() => !isFixed && setIsOpen(false)}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isFixed={isFixed} setIsFixed={setIsFixed} />
        </div>
        <div
          className={cn(
            "duration-300 container pt-nav-y ",
            isOpen && "bg-foreground/40 md:bg-background"
          )}
        >
          {children}
        </div>
      </div>

  );
}

export default Layout;
