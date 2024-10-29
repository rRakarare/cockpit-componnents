import { Input } from "@/components-v2/ui/input";
import ResetFilter from "./reset-filter";
import TypeFilter from "./type-filter";
import LabelFilter from "./label-filter";
import ListFilter from "./list-filter";

function PromptInputFilters() {

  




  return (
    <>
      <Input placeholder="Search" className="shrink-0 max-w-56"/>
      <LabelFilter />
      <TypeFilter />
      <ListFilter />
      <ResetFilter />
    </>
  );
}

export default PromptInputFilters;
