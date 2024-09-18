import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { CustomParagraph } from "./elements/basic";
import { MemoizedReactMarkdown } from "./elements/memoized-markdown";
import { CodeBlock } from "./elements/code-block";

function Markdown({ children }) {
  return (
    <MemoizedReactMarkdown
      className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
      components={{
        p: CustomParagraph,
        code: CodeBlock,
      }}
      remarkPlugins={[remarkGfm, remarkMath]}
    >
      {children}
    </MemoizedReactMarkdown>
  );
}

export default Markdown;
