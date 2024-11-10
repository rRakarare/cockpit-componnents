import { PromptDetailType } from "@/types/db/prompt";
import PromptIntstructions from "./prompt-instructions";
import PromptUsers from "./prompt-users";
import PromptGroups from "./prompt-groups";
import PromptChats from "./prompt-chats";
import { Button } from "@/components-v2/ui/button";
import { Play } from "lucide-react";

function PromptDetails({
  chats,
  prompt_content,
  groups,
  users
}: Pick<PromptDetailType, 'chats' | 'groups' | 'users' | 'prompt_content'>) {
  return (
    <div className="container flex space-x-8 mb-6">
      <div className="w-2/3 flex flex-col space-y-6">
      <Button className="text-lg" variant={"outline"}>
        <Play className="size-5 mr-2" /> Start new Chat
         </Button>
      <PromptIntstructions prompt_content={prompt_content} />
        <PromptChats chats={chats} />
      </div>
      <div className="w-1/3 flex flex-col space-y-6">
        
        <PromptUsers users={users} />
        <PromptGroups groups={groups} />
      </div>
    </div>
  );
}

export default PromptDetails;
