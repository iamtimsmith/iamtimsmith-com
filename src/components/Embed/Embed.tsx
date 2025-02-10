"use client";
import { FC, HTMLAttributes } from "react";
import style from "./styles.module.css";

interface EmbedProps extends HTMLAttributes<HTMLIFrameElement> {
  src: string;
  height?: number;
  width?: number;
}

export const Embed: FC<EmbedProps> = ({
  className,
  src,
  height = 400,
  width = 600,
  ...props
}: EmbedProps) => (
  <iframe
    src={src}
    className={style.embed}
    height={height}
    width={width}
    allowFullScreen
    {...props}
  />
);
