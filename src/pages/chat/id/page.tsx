import ChatInput from "@/components-v2/custom/chat/chat-input";
import ChatMessageList from "@/components-v2/custom/chat/chat-message-list";
import { chats } from "@/config-v2/chat/base-chat/example-data";
import { useParams } from "react-router-dom";

function Page() {


  const {id} = useParams<{id: string}>();

  const chat = chats.find((chat) => chat._id === id);

  return (
    <div className="flex flex-col h-screen">
      <div className="pt-topbar pb-4 size-full overflow-y-auto">
        <ChatMessageList messages={chat?.messages} />
        
      </div>
      <ChatInput />
    </div>
  );
}

export default Page;
