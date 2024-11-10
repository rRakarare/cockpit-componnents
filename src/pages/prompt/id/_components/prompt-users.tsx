import { Button } from "@/components-v2/ui/button"
import { PromptDetailType } from "@/types/db/prompt"
import { Ellipsis, User } from "lucide-react"

function PromptUsers({ users }: Pick<PromptDetailType, "users">) {
  return (
    <div className="border rounded-xl overflow-hidden">
    <div className="py-2 px-4 flex items-center justify-between space-x-3 border-b">
      <div>
        <p className="font-semibold text-lg">Benutzer</p>
        <p className="text-muted-foreground text-sm">
          Add Users to this project.
        </p>
      </div>
      <Button variant={"outline"}>Hinzufügen</Button>
    </div>
    {users.map((user,index) => (
          <div
          key={index}
          className="w-full flex items-center space-x-3 py-4 px-4 border-b last:border-none"
        >
          <div className="p-1 border rounded-lg">
            <User className="size-4" />
          </div>
          <div className="flex-1">
            <div>{user.email}</div>
            <div className="text-muted-foreground text-sm">
              {/* {user.} */}
            </div>
          </div>
          <Button size={"icon"} variant={"outline"}><Ellipsis className="size-4"/></Button>
        </div>
    ))}
    </div>
  )
}

export default PromptUsers