import PromptBreadcrumb from "./_components/prompt-breadcrumb";
import PromptFilter from "./_components/prompt-filter";
import PromptList from "./_components/prompt-list";


function Page() {

  return (
    <div>
      <div>
        <PromptBreadcrumb />
      </div>
      <div className="space-y-3 mt-3">
        <PromptFilter />
        <PromptList />
      </div>
    </div>
  );
}

export default Page;
