import {  HomeIcon, MenuIcon, Plus, Timer } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

return (
    <div>
        <header className="h-header flex items-center px-2 border-b sticky top-0 bg-background w-full">
            <Button size={"icon"} onClick={()=>setIsOpen(state=>!state)}>
                <MenuIcon size={24} />
            </Button>
        </header>
        <div id="container" className="flex">
            <aside className={cn("h-[calc(100vh-var(--header-height))] bg-background border-r w-14 -left-14 md:sticky md:left-0 top-[var(--header-height)] fixed  flex flex-col flex-shrink-0 justify-stretch duration-300", isOpen && "w-5/6 md:w-48 left-0")}>
                <div id="top" className={cn("flex flex-col items-center justify-center duration-300 h-10 overflow-hidden", isOpen && "h-[180px]")}>
                    <Avatar className={cn("size-8 duration-300", isOpen && "size-32")}>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className={cn("scale-0 h-0 font-bold text-xl opacity-0 duration-300 transition-all", isOpen && "scale-100 h-4 opacity-100")}>Ich bin Morty</h1>
                </div>
                <div
                    id="main"
                    className="overscroll-y-auto overflow-x-hidden flex-grow"
                >
                    <nav className="flex flex-col  justify-start space-y-3 p-2">

                            <a href={"#"} className="flex items-start p-2 rounded-md bg-foreground text-background w-full">
                                <HomeIcon className="size-6 shrink-0" />
                                <span className={cn("opacity-100 duration-300 ml-4", !isOpen && "w-0 opacity-0 ml-0")}>Home</span>
                            </a>
                            <a href={"#"} className="flex items-start p-2 rounded-md bg-foreground text-background w-full">
                                <Timer className="size-6 shrink-0" />
                                <span className={cn("opacity-100 duration-300 ml-4", !isOpen && "w-0 opacity-0 ml-0")}>Chat</span>
                            </a>
                            <a href={"#"} className="flex items-start p-2 rounded-md bg-foreground text-background w-full">
                                <Plus className="size-6 shrink-0" />
                                <span className={cn("opacity-100 duration-300 ml-4", !isOpen && "w-0 opacity-0 ml-0")}>Library</span>
                            </a>

                    </nav>
                </div>
                <div id="bottom">Bottom</div>
            </aside>
            <div className={cn("duration-300", isOpen && "bg-foreground/40 md:bg-background")}>
            <main className="m-4">{children}</main>
            </div>
            
        </div>
    </div>
);
}

export default Layout;
