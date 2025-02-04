"use client";
import { CldImage } from "next-cloudinary";
import { HTMLAttributes } from "react";
import style from "./styles.module.css";

export interface ImageProps extends HTMLAttributes<HTMLSpanElement> {
  src: string;
  alt?: string;
}

export const Image = ({ src, alt = "", ...props }: ImageProps) => {
  return (
    <span className={style.image} role="figure" {...props}>
      <CldImage
        className={style.imageImg}
        src={src}
        alt={alt}
        width={600}
        height={400}
      />
      {alt && <span className={style.imageCaption}>{alt}</span>}
    </span>
  );
};
