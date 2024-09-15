import { chats } from "@/config/chat/example-data";
import ChatItem from "./chat-item";

function ChatList() {
  return (
    <div className="container space-y-5">
      {chats.map((item, i) => (
        <ChatItem
          key={i}
          _id={item._id}
          title={item.title}
          model={item.model}
          updatedAt={item.updatedAt}
        />
      ))}
    </div>
  );
}

export default ChatList;
