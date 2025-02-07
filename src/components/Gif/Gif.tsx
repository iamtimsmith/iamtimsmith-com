"use client";

import clsx from "clsx";
import { FC, HTMLAttributes, useRef } from "react";
import { useCustomizeContext } from "../../contexts/CustomizeContext";
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
  const { showGifs } = useCustomizeContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  // TODO: Look into play/pause gif
  // TODO: Look into limiting gif playback
  // Do these things actually help with accessibility?

  if (!showGifs) return null;

  return (
    <figure
      className={clsx([styles.Gif, className])}
      style={{ ...style, maxWidth }}
      aria-hidden={true}
      {...props}
    >
      <video ref={videoRef} src={src} playsInline autoPlay muted loop />
    </figure>
  );
};
