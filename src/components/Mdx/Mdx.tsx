import { MDXRemote } from "next-mdx-remote/rsc";
import { FC, HTMLAttributes } from "react";
import { CodeBlock } from "../CodeBlock";
import { EmailSignup } from "../EmailSignup";
import { Gif } from "../Gif";
import { Link } from "../Link";

export interface MdxProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
}

export const Mdx: FC<MdxProps> = ({ content, ...props }) => {
  return (
    <MDXRemote
      source={content}
      components={{ EmailSignup, Gif, code: CodeBlock, a: Link }}
      {...props}
    />
  );
};
