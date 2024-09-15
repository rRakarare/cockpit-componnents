import { PromptType } from "@/config/prompt/types";

function Prompt({ title, type }: PromptType) {
  return (
    <div className="border p-4 rounded-md shadow-sm space-x-3 flex items-center">
      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full inline-flex items-center justify-center font-bold text-lg">
        {type}
      </div>
      <span>
      {title}
      </span>
    </div>
  );
}

export default Prompt;
