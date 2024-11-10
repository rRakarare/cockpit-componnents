import { Skeleton } from "@/components-v2/ui/skeleton";
import { getIcon } from "@/config-v2/icons/icon-map";
import { PromptDetailType } from "@/types/db/prompt";

function PromptHeader({
  name,
  description,
  icon,
  color,
  isLoading
}: Partial<Pick<PromptDetailType, "name" | "icon" | "color" | "description">> & { isLoading: boolean }) {

  if (isLoading) return (
    <div className="flex px-6 items-center space-x-3 h-24 border-b mb-8 py-4">
      <Skeleton className="rounded-lg size-10" />
      <div className="">
        <Skeleton className="w-44 h-6 mb-2" />
        <Skeleton className="w-72 h-4" />
      </div>
    </div>
  )

  return (
    <div className="flex px-6 items-center space-x-3 h-24 border-b mb-8 py-4">
      <div className="p-3 rounded-lg size-10" style={{background:color}}>{getIcon({iconName:icon})}</div>
      <div>
        <p className="font-semibold mb-1 text-2xl">{name}</p>
        <p className="text-muted-foreground text-md">{description}</p>
      </div>
    </div>
  );
}

export default PromptHeader;
