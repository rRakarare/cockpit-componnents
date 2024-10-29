import FilterMany from "@/components-v2/custom/filter/filter-many";
import { RootState, useAppDispatch } from "@/redux-rtk-v2/app/store";
import { setLabelFilter } from "@/redux-rtk-v2/features/prompt/prompFilterSlice";
import { useSelector } from "react-redux";

function LabelFilter() {
    const filter = useSelector((state: RootState) => state.prompt.filter);
    const dispatch = useAppDispatch();

    const groups = [{
        name: 'labels',
        options: [
            {
                value: "email",
                label: "email",
                onClick: () => {
                  dispatch(setLabelFilter("email"));
                },
              },
              {
                value: "marketing",
                label: "marketing",
                onClick: () => {
                  dispatch(setLabelFilter("marketing"));
                },
              },
              {
                value: "sales",
                label: "sales",
                onClick: () => {
                  dispatch(setLabelFilter("sales"));
                },
              },
              {
                value: "coding",
                label: "coding",
                onClick: () => {
                  dispatch(setLabelFilter("coding"));
                },
              },
        ]
    }]
  
  
    return <FilterMany label="Labels" groups={groups} groupValues={[{name:"labels", value:filter?.labels}]} enableSearch />;
  }

export default LabelFilter