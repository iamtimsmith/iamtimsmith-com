import { FC, HTMLAttributes } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";
import styles from "./styles.module.css";

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  children?: string | string[];
}

export const CodeBlock: FC<CodeBlockProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  const lang = className?.replace("language-", "") || "plaintext";

  return (
    <SyntaxHighlighter
      className={styles.codeBlock}
      language={lang}
      style={nord}
      children={children}
      {...props}
    />
  );
};
