import { useSimulatedData } from "@/types/example-data/simulateDBCall";
import { LoadingDataIcon } from "@/components-v2/custom/unsorted/loader";
import { promptDetailsDummyData } from "@/types/example-data/prompts";
import { PromptSimpleType } from "@/types/db/prompt";
import PromptItem from "./prompt-item";

function PromptList() {
  const prompts = promptDetailsDummyData as PromptSimpleType[];

  const { data, isLoading } = useSimulatedData(prompts, { delay: 400 });

  if (isLoading) {
    return <LoadingDataIcon className="mx-auto" />;
  }

  return (
    <div className="container grid grid-cols-3 gap-4">
      {data?.map((item, i) => (
        <PromptItem key={i} {...item} />
      ))}
    </div>
  );
}

export default PromptList;
