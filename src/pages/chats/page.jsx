import ChatFilter from "./_components/chat-filter";
import ChatList from "./_components/chat-list";

function Page() {
  return (
    <div className="my-topbar space-y-3">
      <ChatFilter />
      <ChatList />
    </div>
  );
}

export default Page;
