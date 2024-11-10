import { Button } from "@/components-v2/ui/button"
import PromptInputFilters from "./filters/prompt-filter"
import { Link } from "react-router-dom"

function PromptFilter() {
  return (
    <div className="flex justify-between items-center py-4 bg-background container">
    <PromptInputFilters />
    <Button variant={"outline"} asChild>
      <Link to="/prompt/create">Prompt Hinzufügen</Link>
    </Button>
    </div>
  )
}

export default PromptFilter