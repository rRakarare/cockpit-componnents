import ChatInput from "@/components-v2/custom/chat/chat-input";
import SiloChats from "./silo-chats";
import SiloInstructions from "./silo-instructions";
import SiloGroups from "./silo-groups";
import { DataSiloDetailType } from "@/types/db/dataSilo";

function SiloDetails({
  chats,
  groups,
  system_message
}: Pick<DataSiloDetailType, "chats" | 'groups' | 'system_message'>) {
  return (
    <div className="container flex space-x-8 mb-6">
      <div className="w-2/3 flex flex-col space-y-6">
        <ChatInput onChange={() => console.log("")} onSend={() => {}}>
          ...
        </ChatInput>
        <SiloChats chats={chats} />
      </div>
      <div className="w-1/3 flex flex-col space-y-6">
        <SiloInstructions system_message={system_message} />
        <SiloGroups groups={groups} />
      </div>
    </div>
  );
}

export default SiloDetails;
