import { Button } from "@/components-v2/ui/button";
import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store";
import { toggleListView } from "@/redux-rtk-v2/features/prompt/prompFilterSlice";
import { LayoutList, Plus } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PromptFilter from "./filters/prompt-filter";

function PromptSettings() {

  const {isList, filter} = useSelector((state: RootState) => state.prompt);
  const dispatch = useAppDispatch();

  console.log("filter",filter)

  return (
    <div className="topbar justify-between bg-background/60 backdrop-blur-lg py-10">
      <div className="flex space-x-3">
        <Button size={"icon"} className="shrink-0" variant={isList ? "default" : "outline"} onClick={()=>dispatch(toggleListView())}>
          <LayoutList className="size-5" />
        </Button>
        
        <PromptFilter />
      </div>
      <div className="flex space-x-3">
        
        <Button asChild>
        <Link to={"/prompt/create"} >
          <Plus className="size-5 mr-2" />
          Hinzufügen
        </Link>
        </Button>
      </div>
    </div>
  );
}

export default PromptSettings;
