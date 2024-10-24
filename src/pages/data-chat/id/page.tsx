import ChatMessageList from "@/components-v2/custom/chat/chat-message-list";
import ChatSettings from "../_components/ChatSettings";
import { useChat } from "@/pages/chat/_components/hooks/useChat";

function Page() {

  const { chat, isLoadingChats, stream, upstream, response, isFinished,isStreaming } = useChat();


  return (
    <div className="flex flex-col h-screen max-h-screen justify-center">
      <ChatMessageList messages={chat?.messages} isLoading={isLoadingChats} upstream={upstream} response={response} isFinished={isFinished} isStreaming={isStreaming} />
      <ChatSettings onSend={stream} />
    </div>
  );
}

export default Page;



