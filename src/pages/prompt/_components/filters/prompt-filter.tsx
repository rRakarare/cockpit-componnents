import { Input } from "@/components-v2/ui/input";
import PromptFilterMany from "./prompt-filter-many";
import { ChatIcon } from "@/components-v2/custom/chat/chat-icon";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store";
import { setTypeFilter } from "@/redux-rtk-v2/features/prompt/prompFilterSlice";
import ResetFilter from "./reset-filter";

function PromptInputFilters() {
  const filter = useSelector((state: RootState) => state.prompt.filter);
  const dispatch = useAppDispatch();
  

  const typeOptions = [
    {
      value: "chat",
      label: "Chat",
      icon: <ChatIcon className="size-4 shrink-0 mr-2" type="chat" />,
      onClick: () => {
        dispatch(setTypeFilter("chat"))
      },
    },
    {
      value: "data",
      label: "Data",
      icon: <ChatIcon className="size-4 shrink-0 mr-2" type="data-chat" />,
      onClick: () => {
        dispatch(setTypeFilter("data"))
      },
    },
    {
      value: "project",
      label: "Projekt",
      icon: <ChatIcon className="size-4 shrink-0 mr-2" type="project" />,
      onClick: () => {
        dispatch(setTypeFilter("project"))
      },
    },
  ];


  return (
    <>
      <Input placeholder="Search" className="shrink-0 max-w-56"/>
      
      <PromptFilterMany label="Typ" options={typeOptions} value={filter?.type} />
      <ResetFilter />
    </>
  );
}

export default PromptInputFilters;
