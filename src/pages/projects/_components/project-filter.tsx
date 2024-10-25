import { Input } from "@/components-v2/ui/input"
import { Search } from "lucide-react"

function ProjectFilter() {
  return (
    <div className="flex justify-between items-center py-4 bg-background container">
    <div className="relative w-full">
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
      <Input
        type="text"
        placeholder="Search projects ..."
        className="pl-8 max-w-96"
      />
    </div>
    </div>
  )
}

export default ProjectFilter