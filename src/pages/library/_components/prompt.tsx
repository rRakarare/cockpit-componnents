import { getPromptIcon } from "@/config-v2/prompt/icon-map";
import { PromptType } from "@/config-v2/prompt/types";

function Prompt({ color, name, icon }: Partial<PromptType>) {
  return (
    <div className="border p-4 rounded-md shadow-sm space-x-3 flex items-center">
      <div style={{background: color}} className="w-8 h-8 bg-primary text-primary-foreground rounded-full inline-flex items-center justify-center shrink-0">
        {getPromptIcon({iconName: icon})}
      </div>
      <span>
      {name}
      </span>
    </div>
  );
}

export default Prompt;
