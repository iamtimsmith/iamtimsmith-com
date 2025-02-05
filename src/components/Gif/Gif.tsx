"use client";

import clsx from "clsx";
import { FC, HTMLAttributes, useEffect, useRef } from "react";
import styles from "./styles.module.css";

interface GifProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  caption?: string;
  maxWidth?: number;
}

/**
 * NOTES ON ACCESSIBILITY
 * Gifs do not require captions: https://www.w3.org/WAI/media/av/captions/#checklist
 **/
export const Gif: FC<GifProps> = ({
  className,
  style,
  src,
  caption,
  maxWidth = 500,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Pause the video after 5 seconds
    setTimeout(() => {
      videoRef.current?.pause();
    }, 5000);
  });

  return (
    <figure
      className={clsx([styles.Gif, className])}
      style={{ ...style, maxWidth }}
      {...props}
    >
      <video ref={videoRef} src={src} playsInline autoPlay muted loop />
    </figure>
  );
};
