import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList, Plus, SlidersHorizontal } from "lucide-react";
import PromptGrid from "./_components/prompt-grid";
import { Input } from "@/components/ui/input";

function Page() {
  return (
    <div>
      <div className="topbar justify-between">
        <div className="space-x-3">
          <Button size={"icon"}>
            <LayoutGrid className="size-5" />
          </Button>
          <Button size={"icon"} variant={"outline"}>
            <LayoutList className="size-5" />
          </Button>
        </div>
        <div className="flex space-x-3">
          <Input placeholder="Search" />
          <Button className="shrink-0" size={"icon"} variant={"outline"}>
            <SlidersHorizontal className="size-5" />
          </Button>
          <Button variant={"outline"}>
            <Plus className="size-5 mr-2" />
            Neuer Prompt
          </Button>
        </div>
      </div>
      <div className="container mt-10">
        <PromptGrid />
      </div>
    </div>
  );
}

export default Page;
