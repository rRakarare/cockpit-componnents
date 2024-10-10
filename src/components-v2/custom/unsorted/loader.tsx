import { LoaderCircle } from "lucide-react"

function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <LoaderCircle className="size-12 animate-spin" />
    </div>
  )
}

export default Loader