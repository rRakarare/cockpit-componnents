import { ProjectType } from "@/config-v2/project/project-type";
import { MessageCircle } from "lucide-react";

function ProjectChats({ chats }: Pick<ProjectType, "chats">) {
  if (chats.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-72 border rounded-xl p-4">
        <div className="p-1 border rounded-lg">
          <MessageCircle className="size-4" />
        </div>
        <p className="font-bold">Keine Chats vorhanden</p>
        <p className="text-muted-foreground">
          To get started, create a new chat in this project.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-2">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="w-full flex space-x-3 py-2  border px-4 rounded-xl items-center hover:bg-accent cursor-pointer"
        >
          <div className="p-1 border rounded-lg">
            <MessageCircle className="size-4" />
          </div>
          <div>
            <div>{chat.name}</div>
            <div className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectChats;
