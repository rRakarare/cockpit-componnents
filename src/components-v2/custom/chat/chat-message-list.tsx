import { MessageType } from "@/config-v2/chat/base-chat/types"
import ChatMessage from "./chat-message"

function ChatMessageList({messages}: {messages: Partial<MessageType[]> | undefined}) {
  return (
    <div className="container max-w-3xl">
        {messages?.map((message) => (
            <ChatMessage {...message} key={message?._id} />
        ))}       
    </div>
  )
}

export default ChatMessageList