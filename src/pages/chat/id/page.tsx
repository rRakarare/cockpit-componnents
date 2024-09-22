import ChatInput from "@/components-v2/custom/chat/chat-input";
import ChatMessageList from "@/components-v2/custom/chat/chat-message-list";
import { useParams } from "react-router-dom";
import { useChat } from "../_components/hooks/useChat";

function Page() {
  const { id } = useParams<{ id: string }>();
  const { chat, isLoading } = useChat({ _id: id });

  return (
    <div className="flex flex-col h-screen">
      <div className="pt-topbar pb-4 size-full overflow-y-auto">
        <ChatMessageList messages={chat?.messages} isLoading={isLoading} />
      </div>
      <ChatInput />
    </div>
  );
}

export default Page;
