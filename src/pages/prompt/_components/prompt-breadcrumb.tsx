import CustomBreadcrumb from "@/components-v2/custom/unsorted/breadcrumb"
import { hrefMap } from "@/config-v2/links"

function PromptBreadcrumb() {
  return (
    <div className="h-topbar w-full border-b flex items-center justify-between px-4 sticky top-0 bg-background z-10">
    <CustomBreadcrumb links={[{ text: hrefMap.prompt.text }]} />
  </div>
  )
}

export default PromptBreadcrumb