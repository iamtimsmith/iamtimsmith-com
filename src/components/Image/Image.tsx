import { CldImage } from "next-cloudinary";
import { slugify } from "../../utils/slugify";
import styles from "./styles.module.css";

export interface ImageProps {
  url?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export const Image = ({
  url,
  caption,
  alt = "",
  width = 600,
  height = 400,
}: ImageProps) => {
  const id = caption ? slugify(caption) : undefined;

  return (
    <span className={styles.image} role="figure" aria-labelledby={id}>
      {url && (
        <CldImage
          className={styles.imageImg}
          src={url}
          alt={alt}
          width={width}
          height={height}
        />
      )}
      {caption && (
        <span id={id} className={styles.imageCaption}>
          {caption}
        </span>
      )}
    </span>
  );
};
