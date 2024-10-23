import PromptGrid from "./_components/prompt-grid";
import PromptSettings from "./_components/prompt-settings";
import PromptBanner from "./_components/prompt-banner";
import SinglePromptModal from "./id/modal";
import CreatePromptModal from "./create/modal";

function Page() {
  return (
    <>
      <div className="space-y-4 my-topbar">
        <PromptBanner />
        <PromptSettings />
        <PromptGrid />
      </div>
      <SinglePromptModal />
      <CreatePromptModal />
    </>
  );
}

export default Page;
