import { prompts } from "@/config/prompt/example-data"
import Prompt from "./prompt"

function PromptGrid() {
  return (
    <div className="grid grid-cols-4 gap-6 container">
        {prompts.map((item, i) => (
            <Prompt key={i} title={item.title} type={item.type} description={item.description}/>
        ))}
    </div>
  )
}

export default PromptGrid