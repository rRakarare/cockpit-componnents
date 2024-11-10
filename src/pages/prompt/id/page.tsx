import { useParams } from "react-router-dom";
import PromptBreadcrumbDetail from "./_components/prompt-breadcrumb-detail";
import { promptDetailsDummyData } from "@/types/example-data/prompts";
import { PromptDetailType } from "@/types/db/prompt";
import { useSimulatedData } from "@/types/example-data/simulateDBCall";
import PromptHeader from "./_components/prompt-header";
import PromptDetails from "./_components/prompt-details";
import { LoadingDataIcon } from "@/components-v2/custom/unsorted/loader";

function Page() {
  const { id } = useParams<{ id: string }>();

  const prompt = promptDetailsDummyData.find(
    (p) => p.prompt_uuid === id
  ) as PromptDetailType;

  const { data, isLoading } = useSimulatedData(prompt, { delay: 400 });

  return (
    <div>
      <PromptBreadcrumbDetail name={data?.name} />
      <PromptHeader
        isLoading={isLoading}
        name={data?.name}
        description={data?.description}
        icon={data?.icon}
        color={data?.color}
      />
      {isLoading || !data ? (

          <LoadingDataIcon className="mx-auto size-8" />

      ) : (
        <PromptDetails
          chats={data?.chats}
          prompt_content={data?.prompt_content}
          groups={data?.groups}
          users={data?.users}
        />
      )}
    </div>
  );

  return <div>My Prompt {id}</div>;
}

export default Page;
