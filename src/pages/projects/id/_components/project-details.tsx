import ChatInput from "@/components-v2/custom/chat/chat-input";
import { ProjectType } from "@/config-v2/project/project-type";
import ProjectIntstructions from "./project-instructions";
import ProjectChats from "./project-chats";
import ProjectSources from "./project-sources";

function ProjectDetails({
  chats,
  context,
  sources,
}: Pick<ProjectType, "chats" | "sources" | "context">) {
  return (
    <div className="container flex space-x-8">
      <div className="w-2/3 flex flex-col space-y-6">
        <ChatInput onChange={() => console.log("")} onSend={() => {}}>
          asd
        </ChatInput>
        <ProjectChats chats={chats} />
      </div>
      <div className="w-1/3 flex flex-col space-y-6">
        <ProjectIntstructions context={context} />
        <ProjectSources sources={sources} />
      </div>
    </div>
  );
}

export default ProjectDetails;
