import { FC, HTMLAttributes } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeBlockProps extends Omit<HTMLAttributes<HTMLPreElement>, "style"> {
  children: string;
}

export const CodeBlock: FC<CodeBlockProps> = (props) => (
  <SyntaxHighlighter
    className={props.className}
    language={props.className?.replace("language-", "") || "plaintext"}
    children={props.children}
    useInlineStyles={false}
    codeTagProps={{ style: {} }}
    {...props}
  />
);
