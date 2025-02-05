import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, HTMLAttributes } from "react";
import { CodeBlock } from "../CodeBlock";
import { EmailSignup } from "../EmailSignup";
import { Embed } from "../Embed";
import { Gif } from "../Gif";
import { Image } from "../Image";
import { InlineText } from "../InlineText";
import { Link } from "../Link";

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
      pre: ({ children: { props } }: any) => <CodeBlock {...props} />,
      em: (props) => <InlineText variant="italic" {...props} />,
      strong: (props) => <InlineText variant="bold" {...props} />,
      code: (props) => <InlineText variant="code" {...props} />,
    }}
    {...props}
  />
);
