import { prompts } from "@/config-v2/prompt/example-data"
import Prompt from "./prompt"

function PromptGrid() {
  return (
    <div className="grid grid-cols-4 gap-6 container">
        {prompts.map((item, i) => (
            <Prompt key={i} {...item}/>
        ))}
    </div>
  )
}

export default PromptGrid