
import { chats } from "@/config-v2/chat/base-chat/example-data";
import { dataChats } from "@/config-v2/chat/data-chat/example-data";
import { imageChats } from "@/config-v2/chat/image-chat/example-data";
import ChatItem from "./chat-item";

function ChatList() {

  const allChatItems = [...chats, ...dataChats, ...imageChats]
  const sortedChatItems = [...allChatItems].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  return (
    <div className="container space-y-5">
      {sortedChatItems.map((item, i) => (
        <ChatItem
          key={i}
          _id={item._id}
          title={item.title}
          model={item.model}
          updatedAt={item.updatedAt}
          type={item.type}
        />
      ))}
    </div>
  );
}

export default ChatList;
