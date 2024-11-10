import CreatePromptForm from "./_components/create-form";
import PromptCreateBreadcrumb from "./_components/prompt-breadcrumb-create";

function Page() {



  return (
    <div>
      <PromptCreateBreadcrumb />
      <div className="max-w-2xl mx-auto mt-8">
      <CreatePromptForm />
    </div>
    </div>
  );
}

export default Page;
