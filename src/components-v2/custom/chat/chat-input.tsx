import { Button } from "@/components-v2/ui/button";
import { AutosizeTextarea } from "@/components-v2/ui/textarea-nostyle";
import { Ellipsis, Forward } from "lucide-react";


function ChatInput() {


  return (
    <div className={""}>
      <div className="bg-background mb-4 p-4 pt-0 max-w-[36%] mx-auto">
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
