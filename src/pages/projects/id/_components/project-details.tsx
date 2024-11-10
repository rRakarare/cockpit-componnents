import ChatInput from "@/components-v2/custom/chat/chat-input";
import ProjectIntstructions from "./project-instructions";
import ProjectChats from "./project-chats";
import ProjectSources from "./project-sources";
import ProjectUsers from "./project-users";
import { ProjectDetailType } from "@/types/db/project";

function ProjectDetails({
  chats,
  custom_instruction,
  contents,
  current_knowledge_usage,
  users
}: Pick<ProjectDetailType, 'chats' | 'contents' | 'custom_instruction' | 'current_knowledge_usage' | 'users'>) {
  return (
    <div className="container flex space-x-8 mb-6">
      <div className="w-2/3 flex flex-col space-y-6">
        <ChatInput onChange={() => console.log("")} onSend={() => {}}>
          ...
        </ChatInput>
        <ProjectChats chats={chats} />
      </div>
      <div className="w-1/3 flex flex-col space-y-6">
        <ProjectIntstructions custom_instruction={custom_instruction} />
        <ProjectSources contents={contents} current_knowledge_usage={current_knowledge_usage}  />
        <ProjectUsers users={users} />
      </div>
    </div>
  );
}

export default ProjectDetails;
