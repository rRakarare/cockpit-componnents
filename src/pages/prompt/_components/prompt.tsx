import { getIcon } from "@/config-v2/icons/icon-map";
import { PromptType } from "@/config-v2/prompt/types";
import { Link } from "react-router-dom";

function Prompt({ color, name, icon, _id }: Partial<PromptType>) {
  return (
    <Link to={`/prompt/${_id}`} className="border p-4 rounded-md shadow-sm space-x-3 flex items-center hover:bg-accent">
      <div style={{background: color}} className="w-8 h-8 bg-primary text-primary-foreground rounded-full inline-flex items-center justify-center shrink-0">
        {getIcon({iconName: icon})}
      </div>
      <span>
      {name}
      </span>
    </Link>
  );
}

export default Prompt;
