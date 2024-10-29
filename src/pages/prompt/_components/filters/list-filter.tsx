import FilterMany from "@/components-v2/custom/filter/filter-many";
import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store";
import { setCustomListFilter, setListFilter } from "@/redux-rtk-v2/features/prompt/prompFilterSlice";
import { useSelector } from "react-redux";

function ListFilter() {
  const filter = useSelector((state: RootState) => state.prompt.filter);
  const dispatch = useAppDispatch();

  const groups = [
    {
      name: "list",
      options: [
        {
          value: "created",
          label: "erstellte",
          onClick: () => {
            dispatch(setListFilter("created"));
          },
        },
        {
          value: "liked",
          label: "geliked",
          onClick: () => {
            dispatch(setListFilter("liked"));
          },
        },
      ],
    },
    {
      name: "customList",
      options: [
        {
          value: "Meine Liste 1",
          label: "Meine Liste 1",
          onClick: () => {
            dispatch(setCustomListFilter("Meine Liste 1"));
          },
        },
        {
          value: "Meine Liste 2",
          label: "Meine Liste 2",
          onClick: () => {
            dispatch(setCustomListFilter("Meine Liste 2"));
          },
        },
      ],
    },
  ];

  return (
    <FilterMany
      label="Liste"
      groups={groups}
      groupValues={[{ name: "list", value: filter?.list }, { name: "customList", value: filter?.customList }]}
      enableSearch
    />
  );
}

export default ListFilter;
