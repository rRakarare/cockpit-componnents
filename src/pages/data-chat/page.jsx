import ChatInput from "@/components-v2/custom/chat/chat-input";
import CockpitLogoBackGround from "@/components-v2/custom/unsorted/backLogo";
import CockpitLogo from "@/components-v2/custom/unsorted/logo";

function Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mt-topbar pb-4 size-full overflow-y-auto">
        <div className="container flex flex-col h-full items-center justify-center">
          <CockpitLogoBackGround className="w-[1200px] absolute -z-30" />
        <h2 className="text-4xl font-bold">Willkommen im Data-Chat</h2>
        </div>
      </div>
      <ChatInput />
    </div>
  );
}

export default Page;
