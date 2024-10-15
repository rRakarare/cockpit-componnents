import { MessageType } from "@/config-v2/chat/base-chat/types";
import Markdown from "../markdown/markdown";
import CockpitLogo from "@/components-v2/custom/unsorted/logo";
import { User } from "lucide-react";
import { StreamingIcon } from "../unsorted/loader";
import { memo } from 'react';

type ChatMessageProps = Partial<MessageType> & {
  isStreaming?: boolean;
};



const ChatMessage = memo(function ChatMessage({ content, role, isStreaming = false }: ChatMessageProps) {
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
        <span className="inline-block"><Markdown>{content}</Markdown></span>
        {isStreaming && <span className="inline-block"><StreamingIcon className="size-6 -mb-1 ml-1"/></span>}
      </div>
    </div>
  );
});

export default ChatMessage;
