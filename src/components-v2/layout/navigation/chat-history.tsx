import { ChatIcon } from "@/components-v2/custom/chat/chat-icon";
import { ChatType } from "@/config-v2/chat/base-chat/types";
import { DataChatType } from "@/config-v2/chat/data-chat/types";
import { getChatHref } from "@/config-v2/chat/get-chat-href";
import { ImageChatType } from "@/config-v2/chat/image-chat/types";
import { useAllChatsFilter } from "@/lib-v2/hooks/useAllChatsFilter";
import { Link } from "react-router-dom";


const ChatMessage = ({
  _id,
  title,
  type
}: Partial<ChatType | DataChatType | ImageChatType>) => {

  const href = getChatHref({ type, _id });

  return (
    <Link to={href} className="hover:bg-accent p-1 px-2 rounded-lg flex items-center  space-x-2">
      <ChatIcon type={type} className="shrink-0" />
      <p className="w-62 whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </p>
    </Link>
  );
};

function ChatHistory({isOpen}: {isOpen: boolean}) {

  const {allChats} = useAllChatsFilter()

  if (!isOpen) return null;

  

  return (
    <div>
      <div className="border-t px-4 py-3 pb-2 -mx-2 font-semibold text-muted-foreground">Chatverlauf</div>
        <div className="space-y-2 ">
        {allChats.slice(0,5).map((item) => (
          <ChatMessage key={item._id} {...item} />
        ))}
        </div>
        <div className="">
            <Link to="/chats" className="hover:bg-accent p-1 px-2 mt-2 rounded-lg flex whitespace-nowrap">
                Alle Chats
            </Link>
        </div>
    </div>
  );
}

export default ChatHistory;
