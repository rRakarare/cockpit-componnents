import PromptGrid from "./_components/prompt-grid";
import PromptFilter from "./_components/prompt-filter";
import PromptBanner from "./_components/prompt-banner";

function Page() {
  return (
    <div className="space-y-4 my-topbar">
      <PromptBanner />
      <PromptFilter />
      <PromptGrid />
    </div>
  );
}

export default Page;
