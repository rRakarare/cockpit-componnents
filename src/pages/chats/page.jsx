import { useAllChatsFilter } from "@/lib-v2/hooks/useAllChatsFilter";
import ChatFilter from "./_components/chat-filter";
import ChatList from "./_components/chat-list";

function Page() {

  const { allChats, isLoading, setFilter, typeFilter, setTypeFilter } = useAllChatsFilter();
  
  return (
    <div className="my-topbar space-y-3">
      <ChatFilter setFilter={setFilter} typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      <ChatList allChats={allChats} isLoading={isLoading} />
    </div>
  );
}

export default Page;
