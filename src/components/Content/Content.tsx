import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, HTMLAttributes } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { EmailSignup } from "../EmailSignup";
import { Embed } from "../Embed";
import { Gif } from "../Gif";
import { Image } from "../Image";
import { Link } from "../Link";

const Pre: FC<any> = ({ children: { props } }) => (
  <SyntaxHighlighter
    className={props.className}
    language={props.className?.replace("language-", "") || "plaintext"}
    children={props.children}
    useInlineStyles={false}
    codeTagProps={{ style: {} }}
    {...props}
  />
);

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

export const Content: FC<ContentProps> = ({ children, ...props }) => (
  <MDXRemote
    source={children}
    components={{
      EmailSignup,
      Embed,
      Gif,
      a: Link,
      img: Image,
      pre: Pre,
    }}
    {...props}
  />
);
