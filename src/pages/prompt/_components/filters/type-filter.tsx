import { ChatIcon } from "@/components-v2/custom/chat/chat-icon";
import FilterMany from "@/components-v2/custom/filter/filter-many";
import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store";
import { setTypeFilter } from "@/redux-rtk-v2/features/prompt/prompFilterSlice";
import { useSelector } from "react-redux";

function TypeFilter() {
  const filter = useSelector((state: RootState) => state.prompt.filter);
  const dispatch = useAppDispatch();

  const groups = [
    {
      name: "type",
      options: [
        {
          value: "chat",
          label: "Chat",
          icon: <ChatIcon className="size-4 shrink-0 mr-2" type="chat" />,
          onClick: () => {
            dispatch(setTypeFilter("chat"));
          },
        },
        {
          value: "data",
          label: "Data",
          icon: <ChatIcon className="size-4 shrink-0 mr-2" type="data-chat" />,
          onClick: () => {
            dispatch(setTypeFilter("data"));
          },
        },
        {
          value: "project",
          label: "Projekt",
          icon: <ChatIcon className="size-4 shrink-0 mr-2" type="project" />,
          onClick: () => {
            dispatch(setTypeFilter("project"));
          },
        },
      ],
    },
  ]


  return <FilterMany label="Typ" groups={groups} groupValues={[{name:"type", value:filter?.type}]} />;
}

export default TypeFilter;
