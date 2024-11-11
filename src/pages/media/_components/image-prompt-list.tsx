import { useSimulatedData } from "@/types/example-data/simulateDBCall";
import { LoadingDataIcon } from "@/components-v2/custom/unsorted/loader";
import { imagePromptDummyData } from "@/types/example-data/imagePrompt";
import { ImagePromptDetailType } from "@/types/db/imagePrompt";
import ImagePromptItem from "./image-prompt-item";

function ImagePromptList() {

  const imagePrompts = imagePromptDummyData as ImagePromptDetailType[];

  const { data, isLoading } = useSimulatedData(imagePrompts, { delay: 400 });

  if (isLoading) {
    return <LoadingDataIcon className="mx-auto" />;
  }

  return (
    <div className="container space-y-8">
      {data?.map((imagePrompt, i) => (
        <ImagePromptItem key={i} {...imagePrompt} />
      ))}
    </div>
  );
}

export default ImagePromptList;
