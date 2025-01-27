import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import style from "./styles.module.css";

interface EmbedProps extends HTMLAttributes<HTMLDivElement> {}

export const Embed: FC<EmbedProps> = ({
  className,
  children,
  ...props
}: EmbedProps) => (
  <div
    className={clsx([style.embed, className])}
    dangerouslySetInnerHTML={{ __html: children as string }}
    {...props}
  />
);
