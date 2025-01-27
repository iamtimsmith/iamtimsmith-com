import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, HTMLAttributes } from "react";
import { CodeBlock } from "../CodeBlock";
import { EmailSignup } from "../EmailSignup";
import { Gif } from "../Gif";
import { Link } from "../Link";

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

export const Content: FC<ContentProps> = ({ children, ...props }) => (
  <MDXRemote
    source={children}
    components={{
      EmailSignup,
      Gif,
      pre: (props) => {
        const data = (props.children as any).props;
        return <CodeBlock {...data} />;
      },
      a: Link,
    }}
    {...props}
  />
);
