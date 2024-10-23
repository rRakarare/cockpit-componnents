import { prompts } from "@/config-v2/prompt/example-data"
import Prompt from "./prompt"
import { RootState } from "@/redux-rtk-v2/app/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib-v2/utils";

function PromptGrid() {

  const {isList} = useSelector((state: RootState) => state.prompt);

  return (
    <div className={cn("grid grid-cols-4 gap-6 container", isList && "grid-cols-1")}>
        {prompts.map((item, i) => (
            <Prompt key={i} {...item}/>
        ))}
    </div>
  )
}

export default PromptGrid