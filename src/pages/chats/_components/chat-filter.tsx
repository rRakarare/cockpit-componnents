import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

function ChatFilter() {
  return (
    <div className="flex justify-between items-center py-4 bg-background container">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
        <Input
          type="text"
          placeholder="Search messages or tags..."
          className="pl-8"
        />
      </div>
      <div>
        <Button variant="outline" size="icon">
          <Filter className=" h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

export default ChatFilter;
