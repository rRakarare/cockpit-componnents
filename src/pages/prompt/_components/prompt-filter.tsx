import { Button } from "@/components-v2/ui/button";
import { Input } from "@/components-v2/ui/input";
import { LayoutGrid, LayoutList, Plus, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

function PromptFilter() {
  return (
    <div className="topbar justify-between bg-background/60 backdrop-blur-lg py-10">
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
        <Button asChild>
        <Link to={"/prompt/create"} >
          <Plus className="size-5 mr-2" />
          Neuer Prompt
        </Link>
        </Button>
      </div>
    </div>
  );
}

export default PromptFilter;
