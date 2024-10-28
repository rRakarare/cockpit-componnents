import ChatInput from "@/components-v2/custom/chat/chat-input";
import { ProjectType } from "@/config-v2/project/project-type";
import ProjectIntstructions from "./project-instructions";
import ProjectChats from "./project-chats";
import ProjectSources from "./project-sources";
import ProjectUsers from "./project-users";

function ProjectDetails({
  chats,
  context,
  sources,
  currentSize,
  users
}: Pick<ProjectType, "chats" | "sources" | "context" | "currentSize" |"users">) {
  return (
    <div className="container flex space-x-8 mb-6">
      <div className="w-2/3 flex flex-col space-y-6">
        <ChatInput onChange={() => console.log("")} onSend={() => {}}>
          ...
        </ChatInput>
        <ProjectChats chats={chats} />
      </div>
      <div className="w-1/3 flex flex-col space-y-6">
        <ProjectIntstructions context={context} />
        <ProjectSources sources={sources} currentSize={currentSize}  />
        <ProjectUsers users={users} />
      </div>
    </div>
  );
}

export default ProjectDetails;
