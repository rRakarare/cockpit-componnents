import ImagePromptBreadCrumb from "./_components/image-prompt-breadcrumb";
import ImagePromptFilter from "./_components/image-prompt-filter";
import ImagePromptList from "./_components/image-prompt-list";

function Page() {
  return (
    <div>
      <ImagePromptBreadCrumb />
      <div className="space-y-3 mt-3">
        <ImagePromptFilter />
        <ImagePromptList />
      </div>
    </div>
  );
}

export default Page;
