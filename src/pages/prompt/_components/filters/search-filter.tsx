import { Input } from "@/components-v2/ui/input"
import { Search } from "lucide-react"

function SearchFilter() {
  return (
    <div className="relative w-72">
    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
    <Input
      type="text"
      placeholder="Search prompts ..."
      className="pl-8 max-w-96"
    />
  </div>
  )
}

export default SearchFilter