import { MessageType } from "@/config/chat/base-chat/types";
import Markdown from "../markdown/markdown";

function ChatMessage({ content }: Partial<MessageType>) {
  return (
    <div className="container max-w-3xl">
      <div className="p-6 rounded-lg my-2 border">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

export default ChatMessage;
