import { Button } from "@/components-v2/ui/button";
import { Input } from "@/components-v2/ui/input";
import { Forward, Image, Search, SlidersVertical } from "lucide-react";

function ImagePromptFilter() {
  return (
    <div className="flex justify-between items-center py-4 bg-background container space-x-6">
      <div className="w-full flex space-x-2">
        <div className="relative w-full">
          <Image className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground size-6 cursor-pointer" />
          <Input
            type="text"
            placeholder="Imagine ..."
            className="pl-12 max-w-full"
          />
          <Forward className="absolute p-1 right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground size-7 cursor-pointer" />
        </div>
        <Button size={"icon"} variant={"outline"}>
        <SlidersVertical className="size-5" />
        </Button>
      </div>
      <div className="relative max-w-80">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground size-6 cursor-pointer" />
        <Input
          type="text"
          placeholder="Suchen ..."
          className="pl-12 "
        />
      </div>
    </div>
  );
}

export default ImagePromptFilter;
