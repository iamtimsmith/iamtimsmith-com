import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface GifProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  caption: string;
  maxWidth?: number;
}

export const Gif: FC<GifProps> = ({
  className,
  style,
  src,
  caption,
  maxWidth = 500,
  ...props
}) => (
  <figure
    className={clsx([styles.Gif, className])}
    style={{ ...style, maxWidth }}
    {...props}
  >
    <video src={src} playsInline autoPlay muted loop />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);
