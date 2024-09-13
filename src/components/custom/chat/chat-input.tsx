import { Button } from "@/components/ui/button";
import { AutosizeTextarea } from "@/components/ui/textarea-nostyle";
import { Ellipsis, Forward } from "lucide-react";

function ChatInput() {
  return (
    <div className="-full">
      <div className="bg-background p-4 pt-0 max-w-[36%] mx-auto">
        <div className="border rounded-2xl shadow-lg p-4">
        <AutosizeTextarea maxHeight={200} placeholder="type message ..."  />
        <div className="flex justify-between">
            <Button className="rounded-xl" size={"icon"} variant={"outline"}>
                <Ellipsis className="size-6" />
            </Button>
            <Button className="rounded-xl" size={"icon"} variant={"default"}>
                <Forward className="size-6" />
            </Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
