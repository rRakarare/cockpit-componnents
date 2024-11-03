import { Button } from "@/components-v2/ui/button";
import { Textarea } from "@/components-v2/ui/textarea";
import { DataSiloType } from "@/config-v2/datasilo/types/datasilo-types";

function SiloInstructions({ system_message }: Pick<DataSiloType, "system_message">) {
  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="py-2 px-4">
      <p className="font-semibold text-lg">Instructions</p>
      <p className="text-muted-foreground text-sm">
        Guidelines or instructions the model will use to generate better
        responses to prompts.
      </p>
      <Textarea className="mt-2" placeholder="Add a note" value={system_message ?? ""} />
      </div>
      <div className="bg-accent flex justify-end px-4 py-2">
      <Button disabled className="">Speichern</Button>
      </div>
    </div>
  );
}

export default SiloInstructions;
