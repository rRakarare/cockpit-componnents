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
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="chat-history-item space-x-2">
            <Skeleton className="size-6 rounded-full" />
            <div className="w-full flex flex-col space-y-2">
              <Skeleton className="w-1/2 h-5" />
              <Skeleton className="w-1/4 h-5" />
            </div>
          </div>

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
