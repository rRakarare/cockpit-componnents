import { Input } from "@/components-v2/ui/input";
import { Search } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components-v2/ui/toggle-group";
import { ChatIcon } from "@/components-v2/custom/chat/chat-icon";
import ToolTipShort from "@/components-v2/ui/helper/tooltip-short";

interface ChatFilterProps {
  setFilter: (searchKey: string) => void;
  typeFilter: ("chat" | "data-chat" | "image-chat")[];
  setTypeFilter: (type: ("chat" | "data-chat" | "image-chat")[]) => void;
}

function ChatFilter({ setFilter, typeFilter, setTypeFilter }: ChatFilterProps) {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleTypeChange = (value: ("chat" | "data-chat" | "image-chat")) => {
    if (typeFilter.includes(value)) {
      setTypeFilter(typeFilter.filter((item) => item !== value));
    } else {
      setTypeFilter([...typeFilter, value]);
    }
  }

  return (
    <div className="flex justify-between items-center py-4 bg-background container">
      <div className="relative w-full">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
        <Input
          type="text"
          placeholder="Search messages or tags..."
          className="pl-8 max-w-96"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <ToggleGroup type="multiple" value={typeFilter}>
          <ToolTipShort tip="Chat">
          <ToggleGroupItem value="chat" aria-label="Toggle chat" variant={"outline"} onClick={()=>handleTypeChange("chat")}>
            <ChatIcon type={"chat"} />
          </ToggleGroupItem>
          </ToolTipShort>
          <ToolTipShort tip="Data Chat">
          <ToggleGroupItem value="data-chat" aria-label="Toggle data-chat" variant={"outline"} onClick={()=>handleTypeChange("data-chat")}>
            <ChatIcon type={"data-chat"} />
          </ToggleGroupItem>
          </ToolTipShort>
          <ToolTipShort tip="Image Chat">
          <ToggleGroupItem value="image-chat" aria-label="Toggle image-chat" variant={"outline"} onClick={()=>handleTypeChange("image-chat")}>
            <ChatIcon type={"image-chat"} />
          </ToggleGroupItem>
          </ToolTipShort>
        </ToggleGroup>
      </div>
    </div>
  );
}

export default ChatFilter;
