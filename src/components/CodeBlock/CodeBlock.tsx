import { FC, HTMLAttributes } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";
import styles from "./styles.module.css";

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  lang?: string;
  value?: string | string[];
}

export const CodeBlock: FC<CodeBlockProps> = ({
  lang,
  value,
  className,
  ...props
}) => {
  return (
    <div className={styles.codeBlock} {...props}>
      <SyntaxHighlighter language={lang} style={nord}>
        {value || ""}
      </SyntaxHighlighter>
    </div>
  );
};
