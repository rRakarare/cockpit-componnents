import { prompts } from "@/config/prompts"
import Prompt from "./prompt"

function PromptGrid() {
  return (
    <div className="grid grid-cols-4 gap-6">
        {prompts.map((item, i) => (
            <Prompt key={i} title={item.title} type={item.type} description={item.description}/>
        ))}
    </div>
  )
}

export default PromptGrid