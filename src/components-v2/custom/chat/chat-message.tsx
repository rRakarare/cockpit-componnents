import { MessageType } from "@/config-v2/chat/base-chat/types";
import Markdown from "../markdown/markdown";
import CockpitLogo from "@/components-v2/layout/_components/logo";
import { User } from "lucide-react";

function ChatMessage({ content, role }: Partial<MessageType>) {
  return (
    <div className="container max-w-3xl flex my-2 space-x-4">
      {role === "assistant" ? (
        <CockpitLogo className="size-7 mt-5 p-1 shrink-0 border rounded-md shadow-sm" />
      ) : (
        <User className="size-7 mt-5 p-1 shrink-0 border rounded-md shadow-sm" />
      )}

      <div className="py-4 w-full border-b">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

export default ChatMessage;
