import ChatInput from "@/components/custom/chat/chat-input";
import CockpitLogo from "@/layout/_components/logo";

function Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mt-topbar pb-4 size-full overflow-y-auto">
        <div className="container flex flex-col h-full items-center justify-center">
          <CockpitLogo className="w-[500px] absolute fill-accent -z-30" />
        <h2 className="text-4xl font-bold">Was geht ab heute?</h2>
        </div>
      </div>
      <ChatInput />
    </div>
  );
}

export default Page;
