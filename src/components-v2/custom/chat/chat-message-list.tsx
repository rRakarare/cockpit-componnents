import { MessageType } from "@/config-v2/chat/base-chat/types";
import ChatMessage from "./chat-message";
import Loader from "../loader";

interface ChatMessageListProps {
  messages: Partial<MessageType[]> | undefined;
  isLoading: boolean;
}

function ChatMessageList({ messages, isLoading }: ChatMessageListProps) {
  if (isLoading) return <Loader />;

  return (
    <div className="container max-w-3xl">
      {messages?.map((message) => (
        <ChatMessage {...message} key={message?._id} />
      ))}
    </div>
  );
}

export default ChatMessageList;
