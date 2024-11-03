import { Button } from "@/components-v2/ui/button"
import { DataSiloType } from "@/config-v2/datasilo/types/datasilo-types"
import { Ellipsis, Users } from "lucide-react"

function SiloGroups
({ groups }: Pick<DataSiloType, "groups">) {
  return (
    <div className="border rounded-xl overflow-hidden">
    <div className="py-2 px-4 flex items-center justify-between space-x-3 border-b">
      <div>
        <p className="font-semibold text-lg">Gruppen</p>
        <p className="text-muted-foreground text-sm">
          Add Group to this silo.
        </p>
      </div>
      <Button variant={"outline"}>Hinzufügen</Button>
    </div>
    {groups.map((group) => (
          <div
          key={group.id}
          className="w-full flex items-center space-x-3 py-4 px-4 border-b last:border-none"
        >
          <div className="p-1 border rounded-lg">
            <Users className="size-4" />
          </div>
          <div className="flex-1">
            <div>{group.name}</div>
            <div className="text-muted-foreground text-sm">
              {group.description}
            </div>
          </div>
          <Button size={"icon"} variant={"outline"}><Ellipsis className="size-4"/></Button>
        </div>
    ))}
    </div>
  )
}

export default SiloGroups
