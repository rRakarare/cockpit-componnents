import { MessageType } from "@/config-v2/chat/base-chat/types";
import Markdown from "../markdown/markdown";
import CockpitLogo from "@/components-v2/custom/unsorted/logo";
import { User } from "lucide-react";

function ChatMessage({ content, role }: Partial<MessageType>) {



  return (
    <div className="w-full my-2 border-b flex space-x-2 last:border-none">
      <div className="rounded-md shadow-sm h-fit shrink-0 border p-1 mt-3">
      {role === "assistant" ? (
        <CockpitLogo className="size-6" />
      ) : (
        <User className="size-6 " />
      )}
      </div>

      <div className="py-4 mb-2 inline-block overflow-x-hidden">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

export default ChatMessage;
