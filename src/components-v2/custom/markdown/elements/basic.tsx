import { ExtraProps } from "react-markdown";

export const CustomParagraph = (
  props: JSX.IntrinsicElements["p"] & ExtraProps
) => {
  if (props.children == null || props.children === "null") {
    return null;
  }
  return <p className="mb-2 last:mb-0">{props.children}</p>;
};
