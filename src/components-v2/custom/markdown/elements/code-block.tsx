import { FC, memo } from "react";
import { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeBlock = (
  props: JSX.IntrinsicElements["code"] & ExtraProps
) => {
  const match = /language-(\w+)/.exec(props.className || "");

  //@ts-expect-error Description of why the error is expected
  return !props.inline && match ? (
    <CodeBlockInner
      language={match[1]}
      value={String(props.children).replace(/\n$/, "")}
    />
  ) : (
    <code className={props.className} {...props}>
      {props.children}
    </code>
  );
};

interface Props {
  language: string;
  value: string;
}

const CodeBlockInner: FC<Props> = memo(({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={coldarkDark}
      customStyle={{
        backgroundColor: "transparent",
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
});
