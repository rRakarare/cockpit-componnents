import { MessageType } from "@/config/chat/base-chat/types"

function ChatMessage({content}: Partial<MessageType>) {
  return (
    <div className="container max-w-3xl">
        <div className="bg-gray-200 p-2 rounded-lg my-2">
            {content}
        </div> 
    </div>
  )
}

export default ChatMessage