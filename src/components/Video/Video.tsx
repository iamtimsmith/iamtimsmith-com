import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  caption?: string;
  loop?: boolean;
  width?: number;
}

/**Component to display videos with captions. This component differs from the
 * <Gif/> component because the <Gif/> component will be hidden to screen
 * readers since they do not add any value to the user.
 **/
export const Video: FC<VideoProps> = ({
  className,
  src,
  caption,
  loop,
  width,
  ...props
}) => {
  // Allows video to be looped if needed
  const videoProps = loop
    ? { playsInline: true, autoPlay: true, muted: true, loop: true }
    : {};

  return (
    <figure className={clsx([styles.video, className])} {...props}>
      <video src={src} {...videoProps} width={width} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
