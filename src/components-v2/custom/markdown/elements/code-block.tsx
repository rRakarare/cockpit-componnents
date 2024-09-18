import { ExtraProps } from "react-markdown";
import { CodeBlockInner } from "./code-block-inner";

export const CodeBlock = (
  props: JSX.IntrinsicElements["code"] & ExtraProps
) => {
  if (Array.isArray(props.children) && props.children.length) {
    if (props.children[0] == "▍") {
      return <span className="mt-1 cursor-default animate-pulse">▍</span>;
    }

    props.children[0] = (props.children[0] as string).replace("`▍`", "▍");
  }

  const match = /language-(\w+)/.exec(props.className || "");

  //@ts-expect-error Description of why the error is expected
  if (props.inline) {
    return (
      <code className={props.className} {...props}>
        {props.children}
      </code>
    );
  }

  return (
    <CodeBlockInner
      key={Math.random()}
      language={(match && match[1]) || ""}
      value={String(props.children).replace(/\n$/, "")}
      {...props}
    />
  );
};
