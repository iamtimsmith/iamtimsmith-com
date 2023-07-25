import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { CodeBlock } from "../CodeBlock";
import { EmailSignup } from "../EmailSignup";
import { Gif } from "../Gif";
import { Image } from "../Image";
import { Link } from "../Link";

interface MarkdownProps {
  content: TinaMarkdownContent;
}

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <TinaMarkdown
      content={content}
      components={{
        gif: Gif,
        email_signup: EmailSignup,
        code_block: CodeBlock,
        img: Image,
        a: Link,
      }}
    />
  );
};
