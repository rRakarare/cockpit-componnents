import { cn } from "@/lib-v2/utils"
import { LoaderCircle } from "lucide-react"

export const StreamingIcon = ({className}: {className?:string}) => {
  return (
    <LoaderCircle className={cn("size-12 animate-spin", className)} />
  )
}

function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <StreamingIcon />
    </div>
  )
}

export default Loader