import { Skeleton } from "@/components-v2/ui/skeleton";
import ChatItem from "./chat-item";
import { CombinedChatType } from "@/lib-v2/hooks/useAllChatsFilter";

interface ChatListProps {
  isLoading: boolean;
  allChats: CombinedChatType [] 
}

function ChatList({ isLoading, allChats }: ChatListProps) {
  


  if (isLoading)
    return (
      <div className="container grid grid-cols-3 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-20 rounded-full" />
        ))}
      </div>
    );

  return (
    <div className="container grid grid-cols-3 gap-4">
      {allChats.map((item, i) => (
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
