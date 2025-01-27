import { FC, HTMLAttributes } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";
import styles from "./styles.module.css";

interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | string[];
}

export const CodeBlock: FC<CodeBlockProps> = ({
  children,
  className,
  ...props
}) => {
  const lang = className?.replace("language-", "") || "plaintext";

  return (
    <div className={styles.codeBlock} {...props}>
      <SyntaxHighlighter language={lang} style={nord}>
        {children || ""}
      </SyntaxHighlighter>
    </div>
  );
};
