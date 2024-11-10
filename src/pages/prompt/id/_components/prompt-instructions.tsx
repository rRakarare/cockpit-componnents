import { Button } from "@/components-v2/ui/button";
import { Textarea } from "@/components-v2/ui/textarea";
import { PromptDetailType } from "@/types/db/prompt";

function PromptIntstructions({ prompt_content }: Pick<PromptDetailType, "prompt_content">) {
  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="py-2 px-4">
      <p className="font-semibold text-lg">Instructions</p>
      <p className="text-muted-foreground text-sm">
        Guidelines or instructions the model will use to generate better
        responses to prompts.
      </p>
      <Textarea className="mt-2" placeholder="Add a note" value={prompt_content ?? ""} />
      </div>
      <div className="bg-accent flex justify-end px-4 py-2">
      <Button className="">Speichern</Button>
      </div>
    </div>
  );
}

export default PromptIntstructions;
