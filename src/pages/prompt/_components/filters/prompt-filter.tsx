import ResetFilter from "./reset-filter";
import TypeFilter from "./type-filter";
import LabelFilter from "./label-filter";
import ListFilter from "./list-filter";
import SearchFilter from "./search-filter";

function PromptInputFilters() {

  return (
    <div className="flex space-x-2">
      <SearchFilter />
      <LabelFilter />
      <TypeFilter />
      <ListFilter />
      <ResetFilter />
    </div>
  );
}

export default PromptInputFilters;
